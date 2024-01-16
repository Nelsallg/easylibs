declare type HttpMethod = 'GET' | 'POST';
declare type Headers = Record<string, string>;
declare interface FetchRequestOptions {
    method: HttpMethod;
    headers?: Headers;
    credentials?: "omit" | "same-origin" | "include";
    mode?: "cors" | "no-cors" | "same-origin";
    cache?: "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
    integrity?: string;
    timeOut?: number;
    contentType?: string;
    acceptDataFormat?: "form-data" | "classic-object" | "array";
    responseType: 'json' | 'text';
}
declare interface FetchRequestCallbacks {
    onPostFetch?: (response?: any) => void;
    onPreFetch?: (that?: any) => Promise<any>;
    onSuccess?: (response: any) => void;
    onError?: (error: Error, status: number) => void;
}
declare type FetchRequestType = {
    uri: string;
    data?: Record<string, string> | FormData | null;
    submitter?: HTMLElement | null;
    options?: FetchRequestOptions;
    callbacks?: FetchRequestCallbacks;
};
/**
  * This class is a utility class designed to make it easier to send Fetch requests in a web application.
  * It offers a simple interface for making HTTP requests
  * and manage actions before and after sending the request.
  */
export default class FetchRequest {
    private options;
    private response;
    constructor(options: FetchRequestType);
    private attachSubmitterEvent;
    private submitForm;
    private run;
    private preFetch;
    private postFetch;
    private buildGetRequestUrl;
    private prepareRequestBody;
    private convertObjectToFormData;
    private handleError;
}
export {};
