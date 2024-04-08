export default class TempData {
    private dbname;
    private osname;
    private version;
    target: any;
    /**
     * @param dbname - The name of the IndexedDB database to open or create.
     * @param osname - The name of the object (object store) which will contain the elements to be stored
     * @param version - The version of the IndexedDB database (default: 1).
     */
    constructor(dbname: string, osname: string, version?: number);
    /**
     * Adds a new element or elements to the IDBObjectStore with the provided object or array of objects.
     * @param data - Data (a single object or an array of objects) to add to the IDBObjectStore.
     * @returns A promise that resolves to an object indicating the success of the operation.
     */
    add(data: Record<string, any> | Array<Record<string, any>>, osname?: string): Promise<Record<string, any>>;
    /**
     * Retrieves the form data at the specified index from the array of object data obtained from `getIndexedData`.
     * @param i - The index of the form data to retrieve.
     * @returns A promise that resolves to the form data at the specified index, or `undefined` if the index is out of range.
     */
    readOne(i: number, type?: "form-data" | "record", osname?: string): Promise<FormData | Record<string, any> | undefined>;
    /**
     * Finds the first record that matches the provided criteria.
     * @param criteria - An object representing the key-value pairs to match against the records.
     * @param type - Optional parameter to specify the return type: "form-data" or "record".
     * @returns A promise that resolves to the first matching record or `undefined` if no match is found.
     */
    readOneBy(criteria: Record<string, any>, type?: "form-data" | "record", osname?: string): Promise<FormData | Record<string, any> | undefined>;
    /**
     * Retrieves all elements from the IDBObjectStore and returns them as an array.
     * @returns A promise that resolves to an array containing all the elements from the IDBObjectStore.
     */
    read(osname?: string): Promise<Array<Record<string, any>>>;
    /**
     * Retrieves all elements that match the specified criteria from the IDBObjectStore.
     * @param criteria - An object representing the key-value pairs that the elements must match.
     * @returns A promise that resolves to an array containing all matching elements from the IDBObjectStore.
     */
    readBy(criteria: Record<string, any>, osname?: string): Promise<Array<Record<string, any>>>;
    /**
     * Updates an element in the database.
     * @param id - The numeric ID of the element to be updated.
     * @param data - The new data to be merged with the existing data.
     * @returns A promise that resolves to a boolean indicating whether the update was successful (true) or the ID was not found (false).
     */
    update(id: number, data: Record<string, any>, osname?: string): Promise<boolean>;
    /**
     * Deletes the object from the IDBObjectStore.
     * @param id - The ID of the object to delete.
     */
    deleteOne(id: number, refactoringShortKeyString?: string | null, osname?: string): Promise<boolean>;
    /**
     * Deletes the specified object store from the IndexedDB database.
     * @returns A promise that resolves if the object store is successfully deleted, or rejects with an error if any error occurs during the operation.
     */
    deleteOS(osname?: string): Promise<boolean>;
    /**
     * Clears the entire IndexedDB database by deleting the database.
     */
    deleteAll(osname?: string): Promise<boolean>;
    /**
     * Opens or creates a new IndexedDB database with the specified name and version.
     * @returns A promise that resolves to the opened or created IDBDatabase object.
     */
    private openDB;
    /**
     * Checks if database is empty.
     * @returns A promise that resolves to `true` if database is empty, and `false` otherwise.
     */
    _isEmpty(osname?: string): Promise<boolean>;
    /**
     * Retrieves the length of the object store.
     * @returns A promise that resolves with the length of the object store.
     */
    _length(osname?: string): Promise<number>;
    /**
     * Retrieves the IDBObjectStore with the specified access mode from the opened database.
     * @param access - The access mode for the transaction.
     * @returns A promise that resolves to the IDBObjectStore with the specified access mode.
     */
    _getObjectStore(access: IDBTransactionMode, osname?: string): Promise<IDBObjectStore>;
    /**
     * Refactors the indexes of the indexed data.
     * @param refactoringShortKeyString - The string to be used for refactoring the indexes.
     */
    refactorIndexes(refactoringShortKeyString?: string, osname?: string): Promise<any>;
    /**
     * Replaces the indexed data in the object store.
     * This method opens the indexedDB, clears the existing data in the object store, and adds the new data from the provided array.
     * @param object - The array of data to replace the indexed data with.
     */
    private refactor;
    /**
     * Processes an object to update its keys.
     * @param object - The object to be processed.
     * @param i - The index value used for updating the keys.
     * @param length - The length of the object.
     * @param refactoringShortKeyString - The string used for splitting the keys.
     * @returns The processed object with updated keys.
     */
    private processObject;
}
