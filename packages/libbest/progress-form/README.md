# Progress Form

---

## Overview

The `ProgressForm` class provides a way to create a multi-step form with a progress bar. The form is divided into multiple fieldsets, and the user can navigate between the fieldsets using the "Next" and "Previous" buttons. The progress bar indicates the user's progress through the form.

## Installation

To install the `ProgressForm` class, you can use npm:

```bash
npm install libbest/progress-form
```

## Usage

To use the `ProgressForm` class, you need to create a form element and add the fieldsets to the form. Each fieldset should contain the inputs for one step of the form.

```html
<form id="progress-form">
  <fieldset>
    <label for="name">Name:</label>
    <input type="text" id="name">
  </fieldset>
  <fieldset>
    <label for="email">Email:</label>
    <input type="email" id="email">
  </fieldset>
  <fieldset>
    <label for="password">Password:</label>
    <input type="password" id="password">
  </fieldset>
</form>
```

Next, you need to create a `ProgressForm` object and pass the form element to the constructor.

```javascript
const progressForm = new ProgressForm(document.getElementById('progress-form'));
```

Finally, you need to call the `run()` method on the `ProgressForm` object. This will initialize the form and add the event listeners for the "Next" and "Previous" buttons.

```javascript
progressForm.run();
```

## Styling

The `ProgressForm` class includes a default CSS style that you can use to style the form. You can also override the default CSS style by passing a `styleOptions` object to the `run()` method.

The `styleOptions` object can contain the following properties:

* `form`: The CSS style for the form element.
* `fieldsetContainer`: The CSS style for the fieldset container element.
* `fieldset`: The CSS style for the fieldset elements.

For example, the following code would change the background color of the form to blue:

```javascript
progressForm.run({
  form: {
    backgroundColor: 'blue',
  },
});
```

## Conclusion

The `ProgressForm` class simplifies the creation of multi-step forms with an integrated progress bar, enhancing user experience in navigating through complex input sequences. By dividing forms into manageable steps and providing a visual indicator of progress, this class streamlines user interactions and improves form completion rates.

With straightforward installation via npm and easy-to-use methods, integrating the `ProgressForm` into your web application can significantly enhance the form-filling experience for your users.

Remember to explore the customizable styling options provided by the class to harmonize the form's appearance with your website's design theme.

---
