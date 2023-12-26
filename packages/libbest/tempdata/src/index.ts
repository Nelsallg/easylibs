import { FormDataTransformer } from "../../transformer/src/script/formdata-transformer";
import { findChar, hasKeyWithNameSubstring } from "../../utils/src/utils";
export class ProcessIndexedDB {
  protected databasename: string;
  protected objectstorename: string;
  protected version: number;
  public target: any;
  /**
   * @param databasename - Le nom de la base de données IndexedDB à ouvrir ou créer.
   * @param objectstorename - Le nom de l'objet (object store) qui contiendra les éléments à stockés
   * @param version - La version de la base de données IndexedDB (par défaut : 1).
   */
  constructor(databasename: string, objectstorename: string, version = 1) {
    this.databasename = databasename;
    this.objectstorename = objectstorename;
    this.version = version;
  }
  /**
   * Opens or creates a new IndexedDB database with the specified name and version.
   * @returns A promise that resolves to the opened or created IDBDatabase object.
   */
  protected openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.databasename, this.version);
      request.onerror = (event: any) => {
        const { target } = event;
        console.error("Failed to open database", target?.error);
        reject(target?.error);
      };
      request.onsuccess = (event: any) => {
        const db: IDBDatabase = event.target?.result;
        resolve(db);
      };
      request.onupgradeneeded = (event: any) => {
        const db: IDBDatabase = event.target?.result;
        db.createObjectStore(this.objectstorename, { autoIncrement: true });
      };
    });
  }
  /**
   * Adds a new element to the IDBObjectStore with the provided object.
   * @param elementObject - The object to add to the IDBObjectStore.
   * @returns A promise that resolves to an object indicating the success of the operation.
   */
  public async add(data: object): Promise<object> {
    try {
      const objectStore = await this._getObjectStore("readwrite");
      const request = objectStore.add(data);
      return new Promise((resolve, reject) => {
        request.onsuccess = async (event: any) => {
          if (event.target) {
            const elementId = event.target.result;
            let elementObject = data as any;
            elementObject['@id'] = elementId;
            objectStore.put(elementObject, elementId);
            resolve({ success: true, elementObject });
          }
        };
        request.onerror = (event: any) => {
          reject(
            new Error("Failed to add file to IndexedDB: " + event.target.error)
          );
        };
      });
    } catch (error) {
      console.error("Error accessing IndexedDB", error);
      return { success: false };
    }
  }
  /**
   * Retrieves all elements from the IDBObjectStore and returns them as an array.
   * @returns A promise that resolves to an array containing all the elements from the IDBObjectStore.
   */
  public getIndexedData(): Promise<Array<any>> {
    return new Promise(async (resolve, reject) => {
      const objectStore = await this._getObjectStore("readonly");
      const elements: Array<any> = [];
      const request = objectStore.openCursor();

      request.onerror = (event) => {
        reject("Erreur lors de la récupération des éléments de l'index");
      };
      request.onsuccess = (event: any) => {
        const cursor: IDBCursor | any = event.target.result;
        if (cursor) {
          elements.push(cursor.value);
          cursor.continue();
        } else {
          resolve(elements);
        }
      };
    });
  }
  /**
   * Clears the entire IndexedDB database by deleting the database.
   */
  public async clearIndexedDB(): Promise<void> {
    await this.openDB();
    indexedDB.deleteDatabase(this.databasename);
  }
  /**
   * Deletes the object with the specified ID from the IDBObjectStore.
   * @param id - The ID of the object to delete.
   */
  public async delete(id: string | number): Promise<void> {
    try {
      const objectStore = await this._getObjectStore("readwrite");
      objectStore.delete(Number(id));
      console.log(objectStore)
      await this.refactorIndexes("[product]");
      const button = document.querySelector(`[ezat-delete="${id}"]`);
      const card = button?.closest("[ezat-item]");
      card?.remove();
    } catch (err) {
      alert(`Error removing file ${id}: ${err}`);
    }
  }
  /**
   * Retrieves the form data at the specified index from the array of object data obtained from `getIndexedData`.
   * @param index - The index of the form data to retrieve.
   * @returns A promise that resolves to the form data at the specified index, or `undefined` if the index is out of range.
   */
  public async _getData(
    index: number,
    dataType?: "form-data" | "classic-object"
  ): Promise<FormData | any | undefined> {
    const objectData = await this.getIndexedData();
    if (index >= 0 && index < objectData.length) {
      const transformer =
        "form-data" === dataType
          ? new FormDataTransformer(objectData[index])
          : objectData[index];
      return "form-data" === dataType ? transformer.transform() : transformer;
    }
  }
  /**
   * Checks if the array of elements obtained from `getIndexedData` is empty.
   * @returns A promise that resolves to `true` if the array is empty, and `false` otherwise.
   */
  public async _isEmpty(): Promise<boolean> {
    const objectStore = await this._getObjectStore("readonly");
    const countRequest = objectStore.count();
    return new Promise((resolve, reject) => {
      countRequest.onsuccess = () => {
        resolve(countRequest.result === 0);
      };
      countRequest.onerror = () => {
        reject(new Error("Failed to count items in IndexedDB"));
      };
    });
  }
  /**
   * Retrieves the length of the object store.
   * This method asynchronously retrieves the length of the object store by performing a count operation.
   * @returns A promise that resolves with the length of the object store.
   */
  public async _length(): Promise<number> {
    const objectStore = await this._getObjectStore("readonly");
    const countRequest = objectStore.count();
    return new Promise((resolve, reject) => {
      countRequest.onsuccess = (e) => {
        resolve(countRequest.result);
      };
      countRequest.onerror = (err) => {
        reject(console.error("Error", err));
      };
    });
  }
  /**
   * Retrieves the IDBObjectStore with the specified access mode from the opened database.
   * @param access - The access mode for the transaction.
   * @returns A promise that resolves to the IDBObjectStore with the specified access mode.
   */
  public async _getObjectStore(
    access: IDBTransactionMode
  ): Promise<IDBObjectStore> {
    const db = await this.openDB();
    const transaction = db.transaction([this.objectstorename], access);
    return transaction.objectStore(this.objectstorename);
  }
  /**
   * Refactors the indexes of the indexed data based on the provided string.
   * This method retrieves the indexed data, checks if it is empty, and then processes each object to update the indexes based on the provided string. The refactored data is then replaced in the object store.
   * @param stringBeforeExistingKey - The string to be used for refactoring the indexes.
   */
  public async refactorIndexes(stringBeforeExistingKey: string) {
    const objectData = await this.getIndexedData();
    const isEmpty = await this._isEmpty();
    const newRefactoredObject: Array<any> = [];
    if (isEmpty) {
      return null;
    }
    objectData.forEach(async (object: any, i: number) => {
      const updatedObject = this.processObject(
        object,
        i,
        stringBeforeExistingKey,
        objectData.length
      );
      newRefactoredObject.push(updatedObject);
    });
    this.replaceIndexedData(newRefactoredObject);
  }
  /**
   * Replaces the indexed data in the object store with the provided data array.
   * This method opens the indexedDB, clears the existing data in the object store, and adds the new data from the provided array.
   * @param object - The array of data to replace the indexed data with.
   */
  protected replaceIndexedData(object: Array<any>) {
    const openDBRequest = indexedDB.open(this.databasename, this.version);
    openDBRequest.onsuccess = (event: any) => {
      const IBDB = event.target.result;
      const result = IBDB as IDBDatabase;
      const transaction = result.transaction(
        [this.objectstorename],
        "readwrite"
      );
      const objetsStore = transaction.objectStore(this.objectstorename);
      const clear = objetsStore.clear();
      clear.onsuccess = function () {
        object.forEach(function (data: any) {
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
      clear.onerror = function (event: any) {
        console.error(
          "Erreur lors de la suppression des données existantes :",
          event.target.error
        );
      };
    };
    openDBRequest.onerror = function (event: any) {
      console.error(
        "Erreur lors de l'ouverture de la base de données :",
        event.target.error
      );
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
  private processObject(
    object: any,
    i: number,
    stringBeforeExistingKey: string,
    length: number
  ) {
    const newObject: any = {};
    let base64String = "";
    let id = 0;
    let _token = "";
    let tokenKey = "";
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const keyParts = key.split(stringBeforeExistingKey);
        const keyPart = keyParts[1];
        _token = hasKeyWithNameSubstring(object, "token");
        if(null !== _token){
          tokenKey = hasKeyWithNameSubstring(object, "token", true);
        }
        if ("@base64String" === key) {
          base64String = object[key];
        }
        if ("@id" === key) {
          id = parseInt(object[key]);
        }
        
        if (keyPart) {
          const findchar = findChar(keyPart, length);
          const char = findchar ?? "0";
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
