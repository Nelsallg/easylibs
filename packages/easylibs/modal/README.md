# Form Modal

The `FormModal` class provides a way to easily create and manage modal windows for forms. It handles the opening and closing of the modal, as well as the animation of the modal window.

## Installation

To install the `FormModal` class, you can use npm:

```bash
npm install libbest/form-modal
```

## Usage

To use the `FormModal` class, you first need to create an instance of the class. You can do this by calling the `init()` method.

```typescript
const formModal = new FormModal().init();
```

Once you have created an instance of the `FormModal` class, you can use the following methods to manage your modal windows:

* `setAnimation(animation, display, animateElement)`: This method sets the animation that will be used to open and close the modal window. The `animation` parameter is an object that specifies the type of animation and the position of the animation. The `display` parameter specifies the CSS display property that will be used to show or hide the modal window. The `animateElement` parameter specifies the element that will be animated.
* `checkExistingData(identifier)`: This method checks if there are any existing modal windows with the same identifier. If there are, it throws an error.

## Example

The following code shows how to use the `FormModal` class to create a modal window for a form:

```html
<div data-modal="modal-bg-form">
  <div class="modal-content">
    <form>
      <input type="text" name="name">
      <input type="email" name="email">
      <button type="submit">Submit</button>
    </form>
  </div>
</div>

<button modal-openbtn-form>Open Modal</button>
```

```typescript
const formModal = new FormModal().init();

formModal.setAnimation({
  type: 'fade',
  position: 'top',
}, 'flex', document.querySelector('.modal-content'));
```

This code will create a modal window that fades in from the top of the screen when the "Open Modal" button is clicked. The modal window will contain a form with two input fields and a submit button.

## Conclusion

The `FormModal` class is a powerful tool for creating and managing modal windows for forms.
