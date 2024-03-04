import TempData from "@easylibs/tempdata";
export default class TempDataBackend {
    private database;
    private uri;
    private _response;
    /**
     *
     * @param database - base de données
     * @param uri - L'URL de destination où les données du formulaire seront envoyées.
     */
    constructor(database: TempData, uri: string);
    /**
     * Persists data to the server.
     *
     * @param redirectURL - The URL to redirect to after the data is persisted.
     * @param callback - The callback function to be called after the data is persisted.
     * @returns A promise that resolves when the data is persisted.
     */
    persist(redirectURL?: string, callback?: Function): Promise<void>;
    /**
     * Saves form data to the server.
     *
     * @param data - The data object containing the submiter, callback, redirectUrl, and loader properties.
     * @param data.submiter - The submit button element.
     * @param data.callback - The callback function to be called after the data is saved.
     * @param data.redirectUrl - The URL to redirect to after the data is saved.
     * @param data.loader - The loader HTML content to display while saving the data.
     */
    save(data: {
        submiter: HTMLElement;
        callback: Function;
        redirectUrl?: string;
        loader?: string | Function;
        preFetchAction?: Function;
    }): void;
    /**
     * Normalizes an array field into a FormData object.
     * This method takes an array of data objects and normalizes it into a FormData object. It handles files within the data objects by transforming them into Blobs using a BlobTransformer. The resulting FormData object is returned.
     * @param datas - The array of data objects to be normalized.
     * @returns The normalized FormData object.
     */
    protected normalizeArrayField(datas: Array<any>): FormData;
    /**
     * Retourne la réponse du serveur.
     */
    get response(): any;
}
