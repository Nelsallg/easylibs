# Utils: A Comprehensive JavaScript Utility Library

## Introduction

The `Utils` class is a comprehensive JavaScript utility library that provides a wide range of functions to enhance the development of web applications. This library offers a variety of features, including audio element creation, HTML element manipulation, regular expression generation, path resolution, and more.

## Installation

To use the `Utils.ts` library in your project, you can either directly include the `Utils.ts` file in your HTML document or install it as a module using a package manager like npm.

### Direct Inclusion

To include the `Utils` library directly in your HTML document, simply add the following script tag to the `<head>` section of your document:

```html
<--MINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/utils@0.0.1/dist/utils.min.js"></script>
<script src="https://unpkg.com/@easylibs/utils@0.0.1/dist/utils.min.js"></script>
<-- OR UNINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/utils@0.0.1/dist/utils.js"></script>
<script src="https://unpkg.com/@easylibs/utils@0.0.1/dist/utils.js"></script>
```

### npm,yarn or pnpm Installation

To install the `Utils` library as a module using npm, run the following command in your terminal:

```bash
npm install @easylibs/utils
yarn add @easylibs/utils
pnpm add @easylibs/utils
```

Once installed, you can import the library into your JavaScript files using the following syntax:

```javascript
import Utils from '@easylibs/utils';
```

## Usage

The `Utils` library provides a wide range of methods that can be used in various scenarios. Here are some examples of how you can use the library:

### Creating Audio Elements

The `setAudio()` function allows you to create audio elements with a specified audio path and optional CSS class. Here's an example of how to use it:

```javascript
const audio = Utils.setAudio('path/to/audio.mp3', 'my-audio-class');
document.body.appendChild(audio);
```

### Manipulating HTML Elements

The `textToHTMLElement()` function converts a string of HTML code into an HTML element. It also provides options to return the first child element or all children elements of the created element. Here's an example of how to use it:

```javascript
const divElement = Utils.textToHTMLElement('<div>Hello World!</div>');
document.body.appendChild(divElement);
```

### Generating Regular Expressions

The `getRegexp()` function generates regular expressions based on a specified type. It supports various types of regular expressions, including email, phone number, strong password, and more. Here's an example of how to use it:

let's test a password which must contain at least one capital letter, a number, a special character and at least 8 characters.

```javascript
const strongPasswordRegex = Utils.getRegexp('strong-password');
strongPasswordRegex.test('1234') // return false
strongPasswordRegex.test('Azerty@1234') // return true
```
