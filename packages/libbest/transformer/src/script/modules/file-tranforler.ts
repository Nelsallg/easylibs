import { IFileTransformer } from "../../main";

export class FileTransformer implements IFileTransformer{
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
    public fromBase64String(base64String: string, contentType?: string | null, fileName?: string | null, formatString: boolean = true): File {
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
    public fromUint8Array(
      uint8Array: Uint8Array,
      mimeType: string,
      fileName: string
    ): File {
      return new File(uint8Array as any, fileName, { type: mimeType });
    }
  }