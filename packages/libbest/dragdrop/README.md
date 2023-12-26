# Drag and Drop Manager

The Drag and Drop Manager is a JavaScript class that provides an easy way to implement drag and drop functionality in your web applications. It supports both HTML5 drag and drop and pointer events, and it can be used with any type of element.

## Installation

To install the Drag and Drop Manager, simply add the following script to your HTML document:

```html
<script src="drag-and-drop-manager.js"></script>
```

### Usage

To use the Drag and Drop Manager, first create an instance of the class:

```javascript
const manager = new DragAndDropManager();
```

Then, call the `droppingStart()` method to enable drag and drop functionality:

```javascript
manager.droppingStart();
```

This will add event listeners to the document for the `drag`, `dragover`, `dragenter`, `dragleave`, and `dragend` events.

### Dragging an Element

To drag an element, simply click and hold on the element and then move the mouse. The element will follow the mouse cursor.

### Dropping an Element

To drop an element, simply move the mouse over the desired drop target and then release the mouse button. The element will be dropped into the drop target.

### Customizing the Drag and Drop Behavior

The Drag and Drop Manager provides a number of options for customizing the drag and drop behavior. For example, you can specify whether or not an element can be dragged, whether or not it can be dropped into a particular drop target, and how the element should be animated when it is dragged or dropped.

For more information on how to customize the Drag and Drop Manager, please see the documentation.

### Example

The following code shows how to use the Drag and Drop Manager to create a simple drag and drop list:

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  const manager = new DragAndDropManager();
  manager.droppingStart();

  const list = document.getElementById('list');

  list.addEventListener('dragstart', (event) => {
    manager.dragStart(event);
  });

  list.addEventListener('dragover', (event) => {
    manager.dragOver(event);
  });

   list.addEventListener('dragenter', (event) => {
    manager.dragEnter(event);
  });

  list.addEventListener('dragleave', (event) => {
    manager.dragLeave(event);
  });

  list.addEventListener('drop', (event) => {
    manager.drop(event);
  });

  list.addEventListener('dragend', () => {
    manager.dragEnd();
  });
</script>
```
