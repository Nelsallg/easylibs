# Form Modal

This library provides a simple and customizable way to create modal windows in your web application. It uses CSS animations to create a smooth opening and closing effect, and it can be easily integrated into your existing codebase.

## Installation

To install the library, simply add the following script tag to your HTML file:

```html
<script src="form-modal.js"></script>
```

## Usage

To use the library, first create a modal window by adding a `<div>` element with the `data-modal` attribute. The value of the `data-modal` attribute should be `modal-bg`, followed by a unique identifier for the modal window. For example:

```html
<div data-modal="modal-bg-my-modal">
  <!-- Modal content goes here -->
</div>
```

Next, create an open button for the modal window by adding a `<button>` element with the `modal-openbtn` attribute. The value of the `modal-openbtn` attribute should be the same as the unique identifier for the modal window. For example:

```html
<button modal-openbtn="my-modal">Open Modal</button>
```

Finally, create a close button for the modal window by adding a `<button>` element with the `modal-closebtn` attribute. The value of the `modal-closebtn` attribute should be the same as the unique identifier for the modal window. For example:

```html
<button modal-closebtn="my-modal">Close Modal</button>
```

## Configuration

The library can be configured to use different CSS animations for opening and closing the modal window. To do this, simply pass an object with the `animation` property to the `setAnimation()` method. The `animation` object should have two properties: `type` and `position`. The `type` property can be one of the following values:

* `fade`
* `slide-up`
* `slide-down`
* `slide-left`
* `slide-right`

The `position` property can be one of the following values:

* `top`
* `bottom`
* `left`
* `right`

For example, to use a fade animation to open the modal window from the top, you would use the following code:

```javascript
formModal.setAnimation({ type: 'fade', position: 'top' });
```

# Modal Component

The `ModalComponent` class encapsulates the logic related to manipulating modals, including opening, closing, managing audio, duration, and animation. It provides a simple interface to interact with modals.

## Usage

To use the `ModalComponent`, you first need to create an instance of the class. You can do this by passing the modal element to the constructor.

```typescript
const modal = document.getElementById('my-modal');
const modalComponent = new ModalComponent(modal);
```

Once you have created an instance of the `ModalComponent`, you can use the following methods to open and close the modal:

* `open()`: Opens the modal.
* `close()`: Closes the modal.

You can also set the following properties to customize the behavior of the modal:

* `audio`: The audio file to play when the modal is opened.
* `volume`: The volume of the audio file.
* `duration`: The duration of the modal in milliseconds.
* `container`: The container element to insert the modal into.
* `animation`: The animation options for the modal.

## Example

The following code shows how to use the `ModalComponent` to create a modal that plays an audio file when it is opened:

```typescript
const modal = document.getElementById('my-modal');
const modalComponent = new ModalComponent(modal);

modalComponent.audio = 'path/to/audio.mp3';
modalComponent.volume = 0.5;
modalComponent.duration = 5000;

modalComponent.open();
```

## Step-by-Step Explanation

The `ModalComponent` class has the following properties:

* `modal`: The modal element to manipulate.
* `audio`: The audio file to play when the modal is opened.
* `volume`: The volume of the audio file.
* `duration`: The duration of the modal in milliseconds.
* `container`: The container element to insert the modal into.
* `animation`: The animation options for the modal.

The `ModalComponent` class also has the following methods:

* `open()`: Opens the modal.
* `close()`: Closes the modal.
* `autoClose()`: Manages the automatic closing of the modal.
* `clearProperties()`: Cleans up the attributes of the modal.

The `open()` method does the following:
