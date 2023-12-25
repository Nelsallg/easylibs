import { IBlobTransformer } from "../../main";
export declare class BlobTransformer implements IBlobTransformer {
    fromUint8Array(uint8Array: Uint8Array, contentType?: string): Blob;
    fromFile(file: File): Blob;
    fromBase64String(base64String: string, contentType?: string): Blob;
}
