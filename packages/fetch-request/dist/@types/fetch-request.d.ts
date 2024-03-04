/**
 * Type definition for HTTP methods.
 */
declare type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
/**
 * Type definition for request headers, represented as a record of string key-value pairs.
 */
declare type Headers = Record<string, string>;
/**
 * Interface defining the options for a fetch request.
 * Includes optional configuration for HTTP method, headers, credentials, mode, cache, integrity, timeout, content type,
 * request data type, and response data type.
 */
declare interface FetchRequestOptions {
    method?: HttpMethod;
    headers?: Headers;
    credentials?: "omit" | "same-origin" | "include";
    mode?: "cors" | "no-cors" | "same-origin";
    cache?: "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
    integrity?: string;
    timeOut?: number;
    contentType?: string;
    requestDataConvert?: "form-data" | "record";
    responseDataType?: 'json' | 'text';
}
/**
 * Interface for callbacks that can be executed at different stages of the fetch request process.
 * Includes optional methods for actions post-fetch, pre-fetch, on success, and on error.
 */
declare interface FetchRequestCallbacks {
    onPostFetch?: (response?: any, status?: number) => any;
    onPreFetch?: (data?: any) => any;
    onSuccess?: (response: any) => void;
    onError?: (error: Error, status: number) => void;
}
/**
 * Type definition for the main fetch request configuration.
 * Includes the request URI, optional data, submitter element, fetch options, and callbacks.
 */
declare type FetchRequestType = {
    uri: string;
    data?: Record<any, any> | FormData | null;
    submitter?: HTMLElement | null;
    options?: FetchRequestOptions;
    callbacks?: FetchRequestCallbacks;
};
/**
 * FetchRequest class designed to simplify the process of making HTTP requests within web applications.
 * It encapsulates functionality for sending requests and handling callbacks before and after the request.
 */
export default class FetchRequest {
    private options;
    private response;
    private status;
    /**
     * @param options Configuration for the fetch request.
     */
    constructor(options: FetchRequestType);
    /**
     * Attaches a click event listener to the submitter element that triggers the form submission.
     * If no submitter is provided, the form submission is triggered immediately.
     */
    private attachSubmitterEvent;
    /**
     * Asynchronous method that handles the form submission process.
     * It optionally executes pre-fetch and post-fetch callbacks and makes the HTTP request.
     */
    private submitForm;
    /**
     * Asynchronous method that performs the HTTP request using the Fetch API.
     * It constructs the request based on the provided options and handles the response.
     */
    private run;
    /**
     * Executes the pre-fetch callback, allowing for data modification before the request is sent.
     */
    private preFetch;
    /**
     * Executes the post-fetch callback, allowing for actions to be taken after the request has been processed.
     * @param response The response from the fetch request.
     * @param status The HTTP status code of the response.
     */
    private postFetch;
    /**
     * Constructs the URL for a GET request by appending query parameters.
     * @param uri The base URI for the request.
     * @param data The data to be sent as query parameters.
     * @returns The final URI with query parameters.
     */
    private buildGetRequestUrl;
    /**
     * Prepares the request body based on the specified data type.
     * @param data The data to be sent in the request body.
     * @returns The prepared request body.
     */
    private prepareRequestBody;
    /**
     * Converts an object to FormData.
     * @param data The data object to convert.
     * @returns The FormData representation of the data.
     */
    private convertObjectToFormData;
    /**
     * Handles errors that occur during the fetch request process.
     * Logs the error and executes the onError callback if provided.
     * @param error The error that occurred.
     * @param status Optional HTTP status code related to the error.
     * @param message Optional custom error message.
     */
    private handleError;
}
export {};
