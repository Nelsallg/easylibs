import { IBase64Transformer } from "../../main";
import { getMimeType } from "../functions/mime";

export class Base64Transformer implements IBase64Transformer{
    protected base64String: string = "";
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
    public toUint8Array(base64String: string): Uint8Array {
      const binaryString = window.atob(base64String.split(",")[1]);
      const { length } = binaryString;
      const bytes = new Uint8Array(length);
      for (let i = 0; i < length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes;
    }
    public fromUint8Array(uint8Array: Uint8Array): string {
      let binaryString = "";
      for (let i = 0; i < uint8Array.length; i++) {
        binaryString += String.fromCharCode(uint8Array[i]);
      }
      return window.btoa(binaryString);
    }
  
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