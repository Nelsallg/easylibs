# Scroll Behavior

This JavaScript class provides enhanced scrolling and dragging capabilities to a webpage, allowing users to interact with the page content using the mouse, scroll wheel, and keyboard.

## Installation

To use this class in your project, you can install it as a dependency using a package manager like npm:

```bash
npm install @easylibs/scroll-behavior
```

## Usage

Once installed, you can import the class into your JavaScript file and create an instance of it to enable the enhanced scrolling behavior:

```javascript
import ScrollBehavior from '@easylibs/scroll-behavior';

const scrollBehavior = new ScrollBehavior();
scrollBehavior.run();
```

## Features

The `ScrollBehavior` class provides the following features:

- **Custom scrolling:** Allows users to scroll the page by dragging the mouse with the right mouse button pressed.
- **Scroll wheel scrolling:** Allows users to scroll the page by rotating the mouse wheel.
- **Keyboard scrolling:** Allows users to scroll the page by pressing the arrow down key.

## Implementation Details

### Custom Scrolling

The custom scrolling feature is implemented by handling the `mousedown`, `mousemove`, and `mouseup` events on the window. When the right mouse button is pressed, the initial mouse position and scroll position are recorded, and event listeners are added for mouse movement and mouse release. As the mouse moves, the scroll position is updated based on the difference between the current mouse position and the initial mouse position. When the mouse button is released, the event listeners are removed.

```typescript
private handleMouseDown(event: MouseEvent): void {
  if (event.button === 2) {
    this.isRightClickPressed = true;
    this.initialMouseY = event.clientY;
    this.initialScrollTop = window.scrollY;
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }
}

private handleMouseMove(event: MouseEvent): void {
  if (this.isRightClickPressed) {
    const deltaY = event.clientY - this.initialMouseY;
    window.scrollTo(0, this.initialScrollTop - deltaY);
  }
}

private handleMouseUp(event: MouseEvent): void {
  if (event.button === 2) {
    this.isRightClickPressed = false;
    document.removeEventListener('mousemove', this.handleMouseMove);

```
