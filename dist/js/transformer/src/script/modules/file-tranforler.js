define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileTransformer = void 0;
    class FileTransformer {
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
        fromUint8Array(uint8Array, mimeType, fileName) {
            return new File(uint8Array, fileName, { type: mimeType });
        }
    }
    exports.FileTransformer = FileTransformer;
});
//# sourceMappingURL=file-tranforler.js.map