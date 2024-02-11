# Easylibs

The `Easylibs` library is a collection of reusable JavaScript modules that can be used to build web applications. The library includes modules for progress form, file uploading, image processing, and data validation and more.

## Installation

To install the `Easylibs` library, run the following command in your terminal:

```bash
npm install easylibs
```

### Usage

Once the library is installed, you can import the modules you need into your JavaScript files. For example, to import the file uploader module, you would use the following code:

```javascript
import { Easylibs } from 'easylibs';
```

The following file uploader module provides a simple way to upload files to a server. To use the module, you first need to create a new instance of the `FileUploader` class. You can then use the `upload` method of the `FileUploader` class to upload a file to a server. The following code shows how to use the file uploader module to upload a file:

```javascript
const fileUploader = new Easylibs.FileUploader();

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

The `Easylibs` library is well-documented, with detailed documentation for each module. You can find the documentation for the library on the [GitHub repository](https://github.com/Nelsallg/Easylibs).

### Contributing

We welcome contributions to the `Easylibs` library. If you would like to contribute, please fork the repository on GitHub and submit a pull request.

### License

The `Easylibs` library is licensed under the ISC license.
