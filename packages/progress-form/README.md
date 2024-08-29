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
import { ProgressForm } from "@easylibs/progress-form";

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
import { LazyProgressForm } from "@easylibs/progress-form";

// Select the form element
const lazyFormElement = document.querySelector('form');

// Create a new LazyProgressForm instance
const url = "https://example.com/api"
const lazyProgressForm = new LazyProgressForm(lazyFormElement, url);

// Initialize the lazy form with configuration options
lazyProgressForm.lazyRun({
  fieldsetLength: 3,
  progressOptions: {
    translateX: -700
  },
  styleOptions: {
    form: { width: "700px" },
    fieldset: { width: "640px" },
    fieldsetContainer: {
      justifyContent: "null"
    }
  }
})

lazyProgressForm.fetchNextFieldSet({
  spinner: "Loading...",
  shouldRepost: true,
  callback(response, status, index, ...data) {
    switch (index) {
      case 1: // is first fetched fieldset
        // Do something, for example, graft the events that this fieldset 1 needs
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
  - `data.shouldRepost`: Whether to post a fieldset's data when its "next" button is clicked again.
  - `data.extraData`: Additional data to add to the form at each step
  - `data.callback(response, status, index, ...data)`: Function to execute after the fieldset is loaded.

## Events

### `onPreNext`

- **Description**: Triggered before transitioning to the next fieldset.
- **Use Case**: Use this event to perform actions or validations before moving to the next step.

### `onPostNext`

- **Description**

: Triggered after transitioning to the next fieldset.

- **Use Case**: Use this event to perform actions or update UI elements after moving to the next step.

### `onPrePrev`

- **Description**: Triggered before transitioning to the previous fieldset.
- **Use Case**: Use this event to perform actions or validations before moving back to the previous step.

### `onPostPrev`

- **Description**: Triggered after transitioning to the previous fieldset.
- **Use Case**: Use this event to perform actions or update UI elements after moving back to the previous step.

## Customization Options

### StyleOptions

Customize the appearance of your form using the following options:

- **form**: Styles for the form element.
- **fieldset**: Styles for the fieldset elements.
- **fieldsetContainer**: Styles for the container holding the fieldsets.

### ProgressFormType

Configure form progression with these options:

- **translateX**: X translation value for the transition effect.

### PreventType

Define conditions under which form progression should be prevented.

## Conclusion

The `ProgressForm` library offers a powerful and flexible solution for creating dynamic, multi-step forms with a user-friendly progress bar. Whether you need a simple form or a more complex form with lazy loading capabilities, this library provides the tools and customization options to meet your needs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- [GitHub Repository](https://github.com/Nelsallg/easylibs)
- [npm Package](https://www.npmjs.com/package/@easylibs/progress-form)
- [Documentation](https://github.com/Nelsallg/easylibs#readme)

For more detailed information and examples, please refer to the official documentation and resources provided.
