# Progress Form

---

## Overview

The `ProgressForm` class provides a way to create a multi-step form with a progress bar. The form is divided into multiple fieldsets, and the user can navigate between the fieldsets using the "Next" and "Previous" buttons. The progress bar indicates the user's progress through the form.

## Installation

To install the `ProgressForm` class, you can use npm:

```bash
npm install @easylibs/progress-form
# Or
yarn add @easylibs/progress-form
# Or
pnpm add @easylibs/progress-form
```

## Usage

To use the `ProgressForm` class, you need to create a form element and add the fieldsets to the form. Each fieldset should contain the inputs for one step of the form.

```html
<form id="progress-form">
  <div fieldset__parent>
    <div fieldset__container>
      <fieldset>
        <label for="name">Name:</label>
        <input type="text" id="name">
        <button type="button" next__btn>next</button>
      </fieldset>
      <fieldset>
        <label for="email">Email:</label>
        <input type="email" id="email">
        <button type="button" prev__btn>previous</button>
        <button type="button" next__btn>next</button>
      </fieldset>
      <fieldset>
        <label for="password">Password:</label>
        <input type="password" id="password">
        <button type="button" prev__btn>previous</button>
        <button type="button">submit</button>
      </fieldset>
    </div>
  </div>
</form>
```

Next, you need to create a `ProgressForm` object and pass the form element to the constructor.

```javascript
import ProgressForm from "@easylibs/progress-form";
const progressForm = new ProgressForm();
```

Finally, you need to call the `run()` method on the `ProgressForm` object. This will initialize the form and add the event listeners for the "Next" and "Previous" buttons.

```javascript
const form = document.getElementById('progress-form');
progressForm.run({ form });
```

## Styling

The `ProgressForm` class includes a default CSS style that you can use to style the form. You can also override the default CSS style by passing a `styleOptions` object to the `run()` method.

The `styleOptions` object can contain the following properties:

* `form`: The CSS style for the form element.
* `fieldsetParent`: The CSS style for the fieldset parent element.
* `fieldsetContainer`: The CSS style for the fieldset container element.
* `fieldset`: The CSS style for the fieldset elements.

For example, the following code would change the form, fieldsetContainer, and fieldset css style:

```javascript
const translateX = -560;
progressForm.run({ form, translateX },
    {
      form: {
        width: "100vw",
        height: "null",
      },
      fieldsetContainer: {
        width: "1600px",
        height: "null",
        alignItems: "center",
      },
      fieldset: {
        width: "500px",
        alignItems: "null",
      },
    }
  );
```

![Un appercu du premier fieldset](./src/assets/form-image.png)

* Note:  These elements do not contain all existing css properties, but only the one necessary for correct initialization of the form. You should therefore modify or add additional css properties from your css style sheet.

## Conclusion

The `ProgressForm` class simplifies the creation of multi-step forms with an integrated progress bar, enhancing user experience in navigating through complex input sequences. By dividing forms into manageable steps and providing a visual indicator of progress, this class streamlines user interactions and improves form completion rates.

With straightforward installation via npm and easy-to-use methods, integrating the `ProgressForm` into your web application can significantly enhance the form-filling experience for your users.

Remember to explore the customizable styling options provided by the class to harmonize the form's appearance with your website's design theme.

---
