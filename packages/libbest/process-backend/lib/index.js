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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessBackend = void 0;
const index_1 = require("./fetch-request/index");
const blob_transformer_1 = require("./transformer/blob-transformer");
const utils_1 = require("./utils/utils");
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
            new index_1.FetchRequest({
                uri: this._uri,
                data: formData,
                postFetchAction: setResponse,
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
            const innerSubmiter = (0, utils_1.escape)(data.submiter.innerHTML);
            if (data.loader) {
                data.submiter.innerHTML = data.loader;
            }
            if (true === isEmpty && form.checkValidity()) {
                const formData = new FormData(form);
                if (data.preFetchAction) {
                    data.preFetchAction(formData);
                }
                const postFetchAction = function () {
                    const { response } = request;
                    data.submiter.innerHTML = innerSubmiter;
                    if (data.redirectUrl && response["success"] === true) {
                        data.callback(response);
                        return (window.location.href = data.redirectUrl);
                    }
                    return data.callback(response);
                };
                const request = new index_1.FetchRequest({
                    uri: this._uri,
                    data: formData,
                    postFetchAction,
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
        const transformer = new blob_transformer_1.BlobTransformer();
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
exports.ProcessBackend = ProcessBackend;
