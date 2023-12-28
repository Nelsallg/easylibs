(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("transformer", [], factory);
	else if(typeof exports === 'object')
		exports["transformer"] = factory();
	else
		root["transformer"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/transformer.ts":
/*!****************************!*\
  !*** ./src/transformer.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transformer = void 0;
function getMimeType(base64String, get = "both") {
    const extension = base64String
        .split(",")[0]
        .split(":")[1]
        .split(";")[0]
        .split("/")[1];
    const fileType = base64String
        .split(",")[0]
        .split(":")[1]
        .split(";")[0]
        .split("/")[0];
    if ("type" === get) {
        return fileType;
    }
    if ("extension" === get) {
        return extension;
    }
    return fileType + "/" + extension;
}
var Transformer;
(function (Transformer) {
    class Base64Transformer {
        constructor() {
            this.base64String = "";
        }
        /**
         * Convertit une chaîne base64 en objet File.
         * @param base64String - La chaîne encodée en base64.
         * @param fileName - (Optionnel) Le nom du fichier.
         * @returns Le fichier résultant.
         */
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
            const extension = getMimeType(base64String, "extension");
            const fileType = getMimeType(base64String, "type");
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
        /**
         * Convertit un objet File en chaîne base64.
         * @param file - Le fichier à convertir en base64.
         * @returns La chaîne base64 résultante (sous forme de promesse).
         */
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
        /**
         * Convertit une chaîne base64 en tableau Uint8Array.
         * @param base64String - La chaîne encodée en base64.
         * @returns Le tableau Uint8Array résultant.
         */
        toUint8Array(base64String) {
            const binaryString = window.atob(base64String.split(",")[1]);
            const { length } = binaryString;
            const bytes = new Uint8Array(length);
            for (let i = 0; i < length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes;
        }
        /**
         * Convertit un tableau Uint8Array en chaîne base64.
         * @param uint8Array - Le tableau Uint8Array à convertir en base64.
         * @returns La chaîne base64 résultante.
         */
        fromUint8Array(uint8Array) {
            let binaryString = "";
            for (let i = 0; i < uint8Array.length; i++) {
                binaryString += String.fromCharCode(uint8Array[i]);
            }
            return window.btoa(binaryString);
        }
        /**
         * Convertit un objet Blob en chaîne base64 ou ArrayBuffer.
         * @param blob - Le Blob à convertir.
         * @returns La chaîne base64 ou ArrayBuffer résultante (sous forme de promesse).
         */
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
    Transformer.Base64Transformer = Base64Transformer;
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
    Transformer.BlobTransformer = BlobTransformer;
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
    Transformer.FileTransformer = FileTransformer;
    class FormDataTransformer {
        constructor(data) {
            this._data = data;
        }
        /**
         * Transforme les données en un objet FormData.
         * @returns L'objet FormData résultant.
         */
        transform() {
            const formData = new FormData();
            if (typeof this._data === "object") {
                let data = this._data;
                try {
                    for (const key in this._data) {
                        if (this._data.hasOwnProperty(key)) {
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
        /**
         * Revertit un objet FormData en objet JavaScript.
         * @returns L'objet JavaScript résultant.
         */
        reverse() {
            let elementObject = {};
            if (this._data instanceof FormData) {
                try {
                    const tempObject = {};
                    this._data.forEach((value, key) => {
                        tempObject[key] = value;
                    });
                    elementObject = Object.assign({}, tempObject);
                }
                catch (error) {
                    console.error("Erreur détectée: " + error);
                }
            }
            return elementObject;
        }
        /**
         * Option de transformation spécifique.
         * @param option - L'option de transformation ('onlyobject', 'onlyformdata', 'auto').
         * @returns L'objet ou le FormData résultant en fonction de l'option spécifiée.
         */
        option(option) {
            if (option === "onlyobject") {
                if (this._data instanceof FormData) {
                    return this.reverse();
                }
                return this._data;
            }
            if (option === "onlyformdata") {
                if (this._data instanceof FormData) {
                    return this._data;
                }
                return this.transform();
            }
            if (option === "auto") {
                return this.auto();
            }
        }
        auto() {
            if (this._data instanceof FormData) {
                return this.reverse();
            }
            else {
                return this.transform();
            }
        }
    }
    Transformer.FormDataTransformer = FormDataTransformer;
})(Transformer || (exports.Transformer = Transformer = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/transformer.ts"](0, __webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=transformer.js.map