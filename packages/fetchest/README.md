# FetchRequest

The `FetchRequest` class is a utility class designed to simplify sending Fetch requests in a web application. It provides a simple interface for making HTTP requests and handling actions before and after the request is sent.

## Installation

To install the `FetchRequest` class, you can use npm:

```bash
npm install libbest/fetch-request
```

## Usage

To use the `FetchRequest` class, you first need to create an instance of the class and pass in an options object. The options object can contain the following properties:

* `uri`: The URI of the request.
* `data`: The data to be sent with the request.
* `submiter`: The HTML element that triggers the request.
* `postFetchAction`: A function to be called after the request has been sent.
* `preFetchAction`: A function to be called before the request is sent.
* `onSuccess`: A function to be called if the request is successful.
* `onError`: A function to be called if the request fails.
* `options`: An object containing additional options for the request.

The following code shows how to create an instance of the `FetchRequest` class and send a request:

```typescript
import { FetchRequest } from 'libbest/fetch-request';

const options = {
  uri: 'https://example.com/api/endpoint',
  data: {
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  submiter: document.getElementById('submit-button'),
  postFetchAction: (response) => {
    console.log(response);
  },
};

const fetchRequest = new FetchRequest(options);
```

## Methods

The `FetchRequest` class has the following methods:

* `submitForm()`: This method sends the request.
* `preFetch()`: This method is called before the request is sent.
* `fetchData()`: This method sends the request and handles the response.
* `postFetch()`: This method is called after the request has been sent.

## Properties

The `FetchRequest` class has the following properties:

* `response`: The response from the request.

## Example

The following code shows how to use the `FetchRequest` class to send a request to an API and display the response in a web page:

```html
<!DOCTYPE html>
<html>
<head>
  <title>FetchRequest Example</title>
</head>
<body>

<button id="submit-button">Send Request</button>
<div id="response-container"></div>

<script type="module">
  import { FetchRequest } from 'libbest/fetch-request';

  const options = {
    uri: 'https://example.com/api/endpoint',
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    submiter: document.getElementById('submit-button'),
    postFetchAction: (response) => {
      // Display response in the 'response-container'
      const responseContainer = document.getElementById('response-container');
      responseContainer.innerHTML = JSON.stringify(response);
    },
  };

  const fetchRequest = new FetchRequest(options);
</script>

</body>
</html>
```
