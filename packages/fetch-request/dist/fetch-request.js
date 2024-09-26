"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SUCCESS_HTTP_CODES = [200, 201, 202, 203, 204, 205, 206];
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
        this.count = 0;
        /**
         * Asynchronous method that handles the form submission process.
         * It optionally executes pre-fetch and post-fetch callbacks and makes the HTTP request.
         */
        this.submitForm = async () => {
            try {
                if (this.options.callbacks && this.options.callbacks.onPreFetch) {
                    await this.preFetch();
                }
                await this.run();
                if (this.options.callbacks && this.options.callbacks.onPostFetch) {
                    await this.postFetch(this.response, this.status);
                }
                if (this.options.callbacks && this.options.callbacks.onSuccess) {
                    await this.onSuccess(this.status);
                }
            }
            catch (error) {
                this.handleError(error, this.status, 'Error executing query : ');
            }
        };
        /**
         * Asynchronous method that performs the HTTP request using the Fetch API.
         * It constructs the request based on the provided options and handles the response.
         */
        this.run = async () => {
            let response = null;
            try {
                const { uri, data, options } = this.options;
                if (!uri)
                    throw new Error("URI is required");
                this.uri = uri;
                this.data = data;
                let finalUri = uri;
                const method = options?.method || 'GET';
                if (method === "GET" && data) {
                    finalUri = this.buildGetRequestUrl(uri, data);
                }
                else if (!["GET", "HEAD", "OPTIONS"].includes(method) && data) {
                    this.body = this.prepareRequestBody(data);
                }
                const fetchOptions = {
                    method: method,
                    headers: options?.headers,
                    body: this.body,
                    credentials: options?.credentials,
                    mode: options?.mode,
                    cache: options?.cache,
                    integrity: options?.integrity,
                };
                if (["GET", "HEAD", "OPTIONS"].includes(method)) {
                    delete fetchOptions.body;
                }
                await this.lazyFatching(finalUri, fetchOptions);
            }
            catch (error) {
                this.handleError(error, response ? response.status : 0);
            }
        };
        /**
         * Executes the pre-fetch callback, allowing for data modification before the request is sent.
         */
        this.preFetch = async () => {
            if (typeof this.options.callbacks.onPreFetch === 'function') {
                let data = await this.options.callbacks.onPreFetch(this.options.data);
                if (data) {
                    this.options.data = data.hasOwnProperty('data') ? data.data : data;
                }
            }
        };
        /**
         * Executes the post-fetch callback, allowing for actions to be taken after the request has been processed.
         * @param response The response from the fetch request.
         * @param status The HTTP status code of the response.
         */
        this.postFetch = async (response, status) => {
            if (this.options.submitter instanceof HTMLButtonElement) {
                this.options.submitter.removeAttribute('disabled');
            }
            return this.options.callbacks.onPostFetch ? this.options.callbacks.onPostFetch(response, status) : undefined;
        };
        this.onSuccess = async (status) => {
            if (this.options.callbacks?.onSuccess && SUCCESS_HTTP_CODES.includes(status)) {
                this.options.callbacks.onSuccess(this.response);
            }
        };
        this.attachSubmitterEvent();
    }
    /**
     * Attaches a click event listener to the submitter element that triggers the form submission.
     * If no submitter is provided, the form submission is triggered immediately.
     */
    attachSubmitterEvent() {
        this.options.submitter ? this.options.submitter.addEventListener('click', this.submitForm) : this.submitForm();
    }
    async lazyFatching(uri, fetchOptions) {
        if (this.options) {
            const options = this.options.options;
            if (options && options.timeOut) {
                const timeOut = options.timeOut;
                const response = await fetch(uri, fetchOptions);
                setTimeout(async () => {
                    await this.handleResult(response, options);
                }, timeOut);
                return;
            }
            const response = await fetch(uri, fetchOptions);
            await this.handleResult(response, options);
        }
    }
    async handleResult(response, options) {
        this.status = response.status;
        const EXCLUDE_STATUS = [204];
        if (options) {
            const responseDataType = options.responseDataType;
            if (responseDataType) {
                if (!EXCLUDE_STATUS.includes(this.status))
                    try {
                        this.response = responseDataType === "text" ? await response.text() : await response.json();
                    }
                    catch (error) {
                        try {
                            this.response = await response.json();
                        }
                        catch (error) {
                            this.response = await response.text();
                        }
                    }
            }
        }
        if (this.options.callbacks?.onError && !EXCLUDE_STATUS.includes(this.status) && !response.ok) {
            this.options.callbacks.onError(new Error(typeof this.response === "string" ? this.response : (this.response.message ? this.response.message : "Fetch Request Error")), response.status);
        }
    }
    /**
     * Repeats the execution of the current query
     * @experimental This method is experimental. Its API may change without notice
     * @param  data
     */
    async recursion(data) {
        if (this.options.iteration) {
            if (this.count < this.options.iteration) {
                if (data)
                    this.options.data = Object.assign(this.data, data);
                await this.run();
                this.count++;
            }
        }
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
        else if (typeof data === 'object' && !Array.isArray(data)) {
            for (let [key, value] of Object.entries(data)) {
                params.append(key, value);
            }
        }
        else if (Array.isArray(data)) {
            for (let i = 0; i < data.length; i++) {
                params.append(`${i}`, `${data[i]}`);
            }
        }
        else {
            params.append("data", `${data}`);
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
        if (this.options.options?.requestDataConvert === "form-data") {
            if (data instanceof FormData)
                return data;
            if (Array.isArray(data))
                return this.convertArrayToFormData(data);
            if (typeof data === "number" || typeof data === "string" || typeof data === "boolean")
                return this.convertPrimaryDataToFormData(data);
            return this.convertObjectToFormData(data);
        }
        else if (this.options.options?.requestDataConvert === "record") {
            if (Array.isArray(data))
                return this.convertArrayToRecord(data);
            if (typeof data === "number" || typeof data === "string" || typeof data === "boolean")
                return this.convertPrimaryDataToRecord(data);
            return JSON.stringify(data);
        }
        return this.stringify(data);
    }
    stringify(data) {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                if (typeof data[key] === "object") {
                    data[key] = JSON.stringify(data[key]);
                }
            }
        }
        return data;
    }
    convertArrayToFormData(data) {
        const formData = new FormData();
        for (let i = 0; i < data.length; i++) {
            if (Array.isArray(data[i]) || typeof data[i] === "object")
                formData.set(`${i}`, JSON.stringify(data[i]));
            else {
                formData.set(`${i}`, `${data[i]}`);
            }
        }
        return formData;
    }
    convertArrayToRecord(data) {
        const record = {};
        for (let i = 0; i < data.length; i++) {
            record[i] = data[i];
        }
        return JSON.stringify(record);
    }
    convertPrimaryDataToFormData(data) {
        const formData = new FormData();
        formData.set("data", `${data}`);
        return formData;
    }
    convertPrimaryDataToRecord(data) {
        return JSON.stringify({ data });
    }
    /**
     * Converts an object to FormData.
     * @param data The data object to convert.
     * @returns The FormData representation of the data.
     */
    convertObjectToFormData(data) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (Array.isArray(value) || typeof value === "object")
                formData.append(key, JSON.stringify(value));
            else {
                formData.append(key, value);
            }
        });
        return formData;
    }
    /**
     * returns the response sent by the server, null if nothing was sent
     */
    get RESPONSE() {
        return this.response ? this.response : null;
    }
    /**
     * Handles errors that occur during the fetch request process.
     * Logs the error and executes the onError callback if provided.
     * @param error The error that occurred.
     * @param status Optional HTTP status code related to the error.
     * @param message Optional custom error message.
     */
    handleError(error, status, message = 'Fetch Request Error: ') {
        console.error(message, error);
        if (this.options.callbacks?.onError) {
            this.options.callbacks.onError(error, status || 0);
        }
    }
}
exports.default = FetchRequest;
//# sourceMappingURL=fetch-request.js.map