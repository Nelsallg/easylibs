declare type FetchRequestType = {
    uri: string;
    data?: Record<string, string> | FormData | null;
    submiter?: HTMLElement | null;
    options?: {
        method?: 'GET' | 'POST';
        headers?: any;
        body?: any;
        credentials?: "omit" | "same-origin" | "include";
        mode?: "cors" | "no-cors" | "same-origin";
        cache?: "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
        timeOut?: number;
        fetchOptions?: RequestInit;
        isBinaryFileDownload?: boolean;
        contentType?: string;
        acceptDataFormat?: "form-data" | "classic-object" | "array";
        integrity?: string;
    };
    onPostFetch?: (response?: any) => any;
    onPreFetch?: (that?: any) => any;
    onSuccess?: (response: any) => any;
    onError?: (error: unknown, status: number) => any;
};
/**
  * This class is a utility class designed to make it easier to send Fetch requests in a web application.
  * It offers a simple interface for making HTTP requests
  * and manage actions before and after sending the request.
  */
export default class FetchRequest {
    private options;
    private _response;
    constructor(options: FetchRequestType);
    private fetchData;
    private preFetch;
    private postFetch;
    private submitForm;
    private createFormData;
    private createJSON;
    private get _formData();
    get response(): any;
}
export {};
