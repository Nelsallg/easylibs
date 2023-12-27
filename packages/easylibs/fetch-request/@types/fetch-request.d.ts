declare type FetchRequestType = {
    uri: string;
    data?: Object | FormData | null;
    submiter?: HTMLElement | null;
    postFetchAction?: (result?: any) => void;
    preFetchAction?: Function;
    onSuccess?: (response: any) => any;
    onError?: (error: unknown) => any;
    options?: {
        method?: 'GET' | 'POST';
        headers?: Object;
        body?: any;
        credentials?: "omit" | "same-origin";
        mode?: "cors" | "no-cors" | "same-origin";
        cache?: "default" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
        onProgressUpdate?: (progressEvent: ProgressEvent) => void;
        responseHandler?: Function;
        errorResponseHandler?: Function;
        timeout?: number;
        fetchOptions?: RequestInit;
        isBinaryFileDownload?: boolean;
        contentType?: string;
        acceptDataFormat?: "form-data" | "classic-object" | "array";
    };
};
/**
 * Cette classe est une classe utilitaire conçue pour faciliter l'envoi de requêtes Fetch dans une application web.
 * Elle offre une interface simple pour effectuer des requêtes HTTP
 * et gérer les actions avant et après l'envoi de la requête.
 */
export default class FetchRequest {
    protected options: FetchRequestType;
    protected _response: any;
    constructor(options: FetchRequestType);
    protected preFetch: () => Promise<void>;
    protected fetchData: () => Promise<any>;
    protected postFetch: () => Promise<void>;
    protected submitForm: () => Promise<void>;
    protected createFormData: (data: object) => FormData;
    protected createJSON: (data: any[] | Object) => string;
    protected get _formData(): string | FormData;
    get response(): any;
}
export {};
