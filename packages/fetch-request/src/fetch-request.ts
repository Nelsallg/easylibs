declare type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
declare type Headers = Record<string, string>;

declare interface FetchRequestOptions {
    method?: HttpMethod,
    headers?: Headers,
    credentials?: "omit" | "same-origin" | "include",
    mode?: "cors" | "no-cors" | "same-origin",
    cache?: "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload",
    integrity?: string,
    timeOut?: number,
    contentType?: string,
    acceptDataFormat?: "form-data" | "classic-object" | "array",
    responseType?: 'json' | 'text',
}

declare interface FetchRequestCallbacks {
    onPostFetch?: (response?: any) => any,
    onPreFetch?: (data?: any) => any,
    onSuccess?: (response: any) => void,
    onError?: (error: Error, status: number) => void
}

declare type FetchRequestType = {
    uri: string,
    data?: Record<any, any> | FormData | null,
    submitter?: HTMLElement | null,
    options?: FetchRequestOptions,
    callbacks?: FetchRequestCallbacks
}
/**
  * This class is a utility class designed to make it easier to send Fetch requests in a web application.
  * It offers a simple interface for making HTTP requests
  * and manage actions before and after sending the request.
  */
export default class FetchRequest{
    private options: FetchRequestType;
    private response: any;
    constructor(options: FetchRequestType) {
        this.options = options;
        this.attachSubmitterEvent();
    }
    private attachSubmitterEvent() {
        this.options.submitter ? this.options.submitter.addEventListener('click', this.submitForm) : this.submitForm();  
    }
    private submitForm = async () => {
        try{
            if(this.options.callbacks && this.options.callbacks.onPreFetch){await this.preFetch();}
            await this.run();
            if(this.options.callbacks && this.options.callbacks.onPostFetch){await this.postFetch();}
        }catch(error){
            this.handleError(error, undefined,'Error executing query : ');
        }
    }
    private run = async () =>{
        let response:Response|null = null;
        try {
            const { uri, data, options } = this.options;
            if (!uri) throw new Error("URI is required");
            let finalUri = uri;
            let body = null;
            const method = options?.method || 'GET';
            if (method === "GET" && data) {
                finalUri = this.buildGetRequestUrl(uri, data);
            } 
            else if (method !== "GET" && method !== "HEAD" && method !== "OPTIONS" && data) {
                body = this.prepareRequestBody(data);
            }
            const fetchOptions: RequestInit = {
                method: method,
                headers: options?.headers,
                body: body,
                credentials: options?.credentials,
                mode: options?.mode,
                cache: options?.cache,
                integrity: options?.integrity,
            };
            if (method === "GET" || method === "HEAD" || method === "OPTIONS") {
                delete fetchOptions.body;
            }
            response = await fetch(finalUri, fetchOptions);
            if(options){
                const responseType = options.responseType;
                if(responseType){
                    this.response = responseType === "text" ? await response.text() : await response.json();
                }
            }

            if (this.options.callbacks?.onSuccess && response.ok) {
                this.options.callbacks.onSuccess(this.response);
            }
            
        } catch (error) {
            this.handleError(error, response ? response.status : 0);
        }
    }
    private preFetch = async () =>{
        if(typeof this.options.callbacks.onPreFetch === 'function') {
            let data = await this.options.callbacks.onPreFetch(this.options.data);
            if(data){
                this.options.data = data.hasOwnProperty('data') ? data.data : data;
            }
        }
    }
    private postFetch = async () =>{
        if(this.options.submitter instanceof HTMLButtonElement)
        {this.options.submitter.removeAttribute('disabled');}
        return this.options.callbacks.onPostFetch ? this.options.callbacks.onPostFetch() : undefined;
    }
    private buildGetRequestUrl(uri: string, data: Record<any, any> | FormData): string {
        const url = new URL(uri, window.location.origin);
        const params = new URLSearchParams();
        if (data instanceof FormData) {
            for (let [key, value] of data.entries()) {
                if (typeof value === 'string') {
                    params.append(key, value);
                }
            }
        } else {
            for (let [key, value] of Object.entries(data)) {
                params.append(key, value);
            }
        }
        url.search = params.toString();
        return url.toString();
    }
    private prepareRequestBody(data: Record<any, any> | FormData): FormData | Record<any, any> | string {
        if (this.options.options?.acceptDataFormat === "form-data" && !(data instanceof FormData)) {
            return this.convertObjectToFormData(data);
        } else if (this.options.options?.acceptDataFormat === "classic-object") {
            return JSON.stringify(data);
        }
        return data;
    }
    private convertObjectToFormData(data: Record<any, any>): FormData {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => formData.append(key, value));
        return formData;
    }
    private handleError(error: any, status?: number, message:string='Fetch Request Error: ') {
        console.error(message, error);
        if (this.options.callbacks?.onError) {
            this.options.callbacks.onError(error, status || 0);
        }
    }
}


