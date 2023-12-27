# File Uploader

The File Uploader class provides a simple and customizable way to upload files in a web application. It supports single and multiple file uploads, and can display progress bars for each file.

## Installation

To install the File Uploader, simply add the following script to your HTML file:

```bash
npm install libbest/file-uploader
```

## Usage

To use the File Uploader, create a new instance of the class and pass in the input element that will receive the files. You can also optionally pass in a file element to display the uploaded files, and a progress container element to display progress bars.

```typescript
const uploader = new FileUploader(input, fileElement, autoEvent, progressContainer);
```

The `autoEvent` parameter determines whether the uploader will automatically start uploading files when they are selected. If set to `false`, you will need to manually call the `load()` method to start the upload.

The `progressContainer` parameter specifies the element that will contain the progress bars. If not specified, the progress bars will be appended to the body of the document.

## Methods

The File Uploader class has the following methods:

* `load()`: Starts the upload process.
* `singleUploading()`: Uploads a single file.
* `multipleUploading()`: Uploads multiple files.
* `progress()`: Displays a progress bar for a file.

## Example

The following code shows how to use the File Uploader to upload a single file:

```typescript
const uploader = new FileUploader(input);

uploader.load((file) => {
  // Do something with the uploaded file
});
```

The following code shows how to use the File Uploader to upload multiple files:

```typescript
const uploader = new FileUploader(input, fileElement, false);

uploader.load((files) => {
  // Do something with the uploaded files
});

uploader.input.addEventListener("change", () => {
  uploader.load();
});
```

## Customization

The File Uploader can be customized by overriding the following methods:

* `progressHTML()`: Generates the HTML for the progress bars.
* `createInput()`: Creates the input element that will receive the files.

## Conclusion

The File Uploader is a simple and customizable way to upload files in a web application.
