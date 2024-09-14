# TempDataBackend

The `TempDataBackend` class is a JavaScript class that provides methods for persisting data to a server and saving form data to a server. It uses the `FetchRequest` and `TempData` classes to perform these tasks.

![GitHub stars](https://img.shields.io/github/stars/Nelsallg/easylibs?style=social)
![GitHub issues](https://img.shields.io/github/issues/Nelsallg/easylibs)
![npm version](https://img.shields.io/npm/v/@easylibs/tempdata-backend.svg?style=flat)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![jsDelivr downloads](https://img.shields.io/jsdelivr/npm/hm/@easylibs/tempdata-backend)

## Usage

To use the `TempDataBackend` class, you first need to create an instance of the class. You can do this by passing in a `TempData` instance and a URI to the constructor.

```typescript
const database = new TempData("my-database");
const backend = new TempDataBackend(database, "https://example.com/api/data");
```

Once you have created an instance of the `TempDataBackend` class, you can use the `persist()` method to persist data to the server. The `persist()` method takes two optional parameters: a redirect URL and a callback function. The redirect URL is the URL that the user will be redirected to after the data is persisted. The callback function is called after the data is persisted.

```typescript
backend.persist({
  onPostFetch: (response: any, status:number) => {
    // Do something
  },
  onPreFetch: (data: any) => {
    // Do something
  },
  onSuccess: (response: any) => {
    // Do something
  },
  onError: (error: Error, status: number) => {
    // Do something
  }
});
```

The `save()` method can be used to save form data to the server. The `save()` method takes an object as its only parameter. The object must contain the following properties:

* `submiter`: The submit button element.
* `callbacks`: an object containing the `onPreFetch`, `onPostFetch`, `onSuccess` and `onError` callbacks
* `loader` (optional): The loader HTML content to display while saving the data.

```typescript
const submitter = document.querySelector("button[type=submit]");
const loader = "<div>Loading...</div>";
backend.save(submitter, loader {
  onPostFetch: (response: any, status:number) => {
    // Do something
  },
  onPreFetch: (data: any) => {
    // Do something
  },
  onSuccess: (response: any) => {
    // Do something
  },
  onError: (error: Error, status: number) => {
    // Do something
  }
});
```

## Implementation Details

The `TempDataBackend` class uses the `FetchRequest` class to send data to the server. The `FetchRequest` class is a wrapper around the Fetch API that provides a number of helpful features, such as automatic JSON parsing and error handling.

The `TempDataBackend` class also uses the `TempData` class to store data in the browser's IndexedDB database. The `TempData` class provides a number of methods for working with IndexedDB
