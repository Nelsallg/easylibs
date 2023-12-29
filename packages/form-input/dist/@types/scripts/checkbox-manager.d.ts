/**
 * Manages the functionality of a group of checkboxes with a parent-child relationship.
 */
export default class CheckboxManager {
    private parentElement;
    /**
     * Constructs a new CheckboxManager instance.
     * @param {string} parentElement - The selector for the parent element in the DOM.
     */
    constructor(parentElement: string);
    /**
     * Initializes the checkbox functionality in the specified parent element.
     * Uses the utility function $$ from "@easylibs/utils" to select the parent element.
     * If the element is found, processes each child node using the init method.
     */
    init(): void;
    /**
     * Sets up checkbox functionality within a given content (presumably a child node of the parent).
     * Selects the parent and child checkboxes, sets up event listeners, and handles the logic for toggling checkbox states.
     * @param {HTMLElement} content - The HTML element representing the content (child node).
     */
    private initializeCheckbox;
}
