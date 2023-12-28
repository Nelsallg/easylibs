declare type FetchRequestType = {
    uri: string;
    data?: Object | FormData | null;
    submiter?: HTMLElement | null;
    options?: {
        method?: 'GET' | 'POST';
        headers?: Object;
        body?: any;
        credentials?: "omit" | "same-origin";
        mode?: "cors" | "no-cors" | "same-origin";
        cache?: "default" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
        timeout?: number;
        fetchOptions?: RequestInit;
        isBinaryFileDownload?: boolean;
        contentType?: string;
        acceptDataFormat?: "form-data" | "classic-object" | "array";
    };
    onPostFetch?: (data?: any) => any;
    onPreFetch?: () => any;
    onSuccess?: (response: any) => any;
    onError?: (error: unknown) => any;
    onProgressUpdate?: (progressEvent: ProgressEvent) => void;
};
/**
 * Cette classe est une classe utilitaire conçue pour faciliter l'envoi de requêtes Fetch dans une application web.
 * Elle offre une interface simple pour effectuer des requêtes HTTP
 * et gérer les actions avant et après l'envoi de la requête.
 */
export default class FetchRequest {
    private options;
    private _response;
    constructor(options: FetchRequestType);
    private preFetch;
    private fetchData;
    private postFetch;
    private submitForm;
    private createFormData;
    private createJSON;
    private get _formData();
    get response(): any;
}
export {};
