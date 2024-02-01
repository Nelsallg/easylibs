# Progress Form

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

Or use direct inclusion with CDN:

```html
<!--MINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/progress-form@latest/dist/progress-form.min.js"></script>
<script src="https://unpkg.com/@easylibs/progress-form@latest/dist/progress-form.min.js"></script>
<!-- OR UNMINIFIED-->
<script src="https://cdn.jsdelivr.net/npm/@easylibs/progress-form@latest/dist/progress-form.js"></script>
<script src="https://unpkg.com/@easylibs/progress-form@latest/dist/progress-form.js"></script>
```

## Usage

To use the `ProgressForm` class, you need to create a form element and add the fieldsets to the form. Each fieldset should contain the inputs for one step of the form.

```html
<form id="progress-form" method="post">
        <div fieldset__parent>
          <div fieldset__container>
            <fieldset>
              <label for="name">Name:</label>
              <input type="text" id="name">
              <button type="button" __next__>next</button>
            </fieldset>
            <fieldset>
              <label for="surname">Surname:</label>
              <input type="text" id="surname">
              <button type="button" __prev__>previous</button>
              <button type="button" __next__>next</button>
            </fieldset>
            <fieldset>
              <label for="sex">Sex:</label>
              <select name="" id="">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <button type="button" __prev__>previous</button>
              <button type="button" __next__>next</button>
            </fieldset>
            <fieldset>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email">
              <button type="button" __prev__>previous</button>
              <button type="button" __next__>next</button>
            </fieldset>
            <fieldset>
              <label for="password">Password:</label>
              <input type="password" id="password"  name="password">
              <button type="button" __prev__>previous</button>
              <button type="button" id="submitter">submit</button>
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

**`NB:`** This configuration is normally sufficient to correctly initialize the form, but you may want to modify the width of your form. We strongly recommend that you do this directly via the `translateX` property of `ProgressForm`, this will correctly adjust the movement of the Fieldsets

* Exemple:

```javascript
const translateX = -560;
progressForm.run({ form, translateX });
```

Note also that if you have required fields, the progress of the form will be automatically prevented in the event of an invalid field. Validation is only done on the client side via the corresponding HTML attributes, so there is no server-side validation

## Styling

The `ProgressForm` class includes a default CSS style that you can use to style the form. You can also override the default CSS style by passing a `styleOptions` object to the `run()` method.

The `styleOptions` object can contain the following properties:

* `form`: The CSS style for the form element.
* `fieldsetParent`: The CSS style for the fieldset parent element.
* `fieldsetContainer`: The CSS style for the fieldset container element.
* `fieldset`: The CSS style for the fieldset elements.

**Alert ! `since version 1.1.10 it is no longer useful to modify the css style from the` `ProgressForm` `instance unless necessary.`**

* Exemple:
In this code we want to deactivate the `Width` properties of `Form` and `FieldSetParent`.

```javascript
const form = document.getElementById('progress-form');
const translateX = -560;
progressForm.run({ form, translateX }, {
  from:{
    width:"null"
  },
  fieldsetParent:{
    width:"null"
  }
});
```

![A preview of the first fieldset](./src/assets/form-image.png)

* Note:  These elements do not contain all existing css properties, but only the one necessary for correct initialization of the form. You should therefore modify or add additional css properties from your css style sheet.

## Conclusion

The `ProgressForm` class simplifies the creation of multi-step forms with an integrated progress bar, enhancing user experience in navigating through complex input sequences. By dividing forms into manageable steps and providing a visual indicator of progress, this class streamlines user interactions and improves form completion rates.

With straightforward installation via npm and easy-to-use methods, integrating the `ProgressForm` into your web application can significantly enhance the form-filling experience for your users.

Remember to explore the customizable styling options provided by the class to harmonize the form's appearance with your website's design theme.

---
