# FetchRequest

The `FetchRequest` class is a utility class designed to simplify sending `Fetch` requests in a web application. It provides a simple interface for making HTTP requests and handling actions before and after the request is sent.

## Installation

To install the `FetchRequest` class, you can use npm:

```bash
npm install @easylibs/fetch-request
```

## Usage

To use the `FetchRequest` class, you first need to create an instance of the class. You can do this by passing an options object to the constructor. The options object can contain the following properties:

* `uri`: The URI of the request.
* `data`: The data to be sent with the request.
* `submiter`: The HTML element that triggers the request.
* `options`: An object containing the request options.
* `onPreFetch`: A function to be called before the request is sent.
* `onPostFetch`: A function to be called after the request is sent.
* `onSuccess`: A function to be called if the request is successful.
* `onError`: A function to be called if the request fails.
* `onProgressUpdate`: A function to be called if the request progress is updated.

The following code shows how to create an instance of the `FetchRequest` class:

```typescript
import FetchRequest from '@easylibs/fetch-request';

const request = new FetchRequest({
  uri: 'https://example.com/api/endpoint',
  data: {
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  submiter: document.getElementById('submit-button'),
  options: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  },
  onPreFetch: () => {
    // Do something before the request is sent.
  },
  onPostFetch: () => {
    // Do something after the request is sent.
  },
  onSuccess: (response) => {
    // Do something if the request is successful.
  },
  onError: (error) => {
    // Do something if the request fails.
  },
  onProgressUpdate: (progressEvent) => {
    // Do something if the request progress is updated.
  },
});
```
