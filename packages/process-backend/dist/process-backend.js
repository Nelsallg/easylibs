(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("process-backend", [], factory);
	else if(typeof exports === 'object')
		exports["process-backend"] = factory();
	else
		root["process-backend"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/process-backend.ts":
/*!********************************!*\
  !*** ./src/process-backend.ts ***!
  \********************************/
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
const fetch_request_1 = __importDefault(__webpack_require__(/*! @easylibs/fetch-request */ "../fetch-request/dist/fetch-request.js"));
const transformer_1 = __webpack_require__(/*! @easylibs/transformer */ "../transformer/dist/transformer.js");
const utils_1 = __importDefault(__webpack_require__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
class ProcessBackend {
    /**
     *
     * @param database - base de données
     * @param uri - L'URL de destination où les données du formulaire seront envoyées.
     */
    constructor(database, uri) {
        this._response = null;
        this._database = database;
        this._uri = uri;
    }
    /**
     * Persists data to the server.
     *
     * @param redirectURL - The URL to redirect to after the data is persisted.
     * @param callback - The callback function to be called after the data is persisted.
     * @returns A promise that resolves when the data is persisted.
     */
    persist(redirectURL, callback = (result) => { }) {
        return __awaiter(this, void 0, void 0, function* () {
            const elements = yield this._database.getIndexedData();
            const promises = [];
            if (elements instanceof Array && elements.length > 0) {
                for (let i = 0; i < elements.length; i++) {
                    ((currentIndex) => {
                        promises.push(new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                            try {
                                const data = yield this._database._getData(currentIndex, "classic-object");
                                delete data["@base64String"];
                                delete data["@id"];
                                resolve(data);
                            }
                            catch (error) {
                                reject("Désolé une probleme est survenu: " + error);
                            }
                        })));
                    })(i);
                }
            }
            const formData = this.normalizeArrayField(yield Promise.all(promises));
            const setResponse = (result) => {
                this._response = result;
                callback(this._response);
                if (redirectURL && this._response && this._response.success) {
                    return (window.location.href = redirectURL || "/");
                }
                return this._response;
            };
            new fetch_request_1.default({
                uri: this._uri,
                data: formData,
                onPostFetch: setResponse,
                options: {
                    method: "POST",
                    acceptDataFormat: "form-data",
                },
            });
        });
    }
    /**
     * Saves form data to the server.
     *
     * @param data - The data object containing the submiter, callback, redirectUrl, and loader properties.
     * @param data.submiter - The submit button element.
     * @param data.callback - The callback function to be called after the data is saved.
     * @param data.redirectUrl - The URL to redirect to after the data is saved.
     * @param data.loader - The loader HTML content to display while saving the data.
     */
    save(data) {
        var _a;
        const form = (_a = data.submiter.closest("form")) !== null && _a !== void 0 ? _a : document.querySelector("form");
        data.submiter.addEventListener("click", (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const isEmpty = yield this._database._isEmpty();
            if (true === isEmpty && !form.checkValidity()) {
                return form.reportValidity();
            }
            const innerSubmiter = utils_1.default.escape(data.submiter.innerHTML);
            if (data.loader) {
                data.submiter.innerHTML = data.loader;
            }
            if (true === isEmpty && form.checkValidity()) {
                const formData = new FormData(form);
                if (data.preFetchAction) {
                    data.preFetchAction(formData);
                }
                const onPostFetch = function () {
                    const { response } = request;
                    data.submiter.innerHTML = innerSubmiter;
                    if (data.redirectUrl && response["success"] === true) {
                        data.callback(response);
                        return (window.location.href = data.redirectUrl);
                    }
                    return data.callback(response);
                };
                const request = new fetch_request_1.default({
                    uri: this._uri,
                    data: formData,
                    onPostFetch,
                    options: {
                        method: "POST",
                        acceptDataFormat: "form-data",
                    },
                });
                return;
            }
            form.setAttribute("novalidate", "");
            yield this.persist(data.redirectUrl, (response) => {
                data.submiter.innerHTML = innerSubmiter;
                data.callback(response);
            });
        }));
    }
    /**
     * Normalizes an array field into a FormData object.
     * This method takes an array of data objects and normalizes it into a FormData object. It handles files within the data objects by transforming them into Blobs using a BlobTransformer. The resulting FormData object is returned.
     * @param datas - The array of data objects to be normalized.
     * @returns The normalized FormData object.
     */
    normalizeArrayField(datas) {
        const transformer = new transformer_1.Transformer.BlobTransformer();
        let index = 0;
        return datas.reduce((result, data) => {
            const objectsFormData = Object.keys(data).reduce((formData, key) => {
                const files = data[key];
                if (Array.isArray(files) && files.length > 0) {
                    files.forEach((file) => {
                        formData.append(key, transformer.fromFile(file), file.name);
                    });
                }
                else {
                    formData.set(key, data[key]);
                }
                return formData;
            }, new FormData());
            objectsFormData.forEach((value, key) => {
                result.append(key, value);
            });
            index++;
            return result;
        }, new FormData());
    }
    /**
     * Retourne la réponse du serveur.
     */
    get response() {
        return this._response;
    }
}
exports["default"] = ProcessBackend;


/***/ }),

/***/ "../fetch-request/dist/fetch-request.js":
/*!**********************************************!*\
  !*** ../fetch-request/dist/fetch-request.js ***!
  \**********************************************/
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
      /***/"./src/fetch-request.ts": (
      /*!******************************!*\
        !*** ./src/fetch-request.ts ***!
        \******************************/
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
        /**
         * Cette classe est une classe utilitaire conçue pour faciliter l'envoi de requêtes Fetch dans une application web.
         * Elle offre une interface simple pour effectuer des requêtes HTTP
         * et gérer les actions avant et après l'envoi de la requête.
         */
        class FetchRequest {
          constructor(options) {
            this.fetchData = () => __awaiter(this, void 0, void 0, function* () {
              try {
                if (!this.options) {
                  throw new Error(`Missing Options for the request`);
                }
                if (!this.options.uri) {
                  throw new Error("URI is required");
                }
                if (!this.options.options || !this.options.options.method) {
                  throw new Error("The calling method is required");
                }
                const response = yield fetch(this.options.uri, {
                  method: this.options.options.method,
                  body: this._formData,
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });
                const dataResponse = yield response.json();
                this._response = dataResponse;
                if (this.options.onPostFetch) {
                  this.options.onPostFetch(dataResponse);
                }
                if (this.options.onSuccess && response.status === 200) {
                  return this.options.onSuccess(dataResponse);
                }
              } catch (error) {
                if (this.options.onError && this._response.status !== 200) {
                  return this.options.onError(error, this._response.status);
                }
                console.error(error);
              }
            });
            this.preFetch = () => __awaiter(this, void 0, void 0, function* () {
              if (typeof this.options.onPreFetch === 'function') {
                let data = yield this.options.onPreFetch(this.options.data);
                if (data) {
                  this.options.data = data.data;
                }
              }
            });
            this.postFetch = () => __awaiter(this, void 0, void 0, function* () {
              if (this.options.submiter instanceof HTMLButtonElement) {
                this.options.submiter.removeAttribute('disabled');
              }
              return this.options.onPostFetch ? this.options.onPostFetch() : undefined;
            });
            this.submitForm = () => __awaiter(this, void 0, void 0, function* () {
              try {
                if (this.options.onPreFetch) {
                  yield this.preFetch();
                }
                yield this.fetchData();
                if (this.options.onPostFetch) {
                  yield this.postFetch();
                }
              } catch (error) {
                console.error('Error executing query : ', error);
              }
            });
            this.createFormData = data => {
              const formData = new FormData();
              for (const [key, value] of Object.entries(data)) {
                formData.append(key, value !== null && value !== void 0 ? value : "");
              }
              return formData;
            };
            this.createJSON = data => {
              return JSON.stringify({
                data: data
              });
            };
            this.options = options;
            if (options.submiter) {
              options.submiter.addEventListener('click', this.submitForm);
            } else {
              this.submitForm();
            }
          }
          get _formData() {
            const isFormData = data => data instanceof FormData;
            const isArray = data => Array.isArray(data);
            const isObject = data => typeof data === 'object' && Object.keys(data).length > 0;
            if (this.options.options) {
              const acceptDataFormat = this.options.options.acceptDataFormat;
              if (acceptDataFormat) {
                switch (acceptDataFormat) {
                  case "form-data":
                    if (isFormData(this.options.data)) {
                      return this.options.data;
                    } else if (isArray(this.options.data)) {
                      return this.createJSON(this.options.data);
                    } else if (isObject(this.options.data)) {
                      return this.createFormData(this.options.data);
                    }
                    break;
                  case "classic-object":
                    if (isFormData(this.options.data) || isArray(this.options.data) || isObject(this.options.data)) {
                      return this.createJSON(isArray(this.options.data) ? this.options.data : this.options.data);
                    }
                    break;
                  default:
                    throw Error(`The ${acceptDataFormat} format is not supported`);
                }
              }
            }
          }
          get response() {
            return this._response;
          }
        }
        exports["default"] = FetchRequest;

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
    __webpack_modules__["./src/fetch-request.ts"](0, __nested_webpack_exports__);
    /******/
    /******/
    return __nested_webpack_exports__;
    /******/
  })();
});

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/process-backend.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=process-backend.js.map