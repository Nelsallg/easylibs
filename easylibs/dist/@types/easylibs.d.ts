import IFetchRequest from '@easylibs/fetch-request';
import IProgressForm from '@easylibs/progress-form';
import IUtils from '@easylibs/utils';
import IFlash from '@easylibs/flash';
declare type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
declare type Headers = Record<string, string>;
declare interface FetchRequestOptions {
    method?: HttpMethod;
    headers?: Headers;
    credentials?: "omit" | "same-origin" | "include";
    mode?: "cors" | "no-cors" | "same-origin";
    cache?: "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
    integrity?: string;
    timeOut?: number;
    contentType?: string;
    acceptDataFormat?: "form-data" | "classic-object" | "array";
    responseType?: 'json' | 'text';
}
declare interface FetchRequestCallbacks {
    onPostFetch?: (response?: any, status?: number) => any;
    onPreFetch?: (data?: any) => any;
    onSuccess?: (response: any) => void;
    onError?: (error: Error, status: number) => void;
}
declare type FetchRequestType = {
    uri: string;
    data?: Record<any, any> | FormData | null;
    submitter?: HTMLElement | null;
    options?: FetchRequestOptions;
    callbacks?: FetchRequestCallbacks;
};
export declare namespace Easylibs {
    /**
     * This class is a utility class designed to make it easier to send Fetch requests in a web application.
     * It offers a simple interface for making HTTP requests
     * and manage actions before and after sending the request.
     */
    class FetchRequest extends IFetchRequest {
        constructor(options: FetchRequestType);
    }
    /**
     * ProgressForm represents a class for managing a progressive form.
     */
    class ProgressForm extends IProgressForm {
        constructor(enableDefaultCssStyle?: boolean);
    }
    class Utils extends IUtils {
        constructor();
    }
    class Flash extends IFlash {
        constructor();
    }
}
export {};
