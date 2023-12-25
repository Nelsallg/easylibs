# File Transformer

This library provides a set of interfaces and classes for transforming files, blobs, and form data. It includes the following features:

- Convert a Uint8Array to a Blob
- Convert a File to a Blob
- Convert a base64 string to a Blob
- Transform data into a FormData object
- Revert a FormData object into a JavaScript object
- Convert a base64 string to a File
- Convert a File to a base64 string
- Convert a base64 string to a Uint8Array
- Convert a Uint8Array to a base64 string
- Convert a Blob to a base64 string or ArrayBuffer
- Convert a File to a base64 string
- Convert a base64 string to a File
- Convert a Uint8Array to a File

## Installation

To install the library, run the following command:

```bash
npm install libbest/file-transformer
```

## Usage

### Blob Transformer

The `BlobTransformer` interface provides methods for converting Uint8Arrays, Files, and base64 strings to Blobs.

To convert a Uint8Array to a Blob, use the `fromUint8Array()` method:

```typescript
const blobTransformer = new BlobTransformer();
const blob = blobTransformer.fromUint8Array(uint8Array);
```

To convert a File to a Blob, use the `fromFile()` method:

```typescript
const blobTransformer = new BlobTransformer();
const blob = blobTransformer.fromFile(file);
```

To convert a base64 string to a Blob, use the `fromBase64String()` method:

```typescript
const blobTransformer = new BlobTransformer();
const blob = blobTransformer.fromBase64String(base64String);
```

### FormData Transformer

The `FormDataTransformer` interface provides methods for transforming data into a FormData object and reverting a FormData object into a JavaScript object.

To transform data into a FormData object, use the `transform()` method:

```typescript
const formDataTransformer = new FormDataTransformer();
const formData = formDataTransformer.transform();
```

To revert a FormData object into a JavaScript object, use the `reverse()` method:

```typescript
const formDataTransformer = new FormDataTransformer();
const object = formDataTransformer.reverse();
```

The `FormDataTransformer` interface also provides an `option()` method that allows you to specify a transformation option. The
