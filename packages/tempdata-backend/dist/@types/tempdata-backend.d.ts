import TempData from "@easylibs/tempdata";
declare interface Callbacks {
    onPostFetch?: (response?: any, status?: number) => any;
    onPreFetch?: (data?: any) => any;
    onSuccess?: (response: any) => void;
    onError?: (error: Error, status: number) => void;
}
export default class TempDataBackend {
    private database;
    private uri;
    /**
     *
     * @param database - base de données
     * @param uri - L'URL de destination où les données du formulaire seront envoyées.
     */
    constructor(database: TempData, uri: string);
    /**
     * Persists data to the server.
     *
     * @param callbacks - The callback function to be called after the data is persisted.
     * @returns A promise that resolves when the data is persisted.
     */
    persist(callbacks: Callbacks): Promise<void>;
    /**
     * Saves form data to the server.
     *
     * @param submiter - The submit button element.
     * @param callbacks - The callback functions to call before, after, on success or error during the fetch request.
     * @param loader - The loader HTML content to display while saving the data.
     */
    save(submiter: HTMLElement, callbacks?: Callbacks, loader?: string | Function): void;
    /**
     * Normalizes an array field into a FormData object.
     * This method takes an array of data objects and normalizes it into a FormData object. It handles files within the data objects by transforming them into Blobs using a BlobTransformer. The resulting FormData object is returned.
     * @param datas - The array of data objects to be normalized.
     * @returns The normalized FormData object.
     */
    protected normalizeArrayField(datas: Array<any>): FormData;
    private escape;
}
export {};
