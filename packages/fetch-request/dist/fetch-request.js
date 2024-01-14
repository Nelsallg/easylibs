(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fetch-request", [], factory);
	else if(typeof exports === 'object')
		exports["fetch-request"] = factory();
	else
		root["fetch-request"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fetch-request.ts":
/*!******************************!*\
  !*** ./src/fetch-request.ts ***!
  \******************************/
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
/**
  * This class is a utility class designed to make it easier to send Fetch requests in a web application.
  * It offers a simple interface for making HTTP requests
  * and manage actions before and after sending the request.
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
                let url = null;
                if (this.options.data && this.options.options.method === "GET") {
                    url = new URL(this.options.uri);
                    if (this.options.data instanceof FormData) {
                        throw new Error("The data format must be an object:key->value");
                    }
                    url.search = new URLSearchParams(this.options.data).toString();
                }
                const response = yield fetch(url !== null && url !== void 0 ? url : this.options.uri, {
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
            }
            catch (error) {
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
            }
            catch (error) {
                console.error('Error executing query : ', error);
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/fetch-request.ts"](0, __webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=fetch-request.js.map