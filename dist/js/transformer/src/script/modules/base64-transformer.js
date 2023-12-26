var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "../functions/mime"], function (require, exports, mime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Base64Transformer = void 0;
    class Base64Transformer {
        constructor() {
            this.base64String = "";
        }
        toFile(base64String, fileName) {
            this.base64String = base64String;
            const byteCharacters = window.atob(base64String.split(",")[1]);
            const byteArrays = [];
            let _fileName = "";
            for (let offset = 0; offset < byteCharacters.length; offset += 512) {
                const slice = byteCharacters.slice(offset, offset + 512);
                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            const extension = (0, mime_1.getMimeType)(base64String, "extension");
            const fileType = (0, mime_1.getMimeType)(base64String, "type");
            if (fileName) {
                _fileName = fileName;
            }
            else {
                _fileName = `tranformed_file.${extension}`;
            }
            return new File(byteArrays, _fileName, {
                type: `${fileType}/${extension}`,
            });
        }
        fromFile(file) {
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
        toUint8Array(base64String) {
            const binaryString = window.atob(base64String.split(",")[1]);
            const { length } = binaryString;
            const bytes = new Uint8Array(length);
            for (let i = 0; i < length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes;
        }
        fromUint8Array(uint8Array) {
            let binaryString = "";
            for (let i = 0; i < uint8Array.length; i++) {
                binaryString += String.fromCharCode(uint8Array[i]);
            }
            return window.btoa(binaryString);
        }
        fromBlob(blob) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = function () {
                        const { result } = reader;
                        const base64String = result || "";
                        resolve(base64String);
                    };
                    reader.readAsDataURL(blob);
                });
            });
        }
    }
    exports.Base64Transformer = Base64Transformer;
});
//# sourceMappingURL=base64-transformer.js.map