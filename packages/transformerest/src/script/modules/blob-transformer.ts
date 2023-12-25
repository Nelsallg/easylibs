import { IBlobTransformer } from "../../main";

export class BlobTransformer implements IBlobTransformer {
    public fromUint8Array(uint8Array: Uint8Array, contentType?: string): Blob {
        contentType = contentType ?? "";
        return new Blob([uint8Array], { type: contentType });
    }

    public fromFile(file: File): Blob {
        return file.slice(0, file.size, file.type);
    }

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