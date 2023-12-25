# Auto-resizing Select Element with Icons

This repository contains two JavaScript functions, `autoResizeSelect` and `addIconToSelect`, that enhance the functionality of HTML select elements. These functions provide automatic resizing based on the length of the selected text and the ability to associate icons with different options.

## Installation

To use these functions in your project, you can either directly include the `auto-resize-select.js` file or install it as a package using npm:

```bash
npm install libbest/auto-resize-select
```

## Usage

### `autoResizeSelect`

The `autoResizeSelect` function automatically adjusts the width of a select element to match the length of the selected option's text. This ensures that the select element always displays the full text without any truncation.

To use this function, simply pass the ID or reference of the select element as an argument:

```javascript
import { autoResizeSelect } from 'libbest/auto-resize-select';

autoResizeSelect('my-select');
```

### `addIconToSelect`

The `addIconToSelect` function allows you to associate icons with different options in a select element. When a user selects an option, the corresponding icon will be displayed next to the select element.

To use this function, pass the ID or reference of the select element as an argument:

```javascript
import { addIconToSelect } from 'libbest/auto-resize-select';

addIconToSelect('my-select');
```

In addition to the select element, you will also need to add the icons to your HTML document. Each icon should have a `data-option` attribute that matches the value of the corresponding option in the select element.

For example:

```html
<select id="my-select">
  <option value="option-1">Option 1</option>
  <option value="option-2">Option 2</option>
  <option value="option-3">Option 3</option>
</select>

<div class="icons">
  <i class="icon" data-option="option-1">Icon 1</i>
  <i class="icon" data-option="option-2">Icon 2</i>
  <i class="icon" data-option="option-3">Icon 3</i>
</div>
```

When a user selects an option from the select element, the corresponding icon
