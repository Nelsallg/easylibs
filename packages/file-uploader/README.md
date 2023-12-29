# File Uploader

The File Uploader class provides a simple and customizable way to upload files in a web application. It supports single and multiple file uploads, and can display progress bars for each file.

## Installation

To install the File Uploader, simply run this promp in your powershell or cmd:

```bash
npm install @easylibs/file-uploader
# Or
yarn add @easylibs/file-uploader
# Or
pnpm add @easylibs/file-uploader
```

Using cdn

```html
<--MINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/file-uploader@0.0.2/dist/file-uploader.min.js"></script>
<script src="https://unpkg.com/@easylibs/file-uploader@0.0.2/dist/file-uploader.min.js"></script>
<-- OR UNMINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/file-uploader@0.0.2/dist/file-uploader.js"></script>
<script src="https://unpkg.com/@easylibs/file-uploader@0.0.2/dist/file-uploader.js"></script>
```

## Usage

To use the File Uploader, import class, create a new instance and pass in the input element that will receive the files. You can also optionally pass in a file element to display the uploaded files, and a progress container element to display progress bars.

```typescript
import FileUploader from "@easylibs/file-uploader";
const uploader = new FileUploader(input, fileElement, progressContainer);
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
const input = document.querySelector('input[type="file"]');
const fileElement = document.querySelector('img');
const progressContainer = document.querySelector('.progress-container');

const uploader = new FileUploader(input, fileElement, progressContainer);

uploader.load((file) => {
   console.log(`File ${file.name} was loaded`);
});
```

The following code shows how to use the File Uploader to upload multiple files:

```typescript
const input = document.querySelector('input[type="file"]');
const fileElement = document.querySelector('img');
const progressContainer = document.querySelector('.progress-container');

const uploader = new FileUploader(input, fileElement, progressContainer);

uploader.load((files) => {
  files.foreach((file)=>{
    console.log(`File ${file.name} was loaded`);
  })
});
```

## Customization

The File Uploader can be customized by overriding the following methods:

* `progressHTML()`: Generates the HTML for the progress bars.
* `createInput()`: Creates the input element that will receive the files.

## Conclusion

The File Uploader is a simple and customizable way to upload files in a web application.
