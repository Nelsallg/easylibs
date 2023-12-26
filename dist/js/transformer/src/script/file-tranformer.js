define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileTransformer = void 0;
    class FileTransformer {
        /**
           * Convertit un fichier en chaîne base64.
           * @param file - Le fichier à convertir en base64.
           * @returns La chaîne base64 résultante (sous forme de promesse).
           */
        toBase64(file) {
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
        /**
         * Convertit une chaîne base64 en objet File.
         * @param base64String - La chaîne encodée en base64.
         * @param contentType - (Optionnel) Le type de contenu du fichier.
         * @param fileName - (Optionnel) Le nom du fichier.
         * @param formatString - (Optionnel) Indique si la chaîne base64 est formatée.
         * @returns Le fichier résultant.
         */
        fromBase64String(base64String, contentType, fileName, formatString = true) {
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
        /**
         * Convertit un tableau Uint8Array en objet File.
         * @param uint8Array - Le tableau Uint8Array.
         * @param mimeType - Le type MIME du fichier.
         * @param fileName - Le nom du fichier.
         * @returns Le fichier résultant.
         */
        fromUint8Array(uint8Array, mimeType, fileName) {
            return new File(uint8Array, fileName, { type: mimeType });
        }
    }
    exports.FileTransformer = FileTransformer;
});
//# sourceMappingURL=file-tranformer.js.map