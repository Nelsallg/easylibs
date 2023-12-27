export declare class BlobTransformer {
    /**
     * Convertit un tableau Uint8Array en objet Blob.
     * @param uint8Array - Le tableau Uint8Array à convertir en Blob.
     * @param contentType - (Optionnel) Le type de contenu du Blob.
     * @returns Le Blob résultant.
     */
    fromUint8Array(uint8Array: Uint8Array, contentType?: string): Blob;
    /**
     * Crée un Blob à partir d'un objet File.
     * @param file - Le fichier à convertir en Blob.
     * @returns Le Blob résultant.
     */
    fromFile(file: File): Blob;
    /**
     * Crée un Blob à partir d'une chaîne encodée en base64.
     * @param base64String - La chaîne encodée en base64.
     * @param contentType - (Optionnel) Le type de contenu du Blob.
     * @returns Le Blob résultant.
     */
    fromBase64String(base64String: string, contentType?: string): Blob;
}
