export declare class Base64Transformer {
    protected base64String: string;
    /**
     * Convertit une chaîne base64 en objet File.
     * @param base64String - La chaîne encodée en base64.
     * @param fileName - (Optionnel) Le nom du fichier.
     * @returns Le fichier résultant.
     */
    toFile(base64String: string, fileName?: string): File;
    /**
     * Convertit un objet File en chaîne base64.
     * @param file - Le fichier à convertir en base64.
     * @returns La chaîne base64 résultante (sous forme de promesse).
     */
    fromFile(file: File): Promise<any>;
    /**
     * Convertit une chaîne base64 en tableau Uint8Array.
     * @param base64String - La chaîne encodée en base64.
     * @returns Le tableau Uint8Array résultant.
     */
    toUint8Array(base64String: string): Uint8Array;
    /**
     * Convertit un tableau Uint8Array en chaîne base64.
     * @param uint8Array - Le tableau Uint8Array à convertir en base64.
     * @returns La chaîne base64 résultante.
     */
    fromUint8Array(uint8Array: Uint8Array): string;
    /**
     * Convertit un objet Blob en chaîne base64 ou ArrayBuffer.
     * @param blob - Le Blob à convertir.
     * @returns La chaîne base64 ou ArrayBuffer résultante (sous forme de promesse).
     */
    fromBlob(blob: Blob): Promise<string | ArrayBuffer>;
}
