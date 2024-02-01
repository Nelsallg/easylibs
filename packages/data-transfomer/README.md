# Interfaces for Data Transformation

This document describes a set of interfaces for transforming data between various formats, such as Blob, Base64, File, FormData, and Uint8Array.

## Table of Contents

- [Blob Transformer Interface](#blob-transformer-interface)
- [FormData Transformer Interface](#formdata-transformer-interface)
- [Base64 Transformer Interface](#base64-transformer-interface)
- [File Transformer Interface](#file-transformer-interface)

## Blob Transformer Interface

The `IBlobTransformer` interface provides methods for transforming data into Blob format.

### Methods for Blob Transformation

#### `fromUint8Array(uint8Array: Uint8Array, contentType?: string): Blob`

Converts a Uint8Array to a Blob object.

#### `fromFile(file: File): Blob`

Creates a Blob from a File object.

#### `fromBase64String(base64String: string, contentType?: string): Blob`

Creates a Blob from a Base64-encoded string.

## FormData Transformer Interface

The `IFormDataTransformer` interface offers methods to transform data into FormData and revert FormData to JavaScript objects.

### Methods for FormData Transformation

#### `transform(): FormData`

Transforms data into a FormData object.

#### `reverse(): object`

Reverts a FormData object back to a JavaScript object.

#### `option(option: string): object | FormData | undefined`

Applies specific transformation options: 'onlyobject', 'onlyformdata', 'auto', returning the resulting object or FormData based on the provided option.

## Base64 Transformer Interface

The `IBase64Transformer` interface deals with transformations between Base64 encoding and other data representations.

### Methods for Base64 Transformation

#### `toFile(base64String: string, fileName?: string): File`

Converts a Base64 string to a File object.

#### `fromFile(file: File): Promise<any>`

Converts a File object to a Base64-encoded string.

#### `toUint8Array(base64String: string): Uint8Array`

Converts a Base64 string to a Uint8Array.

#### `fromUint8Array(uint8Array: Uint8Array): string`

Converts a Uint8Array to a Base64-encoded string.

#### `fromBlob(blob: Blob): Promise<string | ArrayBuffer>`

Converts a Blob object to a Base64-encoded string or an ArrayBuffer.

## File Transformer Interface

The `IFileTransformer` interface provides methods specifically for File transformations.

### Methods for File Transformation

#### `toBase64(file: File): Promise<unknown>`

Converts a File to a Base64 string.

#### `fromBase64String(base64String: string, contentType?: string | null, fileName?: string | null, formatString?: boolean): File`

Converts a Base64 string to a File object.

#### `fromUint8Array(uint8Array: Uint8Array, mimeType: string, fileName: string): File`

Converts a Uint8Array to a File object with specified MIME type and filename.

---

Feel free to supplement this documentation with usage examples, code samples, or any additional details relevant to the usage and implementation of these interfaces.
