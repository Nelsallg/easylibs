# ProcessBackend

The `ProcessBackend` class is a JavaScript class that provides methods for persisting data to a server and saving form data to a server. It uses the `FetchRequest` and `ProcessIndexedDB` classes to perform these tasks.

## Usage

To use the `ProcessBackend` class, you first need to create an instance of the class. You can do this by passing in a `ProcessIndexedDB` instance and a URI to the constructor.

```typescript
const database = new ProcessIndexedDB("my-database");
const backend = new ProcessBackend(database, "https://example.com/api/data");
```

Once you have created an instance of the `ProcessBackend` class, you can use the `persist()` method to persist data to the server. The `persist()` method takes two optional parameters: a redirect URL and a callback function. The redirect URL is the URL that the user will be redirected to after the data is persisted. The callback function is called after the data is persisted.

```typescript
backend.persist("/success", (response) => {
  // Do something with the response
});
```

The `save()` method can be used to save form data to the server. The `save()` method takes an object as its only parameter. The object must contain the following properties:

* `submiter`: The submit button element.
* `callback`: The callback function to be called after the data is saved.
* `redirectUrl` (optional): The URL to redirect to after the data is saved.
* `loader` (optional): The loader HTML content to display while saving the data.

```typescript
backend.save({
  submiter: document.querySelector("button[type=submit]"),
  callback: (response) => {
    // Do something with the response
  },
  redirectUrl: "/success",
  loader: "<div>Loading...</div>",
});
```

## Implementation Details

The `ProcessBackend` class uses the `FetchRequest` class to send data to the server. The `FetchRequest` class is a wrapper around the Fetch API that provides a number of helpful features, such as automatic JSON parsing and error handling.

The `ProcessBackend` class also uses the `ProcessIndexedDB` class to store data in the browser's IndexedDB database. The `ProcessIndexedDB` class provides a number of methods for working with IndexedDB
