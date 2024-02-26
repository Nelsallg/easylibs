# TempData

`TempData` is a JavaScript utility class that allows you to store data temporarily in the browser using indexed databases. This approach is very convenient, for example, if you want to create temporary data to submit to the server later, or if you plan to send multiple data to the server at once. In this case, you can save new data one by one and then submit them together. This way, the data can be retained even after closing your application.

## Installation

To use the `TempData` class, you can install it from npm:

```bash
npm install @easylibs/tempdata
# Or
yarn add @easylibs/tempdata
# Or
pnpm add @easylibs/tempdata
```

Or use direct inclusion with CDN:

```html
<!--MINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/tempdata@latest/dist/tempdata.min.js"></script>
<script src="https://unpkg.com/@easylibs/tempdata@latest/dist/tempdata.min.js"></script>
<!-- OR UNMINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/tempdata@latest/dist/tempdata.js"></script>
<script src="https://unpkg.com/@easylibs/tempdata@latest/dist/tempdata.js"></script>
```

## Getting Started

To use the `TempData` class, you first need to create an instance of the class. You can do this by providing the name of the database, the name of the object store, and the version of the database.

```javascript
const Tempaata = new TempData('my-database', 'my-object-store');
tempdata.read().then((data)=>{
    console.log(data)
}) //read all elements
tempdata.readOne(1).then((data)=>{
    console.log(data)
}) //read element at index 1
```

## Adding Data

To add data to the database, you can use the `add` method. This method takes an object as an argument and adds it to the object store.

```javascript
const tempdata = new TempData("my-database","my-object-store");
const data1 = {
  firstname: 'Sarah Elise',
  lastname: 'OBONE MVOU',
  age: 30,
  job: 'journalist',
  country:'Gabon'
};
const data2 = {
  firstname: 'Guy Bertrant',
  lastname: 'MABIALA MABIALA',
  age: 25,
  job: 'taxi driver',
  country:'RDC'
};
tempdata.add(data1); // Adds one data object or...
tempdata.add([data1, data2]); // Adds both objects to the database in a single transaction
```

The `add` method returns a promise that resolves to an object indicating the success of the operation. The object has the following properties:

* `success`: A boolean value indicating whether the operation was successful.
* `elementObject`: The object that was added to the database.

This code creates a new TempData database called `my-database` with an object store called `my-object-store`. It then adds the data object to the object store. The `add` method returns a promise that resolves to an object indicating the success of the operation.

## Deleting Data

To delete data from the database, you can use the `deleteAll`, `deleteOne`or `deleteOS` methods

```typescript
const tempdata = new TempData("my-database","my-object-store");
tempdata.deleteAll() // delete One element from "my-object-store'
tempdata.deleteOne() // delete One element from "my-object-store'
tempdata.deleteOS('my-object-store') // delete "my-object-store'
```

## Refactoring Indexes

The `refactorIndexes` method can be used to refactor the indexes of the indexed data.

## Methods

The `TempData` class provides the following methods:

* `add(data)`: Adds one or more items to IDBObjectStore with the provided object. The data can be an object or an array of objects.
* `readOne(i,type)`: Retrieve the element at the specified index.
* `readOneBy(criteria,type)`: Retrieve the element at the specified index according to the criteria.
* `read()`: Recovers all elements.
* `readBy(criteria)`: Recovers all elements that respect the critaria.
* `update(id,data)`: Updates an item.
* `deleteOne(id,refactoringShortKeyString,callback)`: Deletes the object with the specified ID from the IDBObjectStore.
* `deleteOS`: Delete the `ObjectStore`
* `deleteAll()`: Removes every record stored in the database.
* `_isEmpty()`: Checks if databse is empty.
* `_length()`: Retrieves the length of the object store.
* `_getObjectStore(access)`: Retrieves the IDBObjectStore with the specified access mode from the opened database.
* `refactorIndexes(refactoringShortKeyString)`: Refactors the indexes of the indexed data based on the provided string.
