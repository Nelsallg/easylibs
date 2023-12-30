# Flash: A JavaScript Library for Creating Flash Messages

## Introduction

Flash is a JavaScript library that allows you to easily create and display flash messages on your web pages. Flash messages are temporary notifications that can be used to display important information to your users, such as error messages, success messages, or announcements.

## Installation

To install Flash, simply add the following script tag to your HTML document:

```html
<--MINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/flash@0.0.3/dist/flash.min.js"></script>
<script src="https://unpkg.com/@easylibs/flash@0.0.3/dist/flash.min.js"></script>
<-- OR UNMINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/flash@0.0.3/dist/flash.js"></script>
<script src="https://unpkg.com/@easylibs/flash@0.0.3/dist/flash.js"></script>
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

To use Flash, simply create a new instance of the `Flash` class and call the `addFlash()` method. The `addFlash()` method takes an object of options as its argument. The following options are available:

* `message`: The message to display in the flash message.
* `type`: The type of flash message. This can be one of the following values: `success`, `error`, `warning`, or `info`.
* `duration`: The duration of the flash message in milliseconds.
* `title`: The title of the flash message.
* `icon`: The icon to display in the flash message.
* `closeButton`: A boolean value indicating whether or not to display a close button on the flash message.

For example, the following code creates a success flash message with a duration of 5 seconds:

```javascript
const flash = new Flash();
flash.addFlash({
  message: 'Your message here',
  type: 'success',
  duration: 5000
});
```

## Customizing Flash Messages

You can customize the appearance of flash messages by overriding the default CSS styles. The default CSS styles are located in the `flash.css` file.

## Creating Custom Flash Messages

In addition to using the `addFlash()` method to create flash messages, you can also create your own custom flash messages by extending the `Flash` class. To do this, simply create a new class that extends the `Flash` class and override the `flashHTMLModel()` method. The `flashHTMLModel()` method returns the HTML code for the flash message.

For example, the following code creates a custom flash message that displays a close button:

```javascript
// Assuming you have imported the Flash class from '@easylibs/flash'
import Flash from '@easylibs/flash';

/**
 * CustomFlash class extends the Flash class to create custom flash messages.
 */
class CustomFlash extends Flash {
  /**
   * Overrides the flashHTMLModel() method to customize the HTML code for the flash message.
   * @param {Object} properties - Flash message properties.
   * @returns {string} HTML code for the flash message.
   */
  flashHTMLModel(properties) {
    // Customize the HTML structure based on your requirements
    return `
      <div class="flash-box">
        <span class="flash-header">
          <div id="flash-close-button">Close</div>
        </span>
        <div class="flash-content">
          <span class="flash-icon">${properties.icon || ''}</span>
          <span class="flash-title">${properties.title || ''}</span>
          <span class="flash-message">${properties.message || ''}</span>
        </div>
      </div>`;
  }
}

// Example usage of the Flash library
const flash = new CustomFlash();

// Creating a custom flash message with a close button
flash.addFlash({
  message: 'Your custom message here',
  type: 'info',
  duration: 5000,
  title: 'Custom Title',
  icon: '<i class="fas fa-info-circle"></i>', // Example icon markup
  closeButton: true
});

// Additional customization or event handling can be added as needed
document.getElementById('flash-close-button').addEventListener('click', () => {
  flash.clearFlash();
});
```
