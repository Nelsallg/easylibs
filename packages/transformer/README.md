# Transformer: A Comprehensive Data Transformation Library

## Introduction

The Transformer library provides a comprehensive set of tools for transforming data between various formats, including base64 strings, Uint8Arrays, Blobs, and File objects. It also includes a FormDataTransformer class for converting between FormData objects and JavaScript objects.

It includes the following features:

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
npm install @easylibs/transformer
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

### Base64Transformer

The Base64Transformer class provides methods for converting between base64 strings and other file formats.

#### toFile()

The `toFile()` method converts a base64 string into a File object.

```typescript
const base64String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

const file = new Transformer.Base64Transformer().toFile(base64String);
```

#### fromFile()

The `fromFile()` method converts a File object into a base64 string.

```typescript
const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });

const base64String = await new Transformer.Base64Transformer().fromFile(file);
```

#### toUint8Array()

The `toUint8Array()` method converts a base64 string into a Uint8Array.

```typescript
const base64String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

const uint8Array = new Transformer.Base64Transformer().toUint8Array(base64String);
```

#### fromUint8Array()

The `fromUint8Array()` method converts a Uint8Array into a base64 string.

```typescript
const uint8Array = new Uint8Array
```
