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
const helpers_1 = require("./scripts/helpers");
const transformer_1 = require("./scripts/transformer");
class TempData {
    /**
     * @param dbname - The name of the IndexedDB database to open or create.
     * @param osname - The name of the object (object store) which will contain the elements to be stored
     * @param version - The version of the IndexedDB database (default: 1).
     */
    constructor(dbname, osnames, version = 1) {
        this.dbname = dbname;
        this.osnames = osnames;
        this.version = version;
        this.current_osname = osnames;
        this.openDB(this.version);
    }
    /**
     * Adds a new element or elements to the IDBObjectStore with the provided object or array of objects.
     * @param data - Data (a single object or an array of objects) to add to the IDBObjectStore.
     * @returns A promise that resolves to an object indicating the success of the operation.
     */
    add(data, osname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
                return this.getObjectStore("readwrite", osname).then((objectStore) => __awaiter(this, void 0, void 0, function* () {
                    const handleData = (item) => {
                        const request = objectStore.add(item);
                        return new Promise((resolve, reject) => {
                            request.onsuccess = (event) => __awaiter(this, void 0, void 0, function* () {
                                const target = event.target;
                                if (target) {
                                    const elementId = target.result;
                                    let elementObject = item;
                                    elementObject["mk"] = elementId;
                                    objectStore.put(elementObject, elementId);
                                    resolve({ success: true, elementObject });
                                }
                            });
                            request.onerror = (event) => {
                                const target = event.target;
                                reject(new Error("Failed to add file to IndexedDB: " + target.error.message));
                            };
                        });
                    };
                    if (Array.isArray(data)) {
                        try {
                            const results = yield Promise.all(data.map((item) => handleData(item)));
                            return ({ success: true, elements: results });
                        }
                        catch (error) {
                            return ({ success: false, error: error.message });
                        }
                    }
                    else {
                        return handleData(data);
                    }
                }));
            }
            catch (error) {
                console.error("Error accessing IndexedDB", error);
                return { success: false };
            }
        });
    }
    /**
     * Retrieves the form data at the specified index from the array of object data obtained from `getIndexedData`.
     * @param i - The index of the form data to retrieve.
     * @returns A promise that resolves to the form data at the specified index, or `undefined` if the index is out of range.
     */
    readOne(i, osname, type) {
        try {
            osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const objectStore = yield this.getObjectStore("readonly", osname);
                const request = objectStore.getAll();
                request.onsuccess = (event) => __awaiter(this, void 0, void 0, function* () {
                    const target = event.target;
                    const results = target.result;
                    const result = results[i];
                    if (result) {
                        const transformer = type === "form-data" ? new transformer_1.FormDataTransformer(result) : result;
                        resolve(type === "form-data" ? transformer.transform() : transformer);
                    }
                    else {
                        resolve(undefined);
                    }
                });
                request.onerror = (event) => {
                    const target = event.target;
                    reject(new Error("Failed to get data from IndexedDB: " + target.error.message));
                };
            }));
        }
        catch (error) {
            console.error("Error accessing IndexedDB", error);
            return undefined;
        }
    }
    /**
     * Finds the first record that matches the provided criteria.
     * @param criteria - An object representing the key-value pairs to match against the records.
     * @param type - Optional parameter to specify the return type: "form-data" or "record".
     * @returns A promise that resolves to the first matching record or `undefined` if no match is found.
     */
    readOneBy(criteria, osname, type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
                const objectStore = yield this.getObjectStore("readonly", osname);
                const request = objectStore.getAll();
                return new Promise((resolve, reject) => {
                    request.onsuccess = (event) => __awaiter(this, void 0, void 0, function* () {
                        const target = event.target;
                        const results = target.result;
                        const matchedResult = results.find((item) => {
                            return Object.keys(criteria).every((key) => criteria[key] === item[key]);
                        });
                        if (matchedResult) {
                            const transformer = type === "form-data"
                                ? new transformer_1.FormDataTransformer(matchedResult)
                                : matchedResult;
                            resolve(type === "form-data" ? transformer.transform() : transformer);
                        }
                        else {
                            resolve(undefined); // No match found
                        }
                    });
                    request.onerror = (event) => {
                        const target = event.target;
                        reject(new Error("Failed to get data from IndexedDB: " + target.error.message));
                    };
                });
            }
            catch (error) {
                console.error("Error accessing IndexedDB", error);
                return undefined;
            }
        });
    }
    /**
     * Retrieves all elements from the IDBObjectStore and returns them as an array.
     * @returns A promise that resolves to an array containing all the elements from the IDBObjectStore.
     */
    read(osname) {
        osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const objectStore = yield this.getObjectStore("readonly", osname);
            const elements = [];
            const request = objectStore.openCursor();
            request.onerror = (event) => {
                const target = event.target;
                reject("Failed to read indexed data: " + target.error.message);
            };
            request.onsuccess = (event) => {
                const target = event.target;
                const cursor = target.result;
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
     * Retrieves all elements that match the specified criteria from the IDBObjectStore.
     * @param criteria - An object representing the key-value pairs that the elements must match.
     * @returns A promise that resolves to an array containing all matching elements from the IDBObjectStore.
     */
    readBy(criteria, osname) {
        osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const objectStore = yield this.getObjectStore("readonly", osname);
            const elements = [];
            const request = objectStore.openCursor();
            request.onerror = (event) => {
                const target = event.target;
                reject(new Error("Erreur lors de la récupération des éléments: " + target.error.message));
            };
            request.onsuccess = (event) => {
                const target = event.target;
                const cursor = target.result;
                if (cursor) {
                    if ((0, helpers_1.matchesCriteria)(cursor.value, criteria)) {
                        elements.push(cursor.value);
                    }
                    cursor.continue();
                }
                else {
                    resolve(elements);
                }
            };
        }));
    }
    /**
     * Updates an element in the database.
     * @param id - The numeric ID of the element to be updated.
     * @param data - The new data to be merged with the existing data.
     * @returns A promise that resolves to a boolean indicating whether the update was successful (true) or the ID was not found (false).
     */
    update(id, data, osname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
                const objectStore = yield this.getObjectStore("readwrite", osname);
                const request = objectStore.get(id);
                return new Promise((resolve, reject) => {
                    request.onsuccess = (event) => __awaiter(this, void 0, void 0, function* () {
                        const target = event.target;
                        const existingData = target.result;
                        if (existingData) {
                            const updatedData = Object.assign(Object.assign({}, existingData), data);
                            const updateRequest = objectStore.put(updatedData, id);
                            updateRequest.onsuccess = () => {
                                resolve(true);
                            };
                            updateRequest.onerror = (error) => {
                                var _a;
                                reject(new Error("Failed to update data in IndexedDB: " + ((_a = error.target) === null || _a === void 0 ? void 0 : _a.error)));
                            };
                        }
                        else {
                            resolve(false);
                        }
                    });
                    request.onerror = (event) => {
                        const target = event.target;
                        reject(new Error("Failed to get data from IndexedDB: " + target.error.message));
                    };
                });
            }
            catch (error) {
                console.error("Error accessing IndexedDB", error);
                return false;
            }
        });
    }
    /**
     * Deletes the object from the IDBObjectStore.
     * @param id - The ID of the object to delete.
     */
    deleteOne(id, osname, refactoringShortKeyString) {
        return __awaiter(this, void 0, void 0, function* () {
            osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const objectStore = yield this.getObjectStore("readwrite", osname);
                    const request = objectStore.delete(id);
                    request.onsuccess = () => __awaiter(this, void 0, void 0, function* () {
                        if (refactoringShortKeyString) {
                            yield this.refactorIndexes(refactoringShortKeyString, osname);
                        }
                        resolve(true);
                    });
                    request.onerror = (event) => {
                        console.error(`Error removing file with id:${id}`, event);
                        reject(false);
                    };
                }
                catch (error) {
                    console.error(`Error removing file with id:${id}: ${error}`);
                    reject(false);
                }
            }));
        });
    }
    /**
     * Deletes the specified object store from the IndexedDB database.
     * @returns A promise that resolves if the object store is successfully deleted, or rejects with an error if any error occurs during the operation.
     */
    deleteOS(osname) {
        osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbname, this.version);
            request.onerror = () => {
                reject("Failed to open database.");
            };
            request.onsuccess = (event) => {
                resolve(true);
            };
            request.onupgradeneeded = (event) => {
                const target = event.target;
                const db = target.result;
                if (db.objectStoreNames.contains(osname)) {
                    try {
                        db.deleteObjectStore(osname);
                    }
                    catch (error) {
                        console.error(`Failed to delete ObjectStore ${osname}: ${error}`);
                        resolve(false);
                    }
                }
                else {
                    reject(`ObjectStore ${osname} does not exist.`);
                }
            };
        });
    }
    /**
     * Clears the entire IndexedDB database by deleting the database.
     */
    deleteDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.openDB(this.version);
                return new Promise((resolve, reject) => {
                    const request = indexedDB.deleteDatabase(this.dbname);
                    request.onsuccess = () => resolve(true);
                    request.onerror = () => resolve(false);
                });
            }
            catch (error) {
                console.error(`Error deleting database ${this.dbname}: ${error}`);
                return false;
            }
        });
    }
    /**
     * Opens or creates a new IndexedDB database with the specified name and version.
     * @returns A promise that resolves to the opened or created IDBDatabase object.
     */
    openDB(version) {
        version = version ? version : this.version;
        return new Promise((resolve, reject) => {
            const request = window.indexedDB.open(this.dbname, version);
            request.onerror = (event) => {
                const { target } = event;
                console.error("Failed to open database", target === null || target === void 0 ? void 0 : target.error);
                reject(target === null || target === void 0 ? void 0 : target.error);
            };
            request.onsuccess = (event) => __awaiter(this, void 0, void 0, function* () {
                const target = event.target;
                const db = target === null || target === void 0 ? void 0 : target.result;
                this.db = db;
                const isExpired = yield this.isItExpired(db);
                if (isExpired === undefined || isExpired === false)
                    resolve(db);
                if (isExpired === true)
                    reject("The datase is expired");
            });
            request.onupgradeneeded = (event) => {
                const target = event.target;
                const db = target === null || target === void 0 ? void 0 : target.result;
                if (Array.isArray(this.osnames)) {
                    for (let i = 0; i < this.osnames.length; i++) {
                        const osOptions = this.osnames[i];
                        db.createObjectStore(osOptions.osname, osOptions.options);
                    }
                }
                else {
                    db.createObjectStore(this.osnames, { autoIncrement: true, keyPath: "mk" });
                }
                db.createObjectStore("expiration", { keyPath: "id" });
            };
        });
    }
    /**
     * Checks if database is empty.
     * @returns A promise that resolves to `true` if database is empty, and `false` otherwise.
     */
    isItEmpty(osname) {
        return __awaiter(this, void 0, void 0, function* () {
            osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
            const objectStore = yield this.getObjectStore("readonly", osname);
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
     * @returns A promise that resolves with the length of the object store.
     */
    length(osname) {
        return __awaiter(this, void 0, void 0, function* () {
            osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
            const objectStore = yield this.getObjectStore("readonly", osname);
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
    isItExpired(db) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const handleRequest = (databse) => {
                    const transaction = databse.transaction(["expiration"], "readwrite");
                    const objetsStore = transaction.objectStore("expiration");
                    const requestGet = objetsStore.get('date');
                    requestGet.onsuccess = (e) => {
                        let date = requestGet.result;
                        if (!date) {
                            resolve(undefined);
                        }
                        else if (date && new Date() > new Date(date.date)) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    };
                    requestGet.onerror = (err) => {
                        reject(console.error("Error", err));
                    };
                };
                if (db) {
                    handleRequest(db);
                }
                else {
                    const openDBRequest = indexedDB.open(this.dbname, this.version);
                    openDBRequest.onsuccess = (event) => {
                        const target = event.target;
                        const result = target.result;
                        handleRequest(result);
                    };
                }
            });
        });
    }
    setExpire(date) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectStore = yield this.getObjectStore("readwrite", "expiration");
            const dateData = { date: date.getDate() };
            const requestDate = objectStore.add(dateData);
            return new Promise((resolve, reject) => {
                requestDate.onerror = (err) => {
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
    getObjectStore(access, osname) {
        return __awaiter(this, void 0, void 0, function* () {
            osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
            const db = yield this.openDB(this.version);
            const transaction = db.transaction([osname], access);
            return transaction.objectStore(osname);
        });
    }
    /**
     * Refactors the indexes of the indexed data.
     * @param refactoringShortKeyString - The string to be used for refactoring the indexes.
     */
    refactorIndexes(osname, refactoringShortKeyString) {
        return __awaiter(this, void 0, void 0, function* () {
            osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
            const objectData = yield this.read(osname);
            const isEmpty = yield this.isItEmpty();
            let updatedObjectArray = [];
            if (isEmpty) {
                return null;
            }
            objectData.forEach((object, i) => __awaiter(this, void 0, void 0, function* () {
                const updatedObject = this.processObject(object, i, objectData.length, refactoringShortKeyString);
                updatedObjectArray.push(updatedObject);
            }));
            this.refactor(updatedObjectArray, osname);
        });
    }
    /**
     * Replaces the indexed data in the object store.
     * This method opens the indexedDB, clears the existing data in the object store, and adds the new data from the provided array.
     * @param object - The array of data to replace the indexed data with.
     */
    refactor(object, osname) {
        osname = osname ? osname : (typeof this.current_osname === "string" ? this.current_osname : "");
        const openDBRequest = indexedDB.open(this.dbname, this.version);
        openDBRequest.onsuccess = (event) => {
            const target = event.target;
            const result = target.result;
            const transaction = result.transaction([osname], "readwrite");
            const objetsStore = transaction.objectStore(osname);
            const clear = objetsStore.clear();
            clear.onsuccess = function () {
                object.forEach(function (data) {
                    const addRequest = objetsStore.add(data);
                    addRequest.onsuccess = (event) => {
                        const target = event.target;
                        if (target) {
                            const elementId = target.result;
                            let elementObject = data;
                            elementObject[`mk`] = elementId;
                            objetsStore.put(elementObject, elementId);
                        }
                    };
                });
            };
            clear.onerror = function (event) {
                const target = event.target;
                console.error("Error deleting existing data :", target.error.message);
            };
        };
        openDBRequest.onerror = function (event) {
            const target = event.target;
            console.error("Error opening database :", target.error.message);
        };
    }
    /**
     * Processes an object to update its keys.
     * @param object - The object to be processed.
     * @param i - The index value used for updating the keys.
     * @param length - The length of the object.
     * @param refactoringShortKeyString - The string used for splitting the keys.
     * @returns The processed object with updated keys.
     */
    processObject(object, i, length, refactoringShortKeyString) {
        const newObject = {};
        let base64String, id, _token, tokenKey;
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                const keyParts = refactoringShortKeyString
                    ? key.split(refactoringShortKeyString)
                    : null;
                const keyPart = keyParts ? keyParts[1] : null;
                _token = (0, helpers_1.hasKeyWithNameSubstring)(object, "token");
                if (null !== _token) {
                    tokenKey = (0, helpers_1.hasKeyWithNameSubstring)(object, "token", true);
                }
                if ("base64String" === key) {
                    base64String = object[key];
                }
                if ("mk" === key) {
                    id = parseInt(object[key]);
                }
                if (keyPart) {
                    const findchar = (0, helpers_1.findChar)(keyPart, length);
                    const char = findchar !== null && findchar !== void 0 ? findchar : "0";
                    const newKeyPart = keyPart.replace(`[${char}]`, `[${i.toString()}]`);
                    const newKey = `${keyParts[0]}${refactoringShortKeyString}${newKeyPart}`;
                    newObject[newKey] = object[key];
                }
            }
        }
        if (base64String)
            newObject["base64String"] = base64String;
        newObject["mk"] = id;
        if (_token)
            newObject[`${tokenKey}`] = _token;
        return newObject;
    }
}
exports.default = TempData;
//# sourceMappingURL=tempdata.js.map