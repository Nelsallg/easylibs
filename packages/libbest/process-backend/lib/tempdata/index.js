"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessIndexedDB = void 0;
const formdata_transformer_1 = require("../../transformer/src/script/formdata-transformer");
const utils_1 = require("../utils/utils");
class ProcessIndexedDB {
    /**
     * @param databasename - Le nom de la base de données IndexedDB à ouvrir ou créer.
     * @param objectstorename - Le nom de l'objet (object store) qui contiendra les éléments à stockés
     * @param version - La version de la base de données IndexedDB (par défaut : 1).
     */
    constructor(databasename, objectstorename, version = 1) {
        this.databasename = databasename;
        this.objectstorename = objectstorename;
        this.version = version;
    }
    /**
     * Opens or creates a new IndexedDB database with the specified name and version.
     * @returns A promise that resolves to the opened or created IDBDatabase object.
     */
    openDB() {
        return new Promise((resolve, reject) => {
            const request = window.indexedDB.open(this.databasename, this.version);
            request.onerror = (event) => {
                const { target } = event;
                console.error("Failed to open database", target === null || target === void 0 ? void 0 : target.error);
                reject(target === null || target === void 0 ? void 0 : target.error);
            };
            request.onsuccess = (event) => {
                var _a;
                const db = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                resolve(db);
            };
            request.onupgradeneeded = (event) => {
                var _a;
                const db = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                db.createObjectStore(this.objectstorename, { autoIncrement: true });
            };
        });
    }
    /**
     * Adds a new element to the IDBObjectStore with the provided object.
     * @param elementObject - The object to add to the IDBObjectStore.
     * @returns A promise that resolves to an object indicating the success of the operation.
     */
    add(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectStore = yield this._getObjectStore("readwrite");
                const request = objectStore.add(data);
                return new Promise((resolve, reject) => {
                    request.onsuccess = (event) => __awaiter(this, void 0, void 0, function* () {
                        if (event.target) {
                            const elementId = event.target.result;
                            let elementObject = data;
                            elementObject['@id'] = elementId;
                            objectStore.put(elementObject, elementId);
                            resolve({ success: true, elementObject });
                        }
                    });
                    request.onerror = (event) => {
                        reject(new Error("Failed to add file to IndexedDB: " + event.target.error));
                    };
                });
            }
            catch (error) {
                console.error("Error accessing IndexedDB", error);
                return { success: false };
            }
        });
    }
    /**
     * Retrieves all elements from the IDBObjectStore and returns them as an array.
     * @returns A promise that resolves to an array containing all the elements from the IDBObjectStore.
     */
    getIndexedData() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const objectStore = yield this._getObjectStore("readonly");
            const elements = [];
            const request = objectStore.openCursor();
            request.onerror = (event) => {
                reject("Erreur lors de la récupération des éléments de l'index");
            };
            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    elements.push(cursor.value);
                    cursor.continue();
                }
                else {
                    resolve(elements);
                }
            };
        }));
    }
    /**
     * Clears the entire IndexedDB database by deleting the database.
     */
    clearIndexedDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openDB();
            indexedDB.deleteDatabase(this.databasename);
        });
    }
    /**
     * Deletes the object with the specified ID from the IDBObjectStore.
     * @param id - The ID of the object to delete.
     */
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objectStore = yield this._getObjectStore("readwrite");
                objectStore.delete(Number(id));
                console.log(objectStore);
                yield this.refactorIndexes("[product]");
                const button = document.querySelector(`[ezat-delete="${id}"]`);
                const card = button === null || button === void 0 ? void 0 : button.closest("[ezat-item]");
                card === null || card === void 0 ? void 0 : card.remove();
            }
            catch (err) {
                alert(`Error removing file ${id}: ${err}`);
            }
        });
    }
    /**
     * Retrieves the form data at the specified index from the array of object data obtained from `getIndexedData`.
     * @param index - The index of the form data to retrieve.
     * @returns A promise that resolves to the form data at the specified index, or `undefined` if the index is out of range.
     */
    _getData(index, dataType) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectData = yield this.getIndexedData();
            if (index >= 0 && index < objectData.length) {
                const transformer = "form-data" === dataType
                    ? new formdata_transformer_1.FormDataTransformer(objectData[index])
                    : objectData[index];
                return "form-data" === dataType ? transformer.transform() : transformer;
            }
        });
    }
    /**
     * Checks if the array of elements obtained from `getIndexedData` is empty.
     * @returns A promise that resolves to `true` if the array is empty, and `false` otherwise.
     */
    _isEmpty() {
        return __awaiter(this, void 0, void 0, function* () {
            const objectStore = yield this._getObjectStore("readonly");
            const countRequest = objectStore.count();
            return new Promise((resolve, reject) => {
                countRequest.onsuccess = () => {
                    resolve(countRequest.result === 0);
                };
                countRequest.onerror = () => {
                    reject(new Error("Failed to count items in IndexedDB"));
                };
            });
        });
    }
    /**
     * Retrieves the length of the object store.
     * This method asynchronously retrieves the length of the object store by performing a count operation.
     * @returns A promise that resolves with the length of the object store.
     */
    _length() {
        return __awaiter(this, void 0, void 0, function* () {
            const objectStore = yield this._getObjectStore("readonly");
            const countRequest = objectStore.count();
            return new Promise((resolve, reject) => {
                countRequest.onsuccess = (e) => {
                    resolve(countRequest.result);
                };
                countRequest.onerror = (err) => {
                    reject(console.error("Error", err));
                };
            });
        });
    }
    /**
     * Retrieves the IDBObjectStore with the specified access mode from the opened database.
     * @param access - The access mode for the transaction.
     * @returns A promise that resolves to the IDBObjectStore with the specified access mode.
     */
    _getObjectStore(access) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.openDB();
            const transaction = db.transaction([this.objectstorename], access);
            return transaction.objectStore(this.objectstorename);
        });
    }
    /**
     * Refactors the indexes of the indexed data based on the provided string.
     * This method retrieves the indexed data, checks if it is empty, and then processes each object to update the indexes based on the provided string. The refactored data is then replaced in the object store.
     * @param stringBeforeExistingKey - The string to be used for refactoring the indexes.
     */
    refactorIndexes(stringBeforeExistingKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectData = yield this.getIndexedData();
            const isEmpty = yield this._isEmpty();
            const newRefactoredObject = [];
            if (isEmpty) {
                return null;
            }
            objectData.forEach((object, i) => __awaiter(this, void 0, void 0, function* () {
                const updatedObject = this.processObject(object, i, stringBeforeExistingKey, objectData.length);
                newRefactoredObject.push(updatedObject);
            }));
            this.replaceIndexedData(newRefactoredObject);
        });
    }
    /**
     * Replaces the indexed data in the object store with the provided data array.
     * This method opens the indexedDB, clears the existing data in the object store, and adds the new data from the provided array.
     * @param object - The array of data to replace the indexed data with.
     */
    replaceIndexedData(object) {
        const openDBRequest = indexedDB.open(this.databasename, this.version);
        openDBRequest.onsuccess = (event) => {
            const IBDB = event.target.result;
            const result = IBDB;
            const transaction = result.transaction([this.objectstorename], "readwrite");
            const objetsStore = transaction.objectStore(this.objectstorename);
            const clear = objetsStore.clear();
            clear.onsuccess = function () {
                object.forEach(function (data) {
                    const addRequest = objetsStore.add(data);
                    // addRequest.onsuccess = (event: any) => {
                    //   if (event.target) {
                    //     const elementId = event.target.result;
                    //     let elementObject = data as any;
                    //     elementObject.id = elementId;
                    //     objetsStore.put(elementObject, elementId);
                    //   }
                    // };
                });
            };
            clear.onerror = function (event) {
                console.error("Erreur lors de la suppression des données existantes :", event.target.error);
            };
        };
        openDBRequest.onerror = function (event) {
            console.error("Erreur lors de l'ouverture de la base de données :", event.target.error);
        };
    }
    /**
     * Processes an object to update its keys based on the provided string and index.
     * This method takes an object, splits its keys based on the provided string, and updates the keys with the index value. It also extracts the values of "base64String" and "id" keys. The processed object with updated keys is returned.
     * @param object - The object to be processed.
     * @param i - The index value used for updating the keys.
     * @param stringBeforeExistingKey - The string used for splitting the keys.
     * @param length - The length of the object.
     * @returns The processed object with updated keys.
     */
    processObject(object, i, stringBeforeExistingKey, length) {
        const newObject = {};
        let base64String = "";
        let id = 0;
        let _token = "";
        let tokenKey = "";
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                const keyParts = key.split(stringBeforeExistingKey);
                const keyPart = keyParts[1];
                _token = (0, utils_1.hasKeyWithNameSubstring)(object, "token");
                if (null !== _token) {
                    tokenKey = (0, utils_1.hasKeyWithNameSubstring)(object, "token", true);
                }
                if ("@base64String" === key) {
                    base64String = object[key];
                }
                if ("@id" === key) {
                    id = parseInt(object[key]);
                }
                if (keyPart) {
                    const findchar = (0, utils_1.findChar)(keyPart, length);
                    const char = findchar !== null && findchar !== void 0 ? findchar : "0";
                    const newKeyPart = keyPart.replace(`[${char}]`, `[${i.toString()}]`);
                    const newKey = `${keyParts[0]}${stringBeforeExistingKey}${newKeyPart}`;
                    newObject[newKey] = object[key];
                }
            }
        }
        newObject["@base64String"] = base64String;
        newObject["@id"] = id;
        newObject[`${tokenKey}`] = _token;
        return newObject;
    }
}
exports.ProcessIndexedDB = ProcessIndexedDB;
