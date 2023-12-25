"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTransformer = void 0;
var FileTransformer = /** @class */ (function () {
    function FileTransformer() {
    }
    FileTransformer.prototype.toBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () {
                resolve(reader.result);
            };
            reader.onerror = function (error) {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    };
    FileTransformer.prototype.fromBase64String = function (base64String, contentType, fileName, formatString) {
        if (formatString === void 0) { formatString = true; }
        contentType = contentType || "";
        var fileInfo = formatString ? base64String.split(",")[1] : base64String;
        var byteCharacters = window.atob(fileInfo);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray], { type: contentType });
        fileName = fileName || "image";
        return new File([blob], fileName, { type: contentType });
    };
    FileTransformer.prototype.fromUint8Array = function (uint8Array, mimeType, fileName) {
        return new File(uint8Array, fileName, { type: mimeType });
    };
    return FileTransformer;
}());
exports.FileTransformer = FileTransformer;
//# sourceMappingURL=file-tranforler.js.map