# File Uploader

The `FileUploader` class provides a simple way to upload files to a server. It can be used to upload single or multiple files, and it provides progress feedback for each file.

## Installation

To install the `FileUploader` class, simply add the following line to your `package.json` file:

```bash
npm install libbest/file-uploader
```

## Usage

To use the `FileUploader` class, first create an instance of the class and pass in the input element that you want to use to select files. You can also optionally pass in a second element that you want to use to display the uploaded files.

```typescript
const uploader = new FileUploader(input, fileElement);
```

Once you have created an instance of the `FileUploader` class, you can call the `load` method to start uploading files. The `load` method takes a callback function as its only argument. This callback function will be called once all of the files have been uploaded.

```typescript
uploader.load((files) => {
  // Do something with the uploaded files
});
```

The `files` argument passed to the callback function is an array of objects. Each object in the array represents a single file that was uploaded. The object contains the following properties:

* `name`: The name of the file.
* `base64String`: A base64-encoded string of the file contents.
* `contentType`: The content type of the file.
* `size`: The size of the file in bytes.
* `arrayBuffer`: An `ArrayBuffer` containing the file contents.

## Progress Feedback

The `FileUploader` class provides progress feedback for each file that is uploaded. The progress feedback is displayed in a progress bar that is appended to the `progressContainer` element.

The `progressContainer` element is an optional parameter to the `FileUploader` constructor. If you do not specify a `progressContainer` element, the progress bar will be appended to the body of the document.

## Example

The following code shows how to use the `FileUploader` class to upload a single file:

```html
<input type="file" id="file-input">
<div id="file-display"></div>

<script>
  const input = document.getElementById('file-input');
  const fileElement = document.getElementById('file-display');
  const uploader = new FileUploader(input, fileElement);

  uploader.load((files) => {
    // Process uploaded files
    files.forEach(file => {
      // Access file properties
      console.log('Uploaded File:', file.name);
      console.log('File Size:', file.size);
      // ... other file properties

      // Example: Display uploaded file names
      const fileNameElement = document.createElement('p');
      fileNameElement.textContent = `Uploaded: ${file.name}`;
      fileElement.appendChild(fileNameElement);
    });
  });
</script>
```
