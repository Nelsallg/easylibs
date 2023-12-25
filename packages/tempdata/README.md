# ProcessIndexedDB

The `ProcessIndexedDB` class provides a set of methods for interacting with an IndexedDB database. It allows you to add, retrieve, delete, and refactor data in the database.

## Installation

To use the `ProcessIndexedDB` class, you can install it from npm:

```bash
npm install process-indexeddb
```

## Usage

Once you have installed the `ProcessIndexedDB` class, you can import it into your project and start using it. Here's an example of how to use the class to add data to an IndexedDB database:

```typescript
import { ProcessIndexedDB } from 'process-indexeddb';

const database = new ProcessIndexedDB('my-database', 'my-object-store');

const data = {
  name: 'John Doe',
  age: 30
};

database.add(data).then((result) => {
  console.log(result);
});
```

This code creates a new IndexedDB database called `my-database` with an object store called `my-object-store`. It then adds the data object to the object store. The `add` method returns a promise that resolves to an object indicating the success of the operation.

## Methods

The `ProcessIndexedDB` class provides the following methods:

* `add(data)`: Adds a new element to the IDBObjectStore with the provided object.
* `getIndexedData()`: Retrieves all elements from the IDBObjectStore and returns them as an array.
* `clearIndexedDB()`: Clears the entire IndexedDB database by deleting the database.
* `delete(id)`: Deletes the object with the specified ID from the IDBObjectStore.
* `_getData(index, dataType)`: Retrieves the form data at the specified index from the array of object data obtained from `getIndexedData`.
* `_isEmpty()`: Checks if the array of elements obtained from `getIndexedData` is empty.
* `_length()`: Retrieves the length of the object store.
* `_getObjectStore(access)`: Retrieves the IDBObjectStore with the specified access mode from the opened database.
* `refactorIndexes(stringBeforeExistingKey)`: Refactors the indexes of the indexed data based on the provided string.
* `replaceIndexedData(object)`: Replaces the indexed data in the object store with the
