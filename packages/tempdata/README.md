# TempData

`TempData` is a JavaScript utility class that allows you to store data temporarily in the browser using indexed databases. This approach is very convenient, for example, if you want to create temporary data to submit to the server later, or if you plan to send multiple data to the server at once. In this case, you can save new data one by one and then submit them together. This way, the data can be retained even after closing your application.

![GitHub stars](https://img.shields.io/github/stars/Nelsallg/easylibs?style=social)
![GitHub issues](https://img.shields.io/github/issues/Nelsallg/easylibs)
![npm version](https://img.shields.io/npm/v/@easylibs/tempdata.svg?style=flat)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![jsDelivr downloads](https://img.shields.io/jsdelivr/npm/hm/@easylibs/tempdata)

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
const database = new TempData('my_database',[
    { osname:"products",options:{autoIncrement:true} },
    { osname:"customers", options:{autoIncrement:true} }
]);
```

## Adding Data

This code creates a new `TempData` database called `my-database` with object stores called `products, customers` respectively. It then adds the data objects to the object stores. The `add` method returns a promise that resolves to an object indicating the success of the operation.

```javascript
const products = [

    {
        "name": "Natural wood chair from Gabon",
        "price": 150600,
        "color":"undefined",
        "description": "Made by N'KOK",
        "category":"fournitures",
        "seller": "Evangzat"
      },
      {
        "name": "Samsung C3050",
        "price": 3200,
        "color":"black",
        "description": "People from 2005 don't kwnow It",
        "category":"Smart phone",
        "seller": "Elise Service"
      },
      {
          "name": "MSI All Of One Desktop",
          "price": 475000,
          "color":"undefined",
          "description": "Very expensive for you",
          "category":"Desktop",
          "seller": "Elise Service"
      }
];
const customers = [
   {
        "firstname":"Guy Bertrant",
        "lastname":"Mabiala Mabiala",
        "email": "guybertrant@gmail.com",
        "phone": "+24174421200",
        "sex":"male",
        "nationality":"Gabonese"
    },
    {
        "firstname":"Fatima",
        "lastname":"Diom",
        "email": "fatima2@gmail.com",
        "phone": "+221771234567",
        "sex":"female",
        "nationality":"Senegalese"
    },
    {
        "firstname":"Cynthia Lesly",
        "lastname":"Fiangwa",
        "email": "cynthiafiangwa@gmail.com",
        "phone": "+237664584741",
        "sex":"female",
        "nationality":"Cameroon"
    },
    {
      "firstname": "Marina",
      "lastname": "Moulouma Moussavou",
      "phone": "+241066001736",
      "email": "marina.ms@gmail.com",
      "sex": "female",
      "nationality":"Gabonese"
    }
]
tempdata.add(customers,"customers");
tempdata.add(products,"products");
```

The `add` method returns a promise that resolves to an object indicating the success of the operation. The object has the following properties:

* `success`: A boolean value indicating whether the operation was successful.
* `elementObject`: The object that was added to the database.

This code creates a new TempData database called `my-database` with an object store called `customers` and `products`. It then adds the data object to the object store. The `add` method returns a promise that resolves to an object indicating the success of the operation.

If you do not specify the object store in the `add` method, `TempData` will consider that it is the one specified by default when creating the instance, assuming that you had defined it. Otherwise an error will be thrown.

## Reading Data

### simple reading

```javascript
database.read().then((data)=>{
    console.log(data) // retrieve all products
})
database.readOne(6).then((data)=>{
    console.log(data)
}) // retrieve customer to index 6
```

### reading by criteria

```javascript
database.readBy({sex:"female",nationality:"Senegalese"}).then((data)=>{
    console.log(data)
})
database.readOneBy({color:"undefined"}).then((data)=>{
    console.log(data)
})
```

## Deleting Data

To delete data from the database, you can use the `deleteAll`, `deleteOne`or `deleteOS` methods

```typescript
tempdata.deleteDB() // delete database
database.deleteOne(1,"customers")  // delete one element at index 1 from "customers'
tempdata.deleteOS('products') // delete object store "products'
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
* `isItEmpty()`: Checks if databse is empty.
* `length()`: Retrieves the length of the object store.
* `isItExpired()`: Check expriation date of database
* `getObjectStore(access)`: Retrieves the IDBObjectStore with the specified access mode from the opened database.
* `refactorIndexes(refactoringShortKeyString)`: Refactors the indexes of the indexed data based on the provided string.
