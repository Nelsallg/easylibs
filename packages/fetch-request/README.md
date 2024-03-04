# FetchRequest

The `FetchRequest` class is a utility class designed to simplify sending `Fetch` requests in a web application. It provides a simple interface for making HTTP requests and handling actions before and after the request is sent.

![GitHub stars](https://img.shields.io/github/stars/Nelsallg/easylibs?style=social)
![GitHub issues](https://img.shields.io/github/issues/Nelsallg/easylibs)
![npm version](https://img.shields.io/npm/v/@easylibs/fetch-request.svg?style=flat)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![jsDelivr downloads](https://img.shields.io/jsdelivr/npm/hm/@easylibs/fetch-request)

## Installation

Installing `FetchRequest` with npm, yarn or pnpm:

```bash
npm install @easylibs/fetch-request
# Or
yarn add @easylibs/fetch-request
# Or
pnpm add @easylibs/fetch-request
```

Or use direct inclusion with CDN:

```html
<!--MINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/fetch-request@latest/dist/fetch-request.min.js"></script>
<script src="https://unpkg.com/@easylibs/fetch-request@latest/dist/fetch-request.min.js"></script>
<!-- OR UNMINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/fetch-request@latest/dist/fetch-request.js"></script>
<script src="https://unpkg.com/@easylibs/fetch-request@latest/dist/fetch-request.js"></script>
```

## Usage

To use the `FetchRequest` class, create an instance by passing
an options object to the constructor. Here's an example:

```typescript
import FetchRequest from '@easylibs/fetch-request'; // If using the CDN, this line is not necessary.

const request = new FetchRequest({
  uri: 'https://example.com/api/endpoint',
  data:{
    id:1,
    name:"Guy Bertrant",
    email:"guybertrant@gmail.com"
  },
  submitter: document.getElementById('submit-button'),
  options: {
    method: 'POST',
    responseDataType:"json",
    requestDataConvert:"form-data",
    callbacks:{
      onPreFetch(data){
        const newdata = {...data, surname:"MABIALA MABIALA"}
        console.log(data) // {id:1, name:"Guy Bertrant", email:"guybertrant@gmail.com"}
        console.log(newdata) // {id:1, name:"Guy Bertrant", email:"guybertrant@gmail.com", surname:"MABIALA MABIALA"}
        return newdata;
      },
      onSuccess(response) {
          console.log(response)
      },
    }
  }
});

```

## Properties

* `uri:` The URI of the request.
* `data:` The data to be sent with the request.
* `submitter:` The HTML element that triggers the request.
* `options:` An object containing the request options.
* `callbacks:` An object containing callback functions for various stages of the request.
* `onPreFetch`:  Function called before the request is sent. It can modify the data or perform other tasks.
* Example:

```javascript
onPreFetch: (data) => {
  // Modify data before sending
  return { ...data, additionalField: 'value' };
},
```

* `onPostFetch`: Function called after receiving the response. It receives the response data as a parameter.
* Exemple:

```javascript
onPostFetch: (response) => {
  console.log('Post Fetch Response:', response);
},

```

* `onSuccess`: Function called if the request is successful (status 200). It receives the response data as a parameter.
* Example:

```javascript
onSuccess: (response) => {
  console.log('Success Response:', response);
},

```

* `onError`: Function called if the request fails (status other than 200). It receives the error and status code as parameters.
* Example:

```javascript
onError: (error, status) => {
  console.error('Error:', error, 'Status:', status);
},

```

## Advanced Usage

You can further customize the FetchRequest class to handle different data formats, manage headers, and control other aspects of the HTTP request. The class's modular design allows for flexible integration into various web application architectures.
