function getMimeType(base64String: string, get: string = "both"): string {
  const extension = base64String
    .split(",")[0]
    .split(":")[1]
    .split(";")[0]
    .split("/")[1];
  const fileType = base64String
    .split(",")[0]
    .split(":")[1]
    .split(";")[0]
    .split("/")[0];

  if ("type" === get) {
    return fileType;
  }
  if ("extension" === get) {
    return extension;
  }
  return fileType + "/" + extension;
}


export namespace Transformer {
  export class Base64Transformer {
    protected base64String: string = "";
    /**
     * Convertit une chaîne base64 en objet File.
     * @param base64String - La chaîne encodée en base64.
     * @param fileName - (Optionnel) Le nom du fichier.
     * @returns Le fichier résultant.
     */
    public toFile(base64String: string, fileName?: string): File {
      this.base64String = base64String;
      const byteCharacters = window.atob(base64String.split(",")[1]);
      const byteArrays: Array<Uint8Array> = [];
      let _fileName = "";
      for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      const extension = getMimeType(base64String, "extension");
      const fileType = getMimeType(base64String, "type");
      if (fileName) {
        _fileName = fileName;
      } else {
        _fileName = `tranformed_file.${extension}`;
      }
      return new File(byteArrays, _fileName, {
        type: `${fileType}/${extension}`,
      });
    }
    /**
     * Convertit un objet File en chaîne base64.
     * @param file - Le fichier à convertir en base64.
     * @returns La chaîne base64 résultante (sous forme de promesse).
     */
    public fromFile(file: File): Promise<any> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    }
    /**
     * Convertit une chaîne base64 en tableau Uint8Array.
     * @param base64String - La chaîne encodée en base64.
     * @returns Le tableau Uint8Array résultant.
     */
    public toUint8Array(base64String: string): Uint8Array {
      const binaryString = window.atob(base64String.split(",")[1]);
      const { length } = binaryString;
      const bytes = new Uint8Array(length);
      for (let i = 0; i < length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes;
    }
    /**
     * Convertit un tableau Uint8Array en chaîne base64.
     * @param uint8Array - Le tableau Uint8Array à convertir en base64.
     * @returns La chaîne base64 résultante.
     */
    public fromUint8Array(uint8Array: Uint8Array): string {
      let binaryString = "";
      for (let i = 0; i < uint8Array.length; i++) {
        binaryString += String.fromCharCode(uint8Array[i]);
      }
      return window.btoa(binaryString);
    }
    /**
     * Convertit un objet Blob en chaîne base64 ou ArrayBuffer.
     * @param blob - Le Blob à convertir.
     * @returns La chaîne base64 ou ArrayBuffer résultante (sous forme de promesse).
     */
    public async fromBlob(blob: Blob): Promise<string | ArrayBuffer> {
      return new Promise<string | ArrayBuffer>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = function () {
          const { result } = reader;
          const base64String = result || "";
          resolve(base64String);
        };
        reader.readAsDataURL(blob);
      });
    }
  }
  export class BlobTransformer {
    /**
     * Convertit un tableau Uint8Array en objet Blob.
     * @param uint8Array - Le tableau Uint8Array à convertir en Blob.
     * @param contentType - (Optionnel) Le type de contenu du Blob.
     * @returns Le Blob résultant.
     */
    public fromUint8Array(uint8Array: Uint8Array, contentType?: string): Blob {
      contentType = contentType ?? "";
      return new Blob([uint8Array], { type: contentType });
    }
    /**
     * Crée un Blob à partir d'un objet File.
     * @param file - Le fichier à convertir en Blob.
     * @returns Le Blob résultant.
     */
    public fromFile(file: File): Blob {
      return file.slice(0, file.size, file.type);
    }
    /**
     * Crée un Blob à partir d'une chaîne encodée en base64.
     * @param base64String - La chaîne encodée en base64.
     * @param contentType - (Optionnel) Le type de contenu du Blob.
     * @returns Le Blob résultant.
     */
    public fromBase64String(base64String: string, contentType?: string): Blob {
      contentType = contentType || "";
      const byteCharacters = window.atob(base64String.split(",")[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: contentType });
    }
  }

  export class FileTransformer {
    /**
     * Convertit un fichier en chaîne base64.
     * @param file - Le fichier à convertir en base64.
     * @returns La chaîne base64 résultante (sous forme de promesse).
     */
    public toBase64(file: File): Promise<unknown> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    }
    /**
     * Convertit une chaîne base64 en objet File.
     * @param base64String - La chaîne encodée en base64.
     * @param contentType - (Optionnel) Le type de contenu du fichier.
     * @param fileName - (Optionnel) Le nom du fichier.
     * @param formatString - (Optionnel) Indique si la chaîne base64 est formatée.
     * @returns Le fichier résultant.
     */
    public fromBase64String(
      base64String: string,
      contentType?: string | null,
      fileName?: string | null,
      formatString: boolean = true
    ): File {
      contentType = contentType || "";
      const fileInfo = formatString ? base64String.split(",")[1] : base64String;
      const byteCharacters = window.atob(fileInfo);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: contentType });
      fileName = fileName || "image";
      return new File([blob], fileName, { type: contentType });
    }
    /**
     * Convertit un tableau Uint8Array en objet File.
     * @param uint8Array - Le tableau Uint8Array.
     * @param mimeType - Le type MIME du fichier.
     * @param fileName - Le nom du fichier.
     * @returns Le fichier résultant.
     */
    public fromUint8Array(
      uint8Array: Uint8Array,
      mimeType: string,
      fileName: string
    ): File {
      return new File(uint8Array as any, fileName, { type: mimeType });
    }
  }
  export class FormDataTransformer {
    private _data: object | undefined;
    constructor(data: object | FormData) {
      this._data = data;
    }
    /**
     * Transforme les données en un objet FormData.
     * @returns L'objet FormData résultant.
     */
    public transform(): FormData {
      const formData = new FormData();
      if (typeof this._data === "object") {
        let data = this._data as any;
        try {
          for (const key in this._data) {
            if (this._data.hasOwnProperty(key)) {
              formData.append(key, data[key]);
            }
          }
        } catch (error) {
          console.error("Erreur détectée: " + error);
        }
      }
      return formData;
    }
    /**
     * Revertit un objet FormData en objet JavaScript.
     * @returns L'objet JavaScript résultant.
     */
    public reverse(): object {
      let elementObject: object = {};
      if (this._data instanceof FormData) {
        try {
          const tempObject: any = {};
          this._data.forEach((value, key) => {
            tempObject[key] = value;
          });
          elementObject = { ...tempObject };
        } catch (error) {
          console.error("Erreur détectée: " + error);
        }
      }
      return elementObject;
    }
    /**
     * Option de transformation spécifique.
     * @param option - L'option de transformation ('onlyobject', 'onlyformdata', 'auto').
     * @returns L'objet ou le FormData résultant en fonction de l'option spécifiée.
     */
    public option(option: string) {
      if (option === "onlyobject") {
        if (this._data instanceof FormData) {
          return this.reverse();
        }
        return this._data;
      }
      if (option === "onlyformdata") {
        if (this._data instanceof FormData) {
          return this._data;
        }
        return this.transform();
      }
      if (option === "auto") {
        return this.auto();
      }
    }
    private auto() {
      if (this._data instanceof FormData) {
        return this.reverse();
      } else {
        return this.transform();
      }
    }
  }
}
