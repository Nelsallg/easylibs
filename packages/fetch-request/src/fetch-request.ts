declare type FetchRequestType = {
    uri: string,
    data?: Object|FormData|null,
    submiter?: HTMLElement|null,
    options?: {
        method?: 'GET' | 'POST',
        headers?: Object,
        body?: any,
        credentials?: "omit" | "same-origin",
        mode?: "cors" | "no-cors" | "same-origin",
        cache?: "default" | "reload" | "no-cache" | "force-cache" | "only-if-cached",
        timeOut?: number,
        fetchOptions?: RequestInit,
        isBinaryFileDownload?: boolean,
        contentType?: string,
        acceptDataFormat?: "form-data" | "classic-object" | "array",
    }
    onPostFetch?: (response?:any) => any,
    onPreFetch?: (that?:any) => any,
    onSuccess?: (response:any) => any,
    onError?: (error: unknown, status:number) => any
}
/**
 * Cette classe est une classe utilitaire conçue pour faciliter l'envoi de requêtes Fetch dans une application web. 
 * Elle offre une interface simple pour effectuer des requêtes HTTP 
 * et gérer les actions avant et après l'envoi de la requête.
 */
export default class FetchRequest{
    private options: FetchRequestType;
    private _response: any;
    constructor(options: FetchRequestType) {
        this.options = options;
        if(options.submiter){
            options.submiter.addEventListener('click', this.submitForm);
        }else{
            this.submitForm()
        }
    }
    private fetchData = async () => {
        try {
            if(!this.options){
                throw new Error(`Missing Options for the request`)
            }
            if(!this.options.uri){
                throw new Error("URI is required");
            }
            if(!this.options.options || !this.options.options.method){
                throw new Error("The calling method is required");
            }
            const response = await fetch(this.options.uri, {
                method: this.options.options.method ,
                body: this._formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });
            const dataResponse = await response.json();
            this._response = dataResponse;
            if(this.options.onPostFetch)
            {this.options.onPostFetch(dataResponse);}
            if(this.options.onSuccess && response.status === 200){
                return this.options.onSuccess(dataResponse);
            }
            
        } catch (error) {
            if(this.options.onError && this._response.status !== 200){
                return this.options.onError(error, this._response.status);
            }
            console.error(error);
        }
    }
    private preFetch = async () => {
        if(typeof this.options.onPreFetch === 'function') {
            let data = await this.options.onPreFetch(this.options.data);
            if(data){
                this.options.data = data.data;
            }
        }
    }
    private postFetch = async () => {
        if(this.options.submiter instanceof HTMLButtonElement)
        {this.options.submiter.removeAttribute('disabled');}
        return this.options.onPostFetch ? this.options.onPostFetch() : undefined;
    }
    private submitForm = async () => {
        try{
            if(this.options.onPreFetch){await this.preFetch();}
            await this.fetchData();
            if(this.options.onPostFetch){await this.postFetch();}
        }catch(error){
            console.error('Error executing query : ', error);
        }
    };
    private createFormData = (data: object) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value ?? "");
        }
        return formData;
    }
    private createJSON = (data: any[]|Object) => {
        return JSON.stringify({ data: data });
    }
    private get _formData() {
        const isFormData = (data: any): data is FormData => data instanceof FormData;
        const isArray = (data: any): data is any[] => Array.isArray(data);
        const isObject = (data: any): data is object => typeof data === 'object' && Object.keys(data).length > 0;

        if(this.options.options){
            const acceptDataFormat = this.options.options.acceptDataFormat;
            if(acceptDataFormat){
                switch (acceptDataFormat) {
                    case "form-data":
                        if (isFormData(this.options.data)) {
                            return this.options.data;
                        } else if (isArray(this.options.data)) {
                            return this.createJSON(this.options.data);
                        } else if (isObject(this.options.data)) {
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
    public get response():any
    {
        return this._response;
    }
}


