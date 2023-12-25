# Password Visibility

This code provides a way to add a "show password" feature to password input fields. It uses SVG icons to toggle between showing and hiding the password.

## Installation

To use this code, you can install it as a package from npm:

```bash
npm install libbest/password-visibility
```

Once installed, you can import it into your project:

```typescript
import { PasswordVisibility } from 'libbest/password-visibility';
```

## Usage

To use the `PasswordVisibility` class, you first need to create an instance of it. You can do this by passing in the path to the SVG icons you want to use. For example:

```typescript
const passwordVisibility = new PasswordVisibility({
  hide: '/path/to/hide.svg',
  show: '/path/to/show.svg',
});
```

Once you have created an instance of the `PasswordVisibility` class, you can call the `active` method to enable the password visibility feature on all password input fields on the page. For example:

```typescript
passwordVisibility.active();
```

## How it works

The `PasswordVisibility` class works by adding a custom HTML element to each password input field. This element contains the SVG icons that are used to toggle between showing and hiding the password.

When the user clicks on the "show password" icon, the `PasswordVisibility` class changes the type of the password input field to "text". This allows the user to see the password.

When the user clicks on the "hide password" icon, the `PasswordVisibility` class changes the type of the password input field back to "password". This hides the password.

## Styling

The `PasswordVisibility` class provides a few basic styling options. You can change the color of the SVG icons, the size of the icons, and the position of the icons.

To change the color of the SVG icons, you can use the `color` property. For example:

```typescript
passwordVisibility.color = '#000';
```

To change the size of the SVG icons, you can use the `width` and `height` properties. For example:

```typescript
passwordVisibility.width = '20px';
passwordVisibility.height = '20px';
```

To change the position of the SVG icons, you can use the `top`, `right`, `bottom`, and `left` properties. For
