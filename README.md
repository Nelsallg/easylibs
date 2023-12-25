## Evangzat.libs

### Introduction

The `Evangzat.libs` library is a collection of reusable JavaScript modules that can be used to build web applications. The library includes modules for file uploading, image processing, and data validation.

### Installation

To install the `Evangzat.libs` library, run the following command in your terminal:

```bash
npm install evangzat.libs
```

### Usage

Once the library is installed, you can import the modules you need into your JavaScript files. For example, to import the file uploader module, you would use the following code:

```javascript
import { FileUploader } from 'evangzat.libs';
```

The file uploader module provides a simple way to upload files to a server. To use the module, you first need to create a new instance of the `FileUploader` class. You can then use the `upload` method of the `FileUploader` class to upload a file to a server. The following code shows how to use the file uploader module to upload a file:

```javascript
const fileUploader = new FileUploader();

fileUploader.upload('/upload', {
  file: myFile,
  onProgress: (progress) => {
    // Handle progress updates
  },
  onSuccess: (response) => {
    // Handle successful upload
  },
  onError: (error) => {
    // Handle errors
  }
});
```

### Documentation

The `Evangzat.libs` library is well-documented, with detailed documentation for each module. You can find the documentation for the library on the [GitHub repository](https://github.com/Nelsallg/Evangzat.libs).

### Contributing

We welcome contributions to the `Evangzat.libs` library. If you would like to contribute, please fork the repository on GitHub and submit a pull request.

### License

The `Evangzat.libs` library is licensed under the ISC license.
