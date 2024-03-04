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
/**
 * FetchRequest class designed to simplify the process of making HTTP requests within web applications.
 * It encapsulates functionality for sending requests and handling callbacks before and after the request.
 */
class FetchRequest {
    /**
     * @param options Configuration for the fetch request.
     */
    constructor(options) {
        this.options = options;
        /**
         * Asynchronous method that handles the form submission process.
         * It optionally executes pre-fetch and post-fetch callbacks and makes the HTTP request.
         */
        this.submitForm = () => __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.options.callbacks && this.options.callbacks.onPreFetch) {
                    yield this.preFetch();
                }
                yield this.run();
                if (this.options.callbacks && this.options.callbacks.onPostFetch) {
                    yield this.postFetch(this.response, this.status);
                }
            }
            catch (error) {
                this.handleError(error, undefined, 'Error executing query : ');
            }
        });
        /**
         * Asynchronous method that performs the HTTP request using the Fetch API.
         * It constructs the request based on the provided options and handles the response.
         */
        this.run = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            let response = null;
            try {
                const { uri, data, options } = this.options;
                if (!uri)
                    throw new Error("URI is required");
                let finalUri = uri;
                let body = null;
                const method = (options === null || options === void 0 ? void 0 : options.method) || 'GET';
                if (method === "GET" && data) {
                    finalUri = this.buildGetRequestUrl(uri, data);
                }
                else if (method !== "GET" && method !== "HEAD" && method !== "OPTIONS" && data) {
                    body = this.prepareRequestBody(data);
                }
                const fetchOptions = {
                    method: method,
                    headers: options === null || options === void 0 ? void 0 : options.headers,
                    body: body,
                    credentials: options === null || options === void 0 ? void 0 : options.credentials,
                    mode: options === null || options === void 0 ? void 0 : options.mode,
                    cache: options === null || options === void 0 ? void 0 : options.cache,
                    integrity: options === null || options === void 0 ? void 0 : options.integrity,
                };
                if (method === "GET" || method === "HEAD" || method === "OPTIONS") {
                    delete fetchOptions.body;
                }
                response = yield fetch(finalUri, fetchOptions);
                this.status = response.status;
                if (options) {
                    const responseDataType = options.responseDataType;
                    if (responseDataType) {
                        this.response = responseDataType === "text" ? yield response.text() : yield response.json();
                    }
                }
                if (((_a = this.options.callbacks) === null || _a === void 0 ? void 0 : _a.onSuccess) && response.ok) {
                    this.options.callbacks.onSuccess(this.response);
                }
            }
            catch (error) {
                this.handleError(error, response ? response.status : 0);
            }
        });
        /**
         * Executes the pre-fetch callback, allowing for data modification before the request is sent.
         */
        this.preFetch = () => __awaiter(this, void 0, void 0, function* () {
            if (typeof this.options.callbacks.onPreFetch === 'function') {
                let data = yield this.options.callbacks.onPreFetch(this.options.data);
                if (data) {
                    this.options.data = data.hasOwnProperty('data') ? data.data : data;
                }
            }
        });
        /**
         * Executes the post-fetch callback, allowing for actions to be taken after the request has been processed.
         * @param response The response from the fetch request.
         * @param status The HTTP status code of the response.
         */
        this.postFetch = (response, status) => __awaiter(this, void 0, void 0, function* () {
            if (this.options.submitter instanceof HTMLButtonElement) {
                this.options.submitter.removeAttribute('disabled');
            }
            return this.options.callbacks.onPostFetch ? this.options.callbacks.onPostFetch(response, status) : undefined;
        });
        this.attachSubmitterEvent();
    }
    /**
     * Attaches a click event listener to the submitter element that triggers the form submission.
     * If no submitter is provided, the form submission is triggered immediately.
     */
    attachSubmitterEvent() {
        this.options.submitter ? this.options.submitter.addEventListener('click', this.submitForm) : this.submitForm();
    }
    /**
     * Constructs the URL for a GET request by appending query parameters.
     * @param uri The base URI for the request.
     * @param data The data to be sent as query parameters.
     * @returns The final URI with query parameters.
     */
    buildGetRequestUrl(uri, data) {
        const url = new URL(uri, window.location.origin);
        const params = new URLSearchParams();
        if (data instanceof FormData) {
            for (let [key, value] of data.entries()) {
                if (typeof value === 'string') {
                    params.append(key, value);
                }
            }
        }
        else {
            for (let [key, value] of Object.entries(data)) {
                params.append(key, value);
            }
        }
        url.search = params.toString();
        return url.toString();
    }
    /**
     * Prepares the request body based on the specified data type.
     * @param data The data to be sent in the request body.
     * @returns The prepared request body.
     */
    prepareRequestBody(data) {
        var _a, _b;
        if (((_a = this.options.options) === null || _a === void 0 ? void 0 : _a.requestDataType) === "form-data" && !(data instanceof FormData)) {
            return this.convertObjectToFormData(data);
        }
        else if (((_b = this.options.options) === null || _b === void 0 ? void 0 : _b.requestDataType) === "record") {
            return JSON.stringify(data);
        }
        return data;
    }
    /**
     * Converts an object to FormData.
     * @param data The data object to convert.
     * @returns The FormData representation of the data.
     */
    convertObjectToFormData(data) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => formData.append(key, value));
        return formData;
    }
    /**
     * Handles errors that occur during the fetch request process.
     * Logs the error and executes the onError callback if provided.
     * @param error The error that occurred.
     * @param status Optional HTTP status code related to the error.
     * @param message Optional custom error message.
     */
    handleError(error, status, message = 'Fetch Request Error: ') {
        var _a;
        console.error(message, error);
        if ((_a = this.options.callbacks) === null || _a === void 0 ? void 0 : _a.onError) {
            this.options.callbacks.onError(error, status || 0);
        }
    }
}
exports.default = FetchRequest;
//# sourceMappingURL=fetch-request.js.map