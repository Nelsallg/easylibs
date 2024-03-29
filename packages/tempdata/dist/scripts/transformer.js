"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataTransformer = exports.BlobTransformer = void 0;
class BlobTransformer {
    /**
     * Convertit un tableau Uint8Array en objet Blob.
     * @param uint8Array - Le tableau Uint8Array à convertir en Blob.
     * @param contentType - (Optionnel) Le type de contenu du Blob.
     * @returns Le Blob résultant.
     */
    fromUint8Array(uint8Array, contentType) {
        contentType = contentType !== null && contentType !== void 0 ? contentType : "";
        return new Blob([uint8Array], { type: contentType });
    }
    /**
     * Crée un Blob à partir d'un objet File.
     * @param file - Le fichier à convertir en Blob.
     * @returns Le Blob résultant.
     */
    fromFile(file) {
        return file.slice(0, file.size, file.type);
    }
    /**
     * Crée un Blob à partir d'une chaîne encodée en base64.
     * @param base64String - La chaîne encodée en base64.
     * @param contentType - (Optionnel) Le type de contenu du Blob.
     * @returns Le Blob résultant.
     */
    fromBase64String(base64String, contentType) {
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
exports.BlobTransformer = BlobTransformer;
class FormDataTransformer {
    constructor(data) {
        this.data = data;
    }
    /**
     * Transforme les données en un objet FormData.
     * @returns L'objet FormData résultant.
     */
    transform() {
        const formData = new FormData();
        if (typeof this.data === "object") {
            let data = this.data;
            try {
                for (const key in this.data) {
                    if (this.data.hasOwnProperty(key)) {
                        formData.append(key, data[key]);
                    }
                }
            }
            catch (error) {
                console.error("Erreur détectée: " + error);
            }
        }
        return formData;
    }
}
exports.FormDataTransformer = FormDataTransformer;
//# sourceMappingURL=transformer.js.map