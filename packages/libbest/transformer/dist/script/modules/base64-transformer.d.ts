import { IBase64Transformer } from "../../main";
export declare class Base64Transformer implements IBase64Transformer {
    protected base64String: string;
    toFile(base64String: string, fileName?: string): File;
    fromFile(file: File): Promise<any>;
    toUint8Array(base64String: string): Uint8Array;
    fromUint8Array(uint8Array: Uint8Array): string;
    fromBlob(blob: Blob): Promise<string | ArrayBuffer>;
}
