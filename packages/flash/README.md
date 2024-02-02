# Flash: A JavaScript Library for Creating Flash Messages

![GitHub stars](https://img.shields.io/github/stars/Nelsallg/easylibs?style=social)
![GitHub issues](https://img.shields.io/github/issues/Nelsallg/easylibs)
![npm version](https://img.shields.io/npm/flash@latest/@easylibs/flash.svg?style=flat)
![jsDelivr downloads](https://img.shields.io/jsdelivr/npm/hm/@easylibs/flash)

## Introduction

Flash is a lightweight, easy-to-use library for displaying Flash messages in your web application. It provides a simple API for creating and displaying Flash messages, and it comes with a variety of built-in templates that you can use to customize the look and feel of your messages.

## Installation

To install Flash, simply add the following script tag to your HTML document:

```html
<!--MINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/flash@latest/dist/flash.min.js"></script>
<script src="https://unpkg.com/@easylibs/flash@latest/dist/flash.min.js"></script>
<!-- OR UNMINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/flash@latest/dist/flash.js"></script>
<script src="https://unpkg.com/@easylibs/flash@latest/dist/flash.js"></script>
```

Or using npm, pnpm or yarn:

```bash
npm install @easylibs/flash
# OR
pnpm add @easylibs/flash
# OR
yarn add @easylibs/flash
```

## Usage

To use Flash, simply call the `Flash.add()` method and pass in the options for your Flash message. The following code shows how to create a simple Flash message:

```javascript
import Flash from '@easylibs/flash';

Flash.add({
  message: 'Hello, world!',
  type: 'success'
});
```

This will create a Flash message with the text "Hello, world!" and display it in a green box.

You can also pass in additional options to the `Flash.add()` method to customize the look and feel of your Flash message. The following table lists all of the available options:

| Option | Description |
|---|---|
| message | The text of the Flash message. |
| type | The type of Flash message. Can be one of the following: `success`, `danger`, `warning`, or `info`. |
| duration | The duration of the Flash message in milliseconds. |
| title | The title of the Flash message. |
| closeButton | Whether or not to show a close button on the Flash message. |
| container | The container in which to display the Flash message. |
| icon | Whether or not to show an icon on the Flash message. |
| tone | Whether or not to use a tone on the Flash message. |

## Customizing Flash Messages

You can customize the appearance of flash messages by overriding the default CSS styles. The default CSS styles are located in the `flash.css` file.

## Templates

Flash comes with a variety of built-in templates that you can use to customize the look and feel of your Flash messages. To use a template, simply set the template number to the `TEMPLATE` variable of the `Flash` class. The following code shows how to use the `default` template:

```javascript
import Flash from '@easylibs/flash';

Flash.TEMPLATE = 1;
Flash.add({
  message: 'Hello, world!',
  type: 'success',
  duration: 5000
});
```

This will create a Flash message with the text "Hello, world!" and display it in a green box with a close button.
You can also create your own custom templates. To do

`**Custom templates**`

```javascript
import Flash from '@easylibs/flash';

Flash.TEMPLATE = `<div class="flash">
        <span>{{title}}</span>
        <div>{{message}}</div>
        <div _close_>Close</div>
</div>`;

Flash.add({
  message: 'Hi, i am your flash message',
  type: 'info',
  duration: 5000,
  title: 'Alert !',
  icon: true,
  closeButton: true
});
```
