(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tempdata", [], factory);
	else if(typeof exports === 'object')
		exports["tempdata"] = factory();
	else
		root["tempdata"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tempdata.ts":
/*!*************************!*\
  !*** ./src/tempdata.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const transformer_1 = __webpack_require__(/*! @easylibs/transformer */ "../transformer/dist/transformer.js");
const utils_1 = __importDefault(__webpack_require__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
class TempData {
    /**
     * @param databasename - Le nom de la base de données IndexedDB à ouvrir ou créer.
     * @param objectstorename - Le nom de l'objet (object store) qui contiendra les éléments à stockés
     * @param version - La version de la base de données IndexedDB (par défaut : 1).
     */
    constructor(databasename, objectstorename, version = 1) {
        this.databasename = databasename;
        this.objectstorename = objectstorename;
        this.version = version;
    }
    /**
     * Opens or creates a new IndexedDB database with the specified name and version.
     * @returns A promise that resolves to the opened or created IDBDatabase object.
     */
    openDB() {
        return new Promise((resolve, reject) => {
            const request = window.indexedDB.open(this.databasename, this.version);
            request.onerror = (event) => {
                const { target } = event;
                console.error("Failed to open database", target === null || target === void 0 ? void 0 : target.error);
                reject(target === null || target === void 0 ? void 0 : target.error);
            };
            request.onsuccess = (event) => {
                var _a;
                const db = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                resolve(db);
            };
            request.onupgradeneeded = (event) => {
                var _a;
                const db = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                db.createObjectStore(this.objectstorename, { autoIncrement: true });
            };
        });
    }
    /**
     * Adds a new element to the IDBObjectStore with the provided object.
     * @param elementObject - The object to add to the IDBObjectStore.
     * @returns A promise that resolves to an object indicating the success of the operation.
     */
    add(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectStore = yield this._getObjectStore("readwrite");
                const request = objectStore.add(data);
                return new Promise((resolve, reject) => {
                    request.onsuccess = (event) => __awaiter(this, void 0, void 0, function* () {
                        if (event.target) {
                            const elementId = event.target.result;
                            let elementObject = data;
                            elementObject['@id'] = elementId;
                            objectStore.put(elementObject, elementId);
                            resolve({ success: true, elementObject });
                        }
                    });
                    request.onerror = (event) => {
                        reject(new Error("Failed to add file to IndexedDB: " + event.target.error));
                    };
                });
            }
            catch (error) {
                console.error("Error accessing IndexedDB", error);
                return { success: false };
            }
        });
    }
    /**
     * Retrieves all elements from the IDBObjectStore and returns them as an array.
     * @returns A promise that resolves to an array containing all the elements from the IDBObjectStore.
     */
    getIndexedData() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const objectStore = yield this._getObjectStore("readonly");
            const elements = [];
            const request = objectStore.openCursor();
            request.onerror = (event) => {
                reject("Erreur lors de la récupération des éléments de l'index");
            };
            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    elements.push(cursor.value);
                    cursor.continue();
                }
                else {
                    resolve(elements);
                }
            };
        }));
    }
    /**
     * Clears the entire IndexedDB database by deleting the database.
     */
    clearIndexedDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openDB();
            indexedDB.deleteDatabase(this.databasename);
        });
    }
    /**
     * Deletes the object with the specified ID from the IDBObjectStore.
     * @param id - The ID of the object to delete.
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectStore = yield this._getObjectStore("readwrite");
                objectStore.delete(Number(id));
                console.log(objectStore);
                yield this.refactorIndexes("[product]");
                const button = document.querySelector(`[ezat-delete="${id}"]`);
                const card = button === null || button === void 0 ? void 0 : button.closest("[ezat-item]");
                card === null || card === void 0 ? void 0 : card.remove();
            }
            catch (err) {
                alert(`Error removing file ${id}: ${err}`);
            }
        });
    }
    /**
     * Retrieves the form data at the specified index from the array of object data obtained from `getIndexedData`.
     * @param index - The index of the form data to retrieve.
     * @returns A promise that resolves to the form data at the specified index, or `undefined` if the index is out of range.
     */
    _getData(index, dataType) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectData = yield this.getIndexedData();
            if (index >= 0 && index < objectData.length) {
                const transformer = "form-data" === dataType
                    ? new transformer_1.Transformer.FormDataTransformer(objectData[index])
                    : objectData[index];
                return "form-data" === dataType ? transformer.transform() : transformer;
            }
        });
    }
    /**
     * Checks if the array of elements obtained from `getIndexedData` is empty.
     * @returns A promise that resolves to `true` if the array is empty, and `false` otherwise.
     */
    _isEmpty() {
        return __awaiter(this, void 0, void 0, function* () {
            const objectStore = yield this._getObjectStore("readonly");
            const countRequest = objectStore.count();
            return new Promise((resolve, reject) => {
                countRequest.onsuccess = () => {
                    resolve(countRequest.result === 0);
                };
                countRequest.onerror = () => {
                    reject(new Error("Failed to count items in IndexedDB"));
                };
            });
        });
    }
    /**
     * Retrieves the length of the object store.
     * This method asynchronously retrieves the length of the object store by performing a count operation.
     * @returns A promise that resolves with the length of the object store.
     */
    _length() {
        return __awaiter(this, void 0, void 0, function* () {
            const objectStore = yield this._getObjectStore("readonly");
            const countRequest = objectStore.count();
            return new Promise((resolve, reject) => {
                countRequest.onsuccess = (e) => {
                    resolve(countRequest.result);
                };
                countRequest.onerror = (err) => {
                    reject(console.error("Error", err));
                };
            });
        });
    }
    /**
     * Retrieves the IDBObjectStore with the specified access mode from the opened database.
     * @param access - The access mode for the transaction.
     * @returns A promise that resolves to the IDBObjectStore with the specified access mode.
     */
    _getObjectStore(access) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.openDB();
            const transaction = db.transaction([this.objectstorename], access);
            return transaction.objectStore(this.objectstorename);
        });
    }
    /**
     * Refactors the indexes of the indexed data based on the provided string.
     * This method retrieves the indexed data, checks if it is empty, and then processes each object to update the indexes based on the provided string. The refactored data is then replaced in the object store.
     * @param stringBeforeExistingKey - The string to be used for refactoring the indexes.
     */
    refactorIndexes(stringBeforeExistingKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectData = yield this.getIndexedData();
            const isEmpty = yield this._isEmpty();
            const newRefactoredObject = [];
            if (isEmpty) {
                return null;
            }
            objectData.forEach((object, i) => __awaiter(this, void 0, void 0, function* () {
                const updatedObject = this.processObject(object, i, stringBeforeExistingKey, objectData.length);
                newRefactoredObject.push(updatedObject);
            }));
            this.replaceIndexedData(newRefactoredObject);
        });
    }
    /**
     * Replaces the indexed data in the object store with the provided data array.
     * This method opens the indexedDB, clears the existing data in the object store, and adds the new data from the provided array.
     * @param object - The array of data to replace the indexed data with.
     */
    replaceIndexedData(object) {
        const openDBRequest = indexedDB.open(this.databasename, this.version);
        openDBRequest.onsuccess = (event) => {
            const IBDB = event.target.result;
            const result = IBDB;
            const transaction = result.transaction([this.objectstorename], "readwrite");
            const objetsStore = transaction.objectStore(this.objectstorename);
            const clear = objetsStore.clear();
            clear.onsuccess = function () {
                object.forEach(function (data) {
                    const addRequest = objetsStore.add(data);
                    // addRequest.onsuccess = (event: any) => {
                    //   if (event.target) {
                    //     const elementId = event.target.result;
                    //     let elementObject = data as any;
                    //     elementObject.id = elementId;
                    //     objetsStore.put(elementObject, elementId);
                    //   }
                    // };
                });
            };
            clear.onerror = function (event) {
                console.error("Erreur lors de la suppression des données existantes :", event.target.error);
            };
        };
        openDBRequest.onerror = function (event) {
            console.error("Erreur lors de l'ouverture de la base de données :", event.target.error);
        };
    }
    /**
     * Processes an object to update its keys based on the provided string and index.
     * This method takes an object, splits its keys based on the provided string, and updates the keys with the index value. It also extracts the values of "base64String" and "id" keys. The processed object with updated keys is returned.
     * @param object - The object to be processed.
     * @param i - The index value used for updating the keys.
     * @param stringBeforeExistingKey - The string used for splitting the keys.
     * @param length - The length of the object.
     * @returns The processed object with updated keys.
     */
    processObject(object, i, stringBeforeExistingKey, length) {
        const newObject = {};
        let base64String = "";
        let id = 0;
        let _token = "";
        let tokenKey = "";
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                const keyParts = key.split(stringBeforeExistingKey);
                const keyPart = keyParts[1];
                _token = utils_1.default.hasKeyWithNameSubstring(object, "token");
                if (null !== _token) {
                    tokenKey = utils_1.default.hasKeyWithNameSubstring(object, "token", true);
                }
                if ("@base64String" === key) {
                    base64String = object[key];
                }
                if ("@id" === key) {
                    id = parseInt(object[key]);
                }
                if (keyPart) {
                    const findchar = utils_1.default.findChar(keyPart, length);
                    const char = findchar !== null && findchar !== void 0 ? findchar : "0";
                    const newKeyPart = keyPart.replace(`[${char}]`, `[${i.toString()}]`);
                    const newKey = `${keyParts[0]}${stringBeforeExistingKey}${newKeyPart}`;
                    newObject[newKey] = object[key];
                }
            }
        }
        newObject["@base64String"] = base64String;
        newObject["@id"] = id;
        newObject[`${tokenKey}`] = _token;
        return newObject;
    }
}
exports["default"] = TempData;


/***/ }),

/***/ "../transformer/dist/transformer.js":
/*!******************************************!*\
  !*** ../transformer/dist/transformer.js ***!
  \******************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(self, () => {
  return /******/(() => {
    // webpackBootstrap
    /******/
    "use strict";

    /******/
    var __webpack_modules__ = {
      /***/"./src/transformer.ts": (
      /*!****************************!*\
        !*** ./src/transformer.ts ***!
        \****************************/
      /***/
      function (__unused_webpack_module, exports) {
        var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Transformer = void 0;
        function getMimeType(base64String, get = "both") {
          const extension = base64String.split(",")[0].split(":")[1].split(";")[0].split("/")[1];
          const fileType = base64String.split(",")[0].split(":")[1].split(";")[0].split("/")[0];
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
              } else {
                _fileName = `tranformed_file.${extension}`;
              }
              return new File(byteArrays, _fileName, {
                type: `${fileType}/${extension}`
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
                reader.onerror = error => {
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
              const {
                length
              } = binaryString;
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
                return new Promise(resolve => {
                  const reader = new FileReader();
                  reader.onloadend = function () {
                    const {
                      result
                    } = reader;
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
              return new Blob([uint8Array], {
                type: contentType
              });
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
              return new Blob([byteArray], {
                type: contentType
              });
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
                reader.onerror = error => {
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
              const blob = new Blob([byteArray], {
                type: contentType
              });
              fileName = fileName || "image";
              return new File([blob], fileName, {
                type: contentType
              });
            }
            /**
             * Convertit un tableau Uint8Array en objet File.
             * @param uint8Array - Le tableau Uint8Array.
             * @param mimeType - Le type MIME du fichier.
             * @param fileName - Le nom du fichier.
             * @returns Le fichier résultant.
             */
            fromUint8Array(uint8Array, mimeType, fileName) {
              return new File(uint8Array, fileName, {
                type: mimeType
              });
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
                } catch (error) {
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
                } catch (error) {
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
              } else {
                return this.transform();
              }
            }
          }
          Transformer.FormDataTransformer = FormDataTransformer;
        })(Transformer || (exports.Transformer = Transformer = {}));

        /***/
      })

      /******/
    };
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module is referenced by other modules so it can't be inlined
    /******/
    var __nested_webpack_exports__ = {};
    /******/
    __webpack_modules__["./src/transformer.ts"](0, __nested_webpack_exports__);
    /******/
    /******/
    return __nested_webpack_exports__;
    /******/
  })();
});

/***/ }),

/***/ "../utils/dist/utils.js":
/*!******************************!*\
  !*** ../utils/dist/utils.js ***!
  \******************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(self, () => {
  return /******/(() => {
    // webpackBootstrap
    /******/
    "use strict";

    var __nested_webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
    (() => {
      var exports = __nested_webpack_exports__;
      /*!**********************!*\
        !*** ./src/utils.ts ***!
        \**********************/

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      class Utils {
        /**
         * Crée un élément audio avec la source audio spécifiée par le chemin audioPath.
         * @param audioPath Le chemin de la source audio.
         * @param classname La classe CSS à ajouter à l'élément audio (optionnel).
         * @returns L'élément audio créé.
         */
        static setAudio(audioPath, classname = null) {
          const audio = document.createElement('audio');
          if (classname != null) {
            audio.classList.add(classname);
          }
          const source = document.createElement('source');
          source.src = this.resolvePath(audioPath);
          source.type = "audio/mpeg";
          audio.appendChild(source);
          return audio;
        }
        static textToHTMLElement(textHtml, targetName = "div", children = false) {
          const target = document.createElement(`${targetName}`);
          target.innerHTML = textHtml;
          if (true === children) {
            return target.children;
          }
          return target.firstElementChild;
        }
        /**
         * retourne un élément du dom
         */
        static $$(element) {
          if (element instanceof HTMLElement || element instanceof HTMLCollection) {
            return element;
          } else if (typeof element === 'string') {
            const collection = document.querySelectorAll(`${element}`);
            const el = document.querySelector(`${element}`);
            if (collection !== null && collection.length > 1) {
              return collection;
            }
            if (el !== null) {
              return el;
            }
          } else {
            throw new Error("Type of element is not supported");
          }
        }
        /**
         * Cette fonction permet de convertir un objet NodeList en un tableau d'éléments HTML (HTMLElement)
         * et d'exécuter une fonction de rappel sur chaque élément du tableau.
         * @param nodeList Un objet NodeList ou un élément HTML.
         * Si c'est un NodeList, il sera converti en tableau d'éléments HTML.
         * @param callback Une fonction de rappel à exécuter sur chaque élément du tableau.
         * @returns
         */
        static processNodes(nodeList, callback = (node, index) => {}) {
          if (nodeList instanceof NodeList || Array.isArray(nodeList)) {
            return Array.from(nodeList).forEach((node, i) => {
              callback(node, i);
            });
          }
          if (null !== nodeList && undefined !== nodeList) {
            return callback(nodeList);
          }
        }
        /**
         * Méthode qui renvoie une expression régulière en fonction du type demandé.
         * @param type Le type d'expression régulière demandé.
         * @returns L'expression régulière correspondante.
         */
        static getRegexp(type) {
          switch (type) {
            case 'email':
              return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
            case 'phone-number':
              return new RegExp(/^(0|\\+[1-9]{1,3})[0-9 ]+$/);
            case 'number':
              return new RegExp(/^[0-9]+$/);
            case 'strong-password':
              return new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
            case 'url':
              return new RegExp(/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/);
            case 'default-text':
              return new RegExp(/^[a-zA-Z -'áàâäãåçéèêëğíìîïıñóòôöõúùûüşýÿæœÁÀÂÄÃÅÇÉÈÊËĞÍÌÎÏIÑÓÒÔÖÕÚÙÛÜŞÝŸÆŒ]+$/);
            case 'fr-text':
              return new RegExp(/^[A-Za-z' - àâçéèêëûæœÀÂÉÈÊËÆŒ]+$/);
            case 'en-text':
              return new RegExp(/^[a-zA-Z '-]{1,40}$/);
            case 'tr-text':
              return new RegExp(/^[A-Za-z çğıöüşæœÇĞIÖÜŞ]+$/);
            default:
              throw new Error('Type d\'expression régulière non pris en charge.');
          }
        }
        /**
         * Résout le chemin d'une ressource en fonction de l'environnement d'exécution.
         * @param path Le chemin de la ressource.
         * @returns Le chemin résolu de la ressource.
         */
        static resolvePath(path) {
          const PROJECT_NAME = window.location.pathname.split("/")[1];
          const ORIGIN = window.location.origin;
          const PORT = window.location.port;
          const HOST = window.location.host;
          let _stylesheetsoutdir_;
          if (HOST == "localhost") {
            return _stylesheetsoutdir_ = ORIGIN + `/${PROJECT_NAME}/${path}`;
          } else if (HOST !== "localhost" && PORT !== "") {
            return _stylesheetsoutdir_ = ORIGIN + `/${path}`;
          } else {
            return _stylesheetsoutdir_ = ORIGIN + `/${path}`;
          }
        }
        /**
         * Crée une couche superfielle au dessus d'un élément html afin d'empecher tout évènement.
         * @param tag Le nom de la balise HTML à utiliser comme couche (par défaut : 'td', idéal pour les tableau html).
         * @param backgroundColor La couleur d'arrière-plan de la zone interdite (par défaut : '#FFFFFF').
         * @returns Un élément HTML représentant une zone interdite.
         */
        static forbiddener(tag = 'td', backgroundColor) {
          let forbiddenTag = document.createElement(tag);
          forbiddenTag.setAttribute('class', 'forbidden');
          const style = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: '.7',
            zIndex: '10',
            backgroundColor: backgroundColor ? backgroundColor : '#FFFFFF'
          };
          Object.assign(forbiddenTag.style, style);
          return forbiddenTag;
        }
        /**
         * Réduit une chaîne de texte.
         * @param text La chaîne de texte à réduire.
         * @param maxLength La longueur maximale de la chaîne résultante (par défaut : 14).
         * @returns La chaîne de texte réduite.
         */
        static reduceText(text, maxLength = 14) {
          text = typeof text === "string" ? text.trim() : "";
          if (text.length > maxLength) {
            return `${text.substring(0, maxLength)}...`;
          }
          return text;
        }
        /**
         * Changes the input text type to a number type and performs additional processing
         * based on the specified parameters.
         *
         * @param attr - The CSS selector for the input elements to be processed.
         * @param limit - (Optional) The maximum allowed value. If provided, input values exceeding this limit will be set to the limit.
         * @param priceType - (Optional) A boolean flag indicating whether the input represents a price. If true, the input is expected to be a number with an optional decimal part.
         * @param decimal - (Optional) The number of decimal places to round to. If provided, the input values will be rounded to the specified decimal places.
         */
        static changeInputTextTypeToNumberType(attr, limit, priceType = false, decimal) {
          this.processNodes(this.$$(attr), function (element) {
            let input = element;
            if (input) {
              input.addEventListener("input", function () {
                const regExp = priceType ? /^[0-9]+([.,][0-9]+)?$/ : /[^\d]/g;
                if (decimal) {
                  const getValue = input.value.replace(regExp, "");
                  input.value = `${parseFloat(getValue).toFixed(decimal)}`;
                } else {
                  input.value = input.value.replace(regExp, "");
                }
                if (limit && parseInt(input.value) > limit) {
                  input.value = `${limit}`;
                }
              });
            }
          });
        }
        /**
         * The function is used to disable specific elements (by default td tags) inside a table when a certain button is clicked.
         * It accepts several parameters: the tag to be disabled, the target element to be disabled, the trigger element (button),
         * and the background color for the forbidden tag.
         *
         * @param tag - The tag of the element to be disabled (default: "td").
         * @param target - The target element to be disabled (default: undefined).
         * @param trigger - The trigger element (button) to activate the function (default: undefined).
         * @param backgroundColor - The background color for the forbidden tag (default: undefined).
         */
        static disablor(tag = "td", target, trigger, backgroundColor) {
          const buttons = document.querySelectorAll("[disablor],[self-disablor]");
          try {
            if (!trigger && !buttons) {
              throw new Error("Aucun bouton avec l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement");
            }
            this.processNodes(buttons, button => {
              button.addEventListener("click", () => {
                const self = button.hasAttribute("self-disablor");
                let item = self ? button : button.closest("[disablor]");
                if (!target && !item) {
                  throw new Error("Aucun élément à désactiver contenant l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement");
                }
                if (item) {
                  item.style.position = "relative";
                  item.insertBefore(this.forbiddener(tag, backgroundColor), item.firstChild);
                  if (item instanceof HTMLButtonElement) {
                    item.setAttribute("disabled", "true");
                  }
                }
              });
            });
          } catch (error) {
            console.error("Une erreur s'est produit: ", error);
          }
        }
        /**
         * Adds an asterisk indicator to labels associated with required form fields.
         * The asterisk is inserted as an SVG element, and labels are selected based on the presence
         * of the 'required-field' attribute. The function utilizes the processNodes method
         * to iterate through the matched labels and append the asterisk.
         */
        static setAsteriskToRequiredField() {
          const asterisk = `<svg class="required-svg">
        <use xlink:href="../asset/icon.svg#asterisk"></use>
        </svg>`;
          const labels = document.querySelectorAll("label[required-field]");
          if (labels) {
            this.processNodes(labels, node => {
              const rang = document.createRange();
              const fragment = rang.createContextualFragment(asterisk);
              node.appendChild(fragment);
            });
          }
        }
        /**
         * This method checks if the object contains a key with the given substring.
         * @param object The object to be searched.
         * @param substring The substring to search for.
         * @param getKey An optional parameter to determine the type of return value.
         *               If true, the method will return the key as a string.
         *               If false or not provided, the method will return the value corresponding to the key.
         * @returns The value or key of the first matching property if found, otherwise false.
         */
        static hasKeyWithNameSubstring(object, substring, getKey) {
          for (let key in object) {
            if (key.includes(substring)) {
              if (undefined === getKey || false === getKey) {
                return object[key];
              }
              if (true === getKey) {
                return key;
              }
            }
          }
          return false;
        }
        /**
         * This method searches for an object's property by its key or short key.
         * @param object The object to be searched.
         * @param keyOrShortKey The key or short key to search for.
         * @param key An optional parameter to determine the type of return value.
         *            If true, the function will return the key as a string.
         *            If false or not provided, the function will return the value corresponding to the key.
         * @returns The value or key of the first matching property if found, otherwise false.
         */
        static findObjectDataByKeyName(object, keyOrShorKey, key) {
          Object.keys(object).forEach(key => {
            if (key.includes(keyOrShorKey)) {
              return object[key];
            }
          });
          return false;
        }
        static findChar(string, limit, returnBool = false) {
          for (let i = 0; i <= limit; i++) {
            const index = string.indexOf(i.toString());
            if (index !== -1) {
              return returnBool ? true : i.toString();
            }
          }
          return returnBool ? false : null;
        }
        static findComputedStyle(element, property) {
          const styles = window.getComputedStyle(element);
          const propertiesObject = {};
          try {
            if (!element) {
              throw new Error("Element not found");
            }
            if (!property) {
              throw new Error("Property is required");
            }
            if (Array.isArray(property) && property.length > 0) {
              property.forEach(props => {
                propertiesObject[`${props}`] = styles.getPropertyValue(`${props}`);
              });
              return propertiesObject;
            }
            if (typeof property === "string") {
              return styles.getPropertyValue(`${property}`);
            }
          } catch (error) {
            console.error(error);
          }
        }
        /**
         * A function to escape special characters in a string using the DOM API.
         *
         * @param str - The input string to be escaped.
         * @returns - The escaped string with special characters replaced with their HTML entity equivalents.
         */
        static escape(str) {
          if (!str) {
            return "";
          }
          const div = document.createElement("div");
          div.appendChild(document.createTextNode(str));
          return div.innerHTML;
        }
        /**
         * This function takes an HTMLElement and a target string.
         * It returns the first Element with a matching target that is a sibling of the referent element or any of its previous siblings.
         * If no such element is found, it returns null.
         * @param referent - The starting point of the search.
         * @param target - The CSS selector used to find the desired element.
         * @returns The first Element with a matching target, or null if no such element is found.
         */
        static findHTMLElementBy(referent, target) {
          let currentElement = referent;
          if (currentElement) {
            while (currentElement = currentElement.previousElementSibling) {
              const charCounterSpan = currentElement.querySelector(target);
              if (charCounterSpan) {
                return charCounterSpan;
              }
            }
          }
          return null;
        }
        /**
         * This function takes an object containing HTML attributes and returns a string representing the attributes.
         * If no attributes are provided, it returns an empty string.
         * @param attributes - An object containing HTML attributes.
         * @returns A string representing the attributes.
         */
        static formatHTMLAttributes(attributes) {
          let attrs = "";
          if (attributes) {
            for (const [key, value] of Object.entries(attributes)) {
              if (key) {
                attrs += `${key}='${value}'`;
              }
            }
          }
          return attrs.trim();
        }
      }
      exports["default"] = Utils;
    })();

    /******/
    return __nested_webpack_exports__;
    /******/
  })();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/tempdata.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=tempdata.js.map