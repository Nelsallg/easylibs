export declare class ProcessIndexedDB {
    protected databasename: string;
    protected objectstorename: string;
    protected version: number;
    target: any;
    /**
     * @param databasename - Le nom de la base de données IndexedDB à ouvrir ou créer.
     * @param objectstorename - Le nom de l'objet (object store) qui contiendra les éléments à stockés
     * @param version - La version de la base de données IndexedDB (par défaut : 1).
     */
    constructor(databasename: string, objectstorename: string, version?: number);
    /**
     * Opens or creates a new IndexedDB database with the specified name and version.
     * @returns A promise that resolves to the opened or created IDBDatabase object.
     */
    protected openDB(): Promise<IDBDatabase>;
    /**
     * Adds a new element to the IDBObjectStore with the provided object.
     * @param elementObject - The object to add to the IDBObjectStore.
     * @returns A promise that resolves to an object indicating the success of the operation.
     */
    add(data: object): Promise<object>;
    /**
     * Retrieves all elements from the IDBObjectStore and returns them as an array.
     * @returns A promise that resolves to an array containing all the elements from the IDBObjectStore.
     */
    getIndexedData(): Promise<Array<any>>;
    /**
     * Clears the entire IndexedDB database by deleting the database.
     */
    clearIndexedDB(): Promise<void>;
    /**
     * Deletes the object with the specified ID from the IDBObjectStore.
     * @param id - The ID of the object to delete.
     */
    delete(id: string | number): Promise<void>;
    /**
     * Retrieves the form data at the specified index from the array of object data obtained from `getIndexedData`.
     * @param index - The index of the form data to retrieve.
     * @returns A promise that resolves to the form data at the specified index, or `undefined` if the index is out of range.
     */
    _getData(index: number, dataType?: "form-data" | "classic-object"): Promise<FormData | any | undefined>;
    /**
     * Checks if the array of elements obtained from `getIndexedData` is empty.
     * @returns A promise that resolves to `true` if the array is empty, and `false` otherwise.
     */
    _isEmpty(): Promise<boolean>;
    /**
     * Retrieves the length of the object store.
     * This method asynchronously retrieves the length of the object store by performing a count operation.
     * @returns A promise that resolves with the length of the object store.
     */
    _length(): Promise<number>;
    /**
     * Retrieves the IDBObjectStore with the specified access mode from the opened database.
     * @param access - The access mode for the transaction.
     * @returns A promise that resolves to the IDBObjectStore with the specified access mode.
     */
    _getObjectStore(access: IDBTransactionMode): Promise<IDBObjectStore>;
    /**
     * Refactors the indexes of the indexed data based on the provided string.
     * This method retrieves the indexed data, checks if it is empty, and then processes each object to update the indexes based on the provided string. The refactored data is then replaced in the object store.
     * @param stringBeforeExistingKey - The string to be used for refactoring the indexes.
     */
    refactorIndexes(stringBeforeExistingKey: string): Promise<any>;
    /**
     * Replaces the indexed data in the object store with the provided data array.
     * This method opens the indexedDB, clears the existing data in the object store, and adds the new data from the provided array.
     * @param object - The array of data to replace the indexed data with.
     */
    protected replaceIndexedData(object: Array<any>): void;
    /**
     * Processes an object to update its keys based on the provided string and index.
     * This method takes an object, splits its keys based on the provided string, and updates the keys with the index value. It also extracts the values of "base64String" and "id" keys. The processed object with updated keys is returned.
     * @param object - The object to be processed.
     * @param i - The index value used for updating the keys.
     * @param stringBeforeExistingKey - The string used for splitting the keys.
     * @param length - The length of the object.
     * @returns The processed object with updated keys.
     */
    private processObject;
}
