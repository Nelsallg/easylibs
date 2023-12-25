import { IFileTransformer } from "../../main";
export declare class FileTransformer implements IFileTransformer {
    toBase64(file: File): Promise<unknown>;
    fromBase64String(base64String: string, contentType?: string | null, fileName?: string | null, formatString?: boolean): File;
    fromUint8Array(uint8Array: Uint8Array, mimeType: string, fileName: string): File;
}
