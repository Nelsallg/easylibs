# AnimationHandler.js

## Introduction

The `AnimationHandler.js` file contains a class that provides a set of functions for handling animations on HTML elements. These functions include:

- `animeIn()`: Performs an "in" animation on an element, making it visible.
- `animeOut()`: Performs an "out" animation on an element, hiding or removing it.
- `animeInOut()`: Performs an "in" or "out" animation on an element based on the state of a toggle button.

## Implementation Details

### `animeIn()` Function

The `animeIn()` function takes an options object as its argument. The options object can contain the following properties:

- `element`: The HTML element on which the animation should be performed.
- `animation`: An object specifying the type and position of the animation.
- `display`: The CSS `display` property value to apply to the element after the animation.
- `fromInToOut`: A boolean value indicating whether the animation should go from "in" to "out" or vice versa.

The `animeIn()` function first checks if the `element` property is set. If it is, the function proceeds to perform the animation. The animation type and position are determined by the `animation` property. If the `animation` property is not specified, the default animation type is "fade" and the default position is "top".

The `animeIn()` function then checks if the `display` property is set. If it is, the function sets the CSS `display` property of the element to the specified value after the animation is complete.

### `animeOut()` Function

The `animeOut()` function takes an options object as its argument. The options object can contain the following properties:

- `element`: The HTML element on which the animation should be performed.
- `animation`: An object specifying the type and position of the animation.
- `display`: The CSS `display` property value to apply to the element after the animation.
- `delay`: The delay in milliseconds before hiding or removing the element.
- `closeButton`: The close button associated with the element.
- `fromInToOut`: A boolean value indicating whether the animation should go from "in" to "out" or vice versa.

The `animeOut()` function first checks if the `element` property is set. If it is, the function proceeds to perform the animation.
