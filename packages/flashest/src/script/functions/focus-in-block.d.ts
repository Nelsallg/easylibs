/**
 * 
 * Cloisonne le focus dans un block
 * @param {KeyboardEvent} key La touche du clavier qui déclanche le focus
 * @param {HTMLElement} block
 */
export function FocusInBlock(key:KeyboardEvent, block:HTMLElement) {
    key.preventDefault();
    let index = Focusables(block).findIndex(f => f === block.querySelector(':focus'));
    (key.shiftKey === true) ? index-- : index++;
    if (index >= Focusables(block).length) { index = 0; }
    if (index < 0) { index = Focusables(block).length - 1; }
    const FIELD = Focusables(block)[index] as HTMLElement;
    FIELD.focus();
}

export function Focusables(block:HTMLElement) {
    let focusableSelector = "button, select, input, a";
    return Array.from(block.querySelectorAll(focusableSelector));
}