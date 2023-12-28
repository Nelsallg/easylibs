export declare namespace Transformer {
    class Base64Transformer {
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
    class BlobTransformer {
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
    class FileTransformer {
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
    class FormDataTransformer {
        private _data;
        constructor(data: object | FormData);
        /**
         * Transforme les données en un objet FormData.
         * @returns L'objet FormData résultant.
         */
        transform(): FormData;
        /**
         * Revertit un objet FormData en objet JavaScript.
         * @returns L'objet JavaScript résultant.
         */
        reverse(): object;
        /**
         * Option de transformation spécifique.
         * @param option - L'option de transformation ('onlyobject', 'onlyformdata', 'auto').
         * @returns L'objet ou le FormData résultant en fonction de l'option spécifiée.
         */
        option(option: string): object;
        private auto;
    }
}
