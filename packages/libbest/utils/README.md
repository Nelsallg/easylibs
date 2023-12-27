# ProcessIndexedDB

The `ProcessIndexedDB` class provides a set of methods for interacting with an IndexedDB database. It allows you to add, retrieve, delete, and refactor data in the database.

## Installation

To use the `ProcessIndexedDB` class, you can install it from npm:

```bash
npm install libbest/process-indexeddb
```

## Getting Started

To use the `ProcessIndexedDB` class, you first need to create an instance of the class. You can do this by providing the name of the database, the name of the object store, and the version of the database.

```typescript
const processIndexedDB = new ProcessIndexedDB('my-database', 'my-object-store', 1);
```

## Adding Data

To add data to the database, you can use the `add` method. This method takes an object as an argument and adds it to the object store.

```typescript
const data = {
  name: 'John Doe',
  age: 30
};

processIndexedDB.add(data).then((result) => {
  console.log(result);
});
```

The `add` method returns a promise that resolves to an object indicating the success of the operation. The object has the following properties:

* `success`: A boolean value indicating whether the operation was successful.
* `elementObject`: The object that was added to the database.

## Retrieving Data

To retrieve data from the database, you can use the `getIndexedData` method. This method returns a promise that resolves to an array containing all the elements from the object store.

```typescript
processIndexedDB.getIndexedData().then((data) => {
  console.log(data);
});
```

The `getIndexedData` method can also be used to retrieve a specific element from the database. To do this, you can pass the ID of the element as an argument to the method.

```typescript
processIndexedDB.getIndexedData(1).then((data) => {
  console.log(data);
});
```

This code creates a new IndexedDB database called `my-database` with an object store called `my-object-store`. It then adds the data object to the object store. The `add` method returns a promise that resolves to an object indicating the success of the operation.

## Deleting Data

To delete data from the database, you can use the `delete` method. This method takes the ID of the element to be deleted as an argument.

```typescript
processIndexedDB.delete(1).then(() => {
  console.log('Element deleted');
});
```

## Refactoring Indexes

The `refactorIndexes` method can be used to refactor the indexes of the indexed data based on a provided string. This

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
