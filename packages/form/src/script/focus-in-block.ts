/**
 * Gère le focus clavier sur les éléments d'un bloc HTML spécifié.
 * @param key - L'événement clavier qui a déclenché la fonction.
 * @param block - L'élément HTML qui représente le bloc sur lequel on souhaite gérer le focus.
 */
export function focusInBlock(key:KeyboardEvent, block:HTMLElement):void
{
    key.preventDefault();
    const focusables = getFocusableElements(block);
    let index = focusables.findIndex(f => f === block.querySelector(':focus'));
    (key.shiftKey === true) ? index-- : index++;
    console.log({focusables,block})
    if (index >= focusables.length) { index = 0; }
    if (index < 0) { index = focusables.length - 1; }
    const FIELD = focusables[index] as HTMLElement;
    FIELD.focus();
}
/**
 * Récupère tous les éléments focusables dans un bloc HTML spécifié.
 * @param block - L'élément HTML qui représente le bloc contenant les éléments focusables.
 * @returns Un tableau d'éléments focusables présents dans le bloc.
 */
export function getFocusableElements(block:HTMLElement):Element[]
{
    let focusableSelector = "button, select, input, a, textarea";
    return Array.from(block.querySelectorAll(focusableSelector));
}