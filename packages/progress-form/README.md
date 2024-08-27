# ProgressForm Library

## Introduction

The `ProgressForm` class provides an elegant solution for creating multi-step forms with a progress bar. It allows users to navigate through different sections of a form efficiently by breaking it down into manageable fieldsets. Each step of the form is displayed one at a time, and users can move forward or backward through the steps using the provided navigation buttons. The progress bar dynamically reflects the user's current position within the form.

![GitHub stars](https://img.shields.io/github/stars/Nelsallg/easylibs?style=social)
![GitHub issues](https://img.shields.io/github/issues/Nelsallg/easylibs)
![npm version](https://img.shields.io/npm/v/@easylibs/progress-form.svg?style=flat)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![jsDelivr downloads](https://img.shields.io/jsdelivr/npm/hm/@easylibs/progress-form)

## Features

- **Progressive Form Handling**: Easily manage and transition between multiple steps of a form.
- **Lazy Loading**: Dynamically load form sections as needed, improving performance and user experience.
- **Customizable Styles**: Adjust the appearance of the form using customizable style options.
- **Built-in Validations**: Automatically validate form fields on the client side to ensure data integrity.
- **Flexible Event Handling**: Customize form behavior by hooking into various events during form progression.

## Installation

To install the `ProgressForm` library, use one of the following methods:

**Via npm:**

```bash
npm install @easylibs/progress-form
```

**Via Yarn:**

```bash
yarn add @easylibs/progress-form
```

**Via pnpm:**

```bash
pnpm add @easylibs/progress-form
```

Alternatively, you can include the library directly from a CDN:

**Minified:**

```html
<script src="https://cdn.jsdelivr.net/npm/@easylibs/progress-form@latest/dist/progress-form.min.js"></script>
<script src="https://unpkg.com/@easylibs/progress-form@latest/dist/progress-form.min.js"></script>
```

**Unminified:**

```html
<script src="https://cdn.jsdelivr.net/npm/@easylibs/progress-form@latest/dist/progress-form.js"></script>
<script src="https://unpkg.com/@easylibs/progress-form@latest/dist/progress-form.js"></script>
```

## Usage

### Basic Usage with `ProgressForm`

To create a multi-step form using `ProgressForm`, you need to structure your HTML with fieldsets. Each fieldset represents a step in the form.

**HTML Example:**

```html
<form id="progress-form" method="post">
  <div fieldset__parent>
    <div fieldset__container>
      <!-- First Fieldset -->
      <fieldset>
        <label for="name">Name:</label>
        <input type="text" id="name">
        <button type="button" __next__>Next</button>
      </fieldset>
      
      <!-- Second Fieldset -->
      <fieldset>
        <label for="surname">Surname:</label>
        <input type="text" id="surname">
        <button type="button" __prev__>Previous</button>
        <button type="button" __next__>Next</button>
      </fieldset>
      
      <!-- Third Fieldset -->
      <fieldset>
        <label for="sex">Sex:</label>
        <select id="sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="button" __prev__>Previous</button>
        <button type="button" __next__>Next</button>
      </fieldset>
      
      <!-- Fourth Fieldset -->
      <fieldset>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <button type="button" __prev__>Previous</button>
        <button type="button" __next__>Next</button>
      </fieldset>
      
      <!-- Fifth Fieldset -->
      <fieldset>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        <button type="button" __prev__>Previous</button>
        <button type="button" id="submitter">Submit</button>
      </fieldset>
    </div>
  </div>
</form>
```

**JavaScript Example:**

```javascript
import {ProgressForm} from "@easylibs/progress-form";

// Select the form element
const form = document.getElementById('progress-form');

// Create a new ProgressForm instance
const progressForm = new ProgressForm(form);

// Initialize the form
progressForm.run();
```

**Customizing Fieldset Movement:**

You can adjust the form's appearance and fieldset transitions using the `translateX` option:

```javascript
const translateX = -560; // Adjust this value based on your design
progressForm.run({ translateX });
```

### Advanced Usage with `LazyProgressForm`

When dealing with large forms or dynamic content, `LazyProgressForm` allows for efficient lazy loading of fieldsets. This means that fieldsets are only loaded as needed, rather than all at once.

**JavaScript Example:**

```javascript
import {LazyProgressForm} from "@easylibs/progress-form";

// Select the form element
const lazyFormElement = document.querySelector('form');

// Create a new LazyProgressForm instance
const url = "https://exemple.com/api"
const lazyProgressForm = new LazyProgressForm(lazyFormElement, url);

// Initialize the lazy form with configuration options
lazyProgress.lazyRun({
  fieldsetLength:3,
  progressOptions:{
    translateX:-700
  },
  styleOptions:{
    form:{ width:"700px" },
    fieldset:{ width:"640px" },
    fieldsetContainer:{
        justifyContent:"null"
    }
  }
})

lazyProgress.fetchNextFieldSet({
  spinner:"Chargement...",
  shouldFetch: true,
  callback(response, status, index, ...data){
    switch(index){
      case 1: // is first fetched fieldset
        //Do something, for example graft the events that this fieldset 1 needs
      case 2: // ...and so on depending on the number of fieldsets you have
    }
  }
})
```

## API Reference

### ProgressForm

- **constructor(form: HTMLFormElement, enableDefaultCssStyle: boolean = true)**
  - Initializes a new `ProgressForm` instance.
  - `form`: The HTML form element to be managed.
  - `enableDefaultCssStyle`: Whether to apply default CSS styles (default: `true`).

- **run(progressOptions?: ProgressFormType, styleOptions?: StyleOptions, preventProgress?: PreventType)**
  - Starts the form progression.
  - `progressOptions`: Configuration for form progression (e.g., transition effects).
  - `styleOptions`: Custom styles for the form.
  - `preventProgress`: Conditions under which progression should be prevented.

- **next(nextIndex: number, nextTranslateX: number, nextButton?: HTMLElement, progressElement?: HTMLElement, nextProgress?: number)**
  - Handles the "Next" button click event.
  - `nextIndex`: Index of the next fieldset.
  - `nextTranslateX`: X translation value for the transition.
  - `nextButton`: The button element that triggered the action.
  - `progressElement`: Element displaying progress.
  - `nextProgress`: Progress value.

- **prev(prevIndex: number, prevTranslateX: number, prevButton?: HTMLElement, progressElement?: HTMLElement, prevProgress?: number)**
  - Handles the "Previous" button click event.
  - `prevIndex`: Index of the previous fieldset.
  - `prevTranslateX`: X translation value for the transition.
  - `prevButton`: The button element that triggered the action.
  - `progressElement`: Element displaying progress.
  - `prevProgress`: Progress value.

### LazyProgressForm

- **constructor(form: HTMLFormElement, url: string, parentTarget?: string)**
  - Initializes a new `LazyProgressForm` instance.
  - `form`: The HTML form element to be managed.
  - `url`: URL to fetch fieldsets from.
  - `parentTarget`: Optional CSS class for the parent container.

- **lazyRun(fieldsetLength: number, progressOptions?: ProgressFormType, styleOptions?: StyleOptions)**
  - Initializes the lazy loading process.
  - `fieldsetLength`: Number of fieldsets.
  - `progressOptions`: Configuration for form progression.
  - `styleOptions`: Custom styles for the form.

- **fetchNextFieldSet(data: FieldSetGetterData)**
  - Fetches and displays the next fieldset.
  - `data.template`: The template for the fieldset.
  - `data.spinner`: Spinner or loading indicator.
  - `data.shouldFetch`: Whether to fetch the next fieldset.
  - `data.extraData`: Additional data to add to the form at each step
  - `data.callback(response, status, index, ...data)`: Function to execute after the fieldset is loaded.

## Events

### `onPreNext`

- **Description**: Triggered before transitioning to the next fieldset.
- **Use Case**: Use this event to perform actions or validations before moving to the next step.

### `onPostNext`

- **Description**: Triggered after transitioning to the next fieldset.
- **Use Case**: Use this event to update UI elements or perform actions once the transition is complete.

## Styling

Customize the

 appearance of the form by providing style options via the `run` or `lazyRun` methods. Apply custom classes to the form, fieldsets, and parent containers to match your website’s design.

**Note**: Since version 1.1.10, modifying CSS styles directly through the `ProgressForm` instance is less common. Instead, adjust styles using your CSS stylesheet.

**Example**:

To deactivate default width properties of `Form` and `FieldSetParent`, use custom styles:

```css
/* Example of custom CSS to adjust form styling */
.custom-form-class {
    /* Custom styles */
}
```

![A preview of the first fieldset](./src/assets/form-image.png)

## Conclusion

The `ProgressForm` class offers a powerful and user-friendly solution for creating multi-step forms with integrated progress indicators. It simplifies form navigation and enhances the user experience by breaking down complex forms into manageable steps. With its easy installation, customization options, and advanced features like lazy loading, `ProgressForm` is an excellent choice for modern web applications.

Explore the customizable styling options to ensure the form integrates seamlessly with your website's design.

---
