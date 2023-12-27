export declare class FileTransformer {
    /**
       * Convertit un fichier en chaîne base64.
       * @param file - Le fichier à convertir en base64.
       * @returns La chaîne base64 résultante (sous forme de promesse).
       */
    toBase64(file: File): Promise<unknown>;
    /**
     * Convertit une chaîne base64 en objet File.
     * @param base64String - La chaîne encodée en base64.
     * @param contentType - (Optionnel) Le type de contenu du fichier.
     * @param fileName - (Optionnel) Le nom du fichier.
     * @param formatString - (Optionnel) Indique si la chaîne base64 est formatée.
     * @returns Le fichier résultant.
     */
    fromBase64String(base64String: string, contentType?: string | null, fileName?: string | null, formatString?: boolean): File;
    /**
     * Convertit un tableau Uint8Array en objet File.
     * @param uint8Array - Le tableau Uint8Array.
     * @param mimeType - Le type MIME du fichier.
     * @param fileName - Le nom du fichier.
     * @returns Le fichier résultant.
     */
    fromUint8Array(uint8Array: Uint8Array, mimeType: string, fileName: string): File;
}
