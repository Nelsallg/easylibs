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
exports.FetchRequest = void 0;
/**
 * Cette classe est une classe utilitaire conçue pour faciliter l'envoi de requêtes Fetch dans une application web.
 * Elle offre une interface simple pour effectuer des requêtes HTTP
 * et gérer les actions avant et après l'envoi de la requête.
 */
class FetchRequest {
    constructor(options) {
        this.preFetch = () => __awaiter(this, void 0, void 0, function* () {
            if (typeof this.options.preFetchAction === 'function') {
                let data = yield this.options.preFetchAction();
                if (data) {
                    this.options.data = data.data;
                }
            }
        });
        this.fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.options) {
                    throw new Error(`Missing Options for the request`);
                }
                if (!this.options.uri) {
                    throw new Error("L'URI est obligatoire");
                }
                if (!this.options.options || !this.options.options.method) {
                    throw new Error("La méthode d'appel est obligatoire");
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
                if (this.options.postFetchAction) {
                    this.options.postFetchAction(dataResponse);
                }
                if (this.options.onSuccess) {
                    return this.options.onSuccess(dataResponse);
                }
            }
            catch (error) {
                if (this.options.onError) {
                    return this.options.onError(error);
                }
                console.error(error);
            }
        });
        this.postFetch = () => __awaiter(this, void 0, void 0, function* () {
            if (this.options.submiter instanceof HTMLButtonElement) {
                this.options.submiter.removeAttribute('disabled');
            }
            return this.options.postFetchAction ? this.options.postFetchAction() : undefined;
        });
        this.submitForm = () => __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.options.preFetchAction) {
                    yield this.preFetch();
                }
                yield this.fetchData();
                if (this.options.postFetchAction) {
                    yield this.postFetch();
                }
            }
            catch (error) {
                console.error('Erreur lors de l\'envoi du formulaire : ', error);
            }
        });
        this.createFormData = (data) => {
            const formData = new FormData();
            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value !== null && value !== void 0 ? value : "");
            }
            return formData;
        };
        this.createJSON = (data) => {
            return JSON.stringify({ data: data });
        };
        this.options = options;
        if (options.submiter) {
            options.submiter.addEventListener('click', this.submitForm);
        }
        else {
            this.submitForm();
        }
    }
    get _formData() {
        const isFormData = (data) => data instanceof FormData;
        const isArray = (data) => Array.isArray(data);
        const isObject = (data) => typeof data === 'object' && Object.keys(data).length > 0;
        if (this.options.options) {
            const acceptDataFormat = this.options.options.acceptDataFormat;
            if (acceptDataFormat) {
                switch (acceptDataFormat) {
                    case "form-data":
                        if (isFormData(this.options.data)) {
                            return this.options.data;
                        }
                        else if (isArray(this.options.data)) {
                            return this.createJSON(this.options.data);
                        }
                        else if (isObject(this.options.data)) {
                            return this.createFormData(this.options.data);
                        }
                        break;
                    case "classic-object":
                        if (isFormData(this.options.data) || isArray(this.options.data) || isObject(this.options.data)) {
                            return this.createJSON(isArray(this.options.data) ? this.options.data : this.options.data);
                        }
                        break;
                    default:
                        throw Error(`Le format ${acceptDataFormat} n'est pas supporté`);
                }
            }
        }
    }
    get response() {
        return this._response;
    }
}
exports.FetchRequest = FetchRequest;
//# sourceMappingURL=fetch-request.js.map