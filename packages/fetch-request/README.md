# FetchRequest

The `FetchRequest` class is a utility class designed to simplify sending `Fetch` requests in a web application. It provides a simple interface for making HTTP requests and handling actions before and after the request is sent.

## Installation

Installing `FetchRequest` with npm, yarn or pnpm:

```bash
npm install @easylibs/fetch-request
yarn add @easylibs/fetch-request
pnpm add @easylibs/fetch-request
```

Or use direct inclusion with cdn

```html
<--MINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/fetch-request@0.0.9/dist/fetch-request.min.js"></script>
<script src="https://unpkg.com/@easylibs/fetch-request@0.0.9/dist/fetch-request.min.js"></script>
<-- OR UNMINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/fetch-request@0.0.9/dist/fetch-request.js"></script>
<script src="https://unpkg.com/@easylibs/fetch-request@0.0.9/dist/fetch-request.js"></script>
```

## Usage

To use the `FetchRequest` class, you first need to create an instance of the class. You can do this by passing an options object to the constructor.

The following code shows how to create an instance of the `FetchRequest` class:

```typescript
import FetchRequest from '@easylibs/fetch-request'; // if you use the cdn, this line is not necessary

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
    acceptDataFormat:"form-data"
  }
})
```

## Properties

* `uri`: The URI of the request.

* `data`: The data to be sent with the request.

* `submiter`: The HTML element that triggers the request.

* `options`: An object containing the request options.

|  Options                |                                     type                                  |
|-------------------------|---------------------------------------------------------------------------|
|  method                 |  `'GET' \| 'POST'`                                                        |
|                         |                                                                           |
|  headers                |  `Object`                                                                 |
|                         |                                                                           |
|  body                   |  `any`                                                                    |
|                         |                                                                           |
|  credentials            |  `"omit" \| "same-origin"`                                                |
|                         |                                                                           |
|  mode                   |  `"cors" \| "no-cors" \|"same-origin"`                                    |
|                         |                                                                           |
|  cache                  |  `"default" \| "reload" \  "no-cache" \|"force-cache" \| "only-if-cached"`|
|                         |                                                                           |
|  timeOut                |  `number`                                                                 |
|                         |                                                                           |
|  fetchOptions           |  `RequestInit`                                                            |
|                         |                                                                           |
|  isBinaryFileDownload   |  `boolean`                                                                |
|                         |                                                                           |
|  contentType            |  `string`                                                                 |
|                         |                                                                           |
|  acceptDataFormat       |   `"form-data" \| "classic-object" \| "array"`                            |
|                         |                                                                           |

* `onPreFetch`: A function to be called before the request is sent.

```javascript
onPreFetch(that){}
```

* Note: By default, the value of the `that` parameter is set from the value of the `data` key.
* If a value is returned in the `onPreFetch` method, it will replace the 'data' key's value.

* Example

```javascript
const request = new FetchRequest({
  uri: 'https://example.com/api/endpoint',
  onPreFetch: () => {
    return {
      name: 'kelly Ondo',
      email: 'kellyondo@gmail.com'
    };
  },
  data: , // That will be {name: 'kelly Ondo', email: 'kellyondo@gmail.com'}
});
```

In this way, the `onPreFetch()` method can be used either to define the data to be sent to the server —in this case, the `data` key is no longer necessary— or it can be used to perform other tasks before sending the data, or both.

* `onPostFetch`: This method returns the response from the server

```javascript
onPostFetch(response){}
```

* `onSuccess`: A function which returns the response from the server in case of success of the request with a status 200.

```javascript
onSuccess(response){}
```

* `onError`: A function that returns a error and the status of error in the event of a request failure with a status other than 200.

```javascript
onError(error, status){}
```
