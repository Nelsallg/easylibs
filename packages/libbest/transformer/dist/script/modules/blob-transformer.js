"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobTransformer = void 0;
var BlobTransformer = /** @class */ (function () {
    function BlobTransformer() {
    }
    BlobTransformer.prototype.fromUint8Array = function (uint8Array, contentType) {
        contentType = contentType !== null && contentType !== void 0 ? contentType : "";
        return new Blob([uint8Array], { type: contentType });
    };
    BlobTransformer.prototype.fromFile = function (file) {
        return file.slice(0, file.size, file.type);
    };
    BlobTransformer.prototype.fromBase64String = function (base64String, contentType) {
        contentType = contentType || "";
        var byteCharacters = window.atob(base64String.split(",")[1]);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: contentType });
    };
    return BlobTransformer;
}());
exports.BlobTransformer = BlobTransformer;
//# sourceMappingURL=blob-transformer.js.map