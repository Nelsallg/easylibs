import Utils from "@easylibs/utils";

/**
 * Manages the functionality of a group of checkboxes with a parent-child relationship.
 */
export default class CheckboxManager {
    private parentElement: string;

    /**
     * Constructs a new CheckboxManager instance.
     * @param {string} parentElement - The selector for the parent element in the DOM.
     */
    constructor(parentElement: string) {
        this.parentElement = parentElement;
    }

    /**
     * Initializes the checkbox functionality in the specified parent element.
     * Uses the utility function $$ from "@easylibs/utils" to select the parent element.
     * If the element is found, processes each child node using the init method.
     */
    public init() {
        const content = Utils.$$(this.parentElement);

        if (content !== null) {
            Utils.processNodes(content, (node: HTMLElement) => {
                this.initializeCheckbox(node);
            });
        }
    }

    /**
     * Sets up checkbox functionality within a given content (presumably a child node of the parent).
     * Selects the parent and child checkboxes, sets up event listeners, and handles the logic for toggling checkbox states.
     * @param {HTMLElement} content - The HTML element representing the content (child node).
     */
    private initializeCheckbox(content: HTMLElement) {
        const parentCheckbox = content.querySelector('.parent-checkbox') as HTMLInputElement;
        const childrenCheckboxes = content.querySelectorAll('.child-checkbox') as NodeListOf<HTMLInputElement>;
        let parentChecked = parentCheckbox.checked;

        /**
         * Toggles the selection state of child checkboxes.
         * @param {boolean} checked - Selection state of checkboxes.
         */
        const toggleChildrenCheckboxes = (checked: boolean) => {
            childrenCheckboxes.forEach((checkbox) => {
                checkbox.checked = checked;
            });
        };

        /**
         * Event handler for the parent checkbox.
         * Updates the selection state of child checkboxes.
         * @param {Event} e - Click event.
         */
        parentCheckbox.addEventListener('click', (e) => {
            parentChecked = parentCheckbox.checked;
            toggleChildrenCheckboxes(parentChecked);
        });

        childrenCheckboxes.forEach((checkbox) => {
            /**
             * Event handler for child checkboxes.
             * Updates the selection state of the parent checkbox based on child checkboxes.
             */
            checkbox.addEventListener('click', () => {
                if (!checkbox.checked && parentChecked) {
                    parentCheckbox.checked = false;
                    parentChecked = false;
                } else if (checkbox.checked && !parentChecked) {
                    const allChildrenChecked = Array.from(childrenCheckboxes).every((c) => c.checked);
                    if (allChildrenChecked) {
                        parentCheckbox.checked = true;
                        parentChecked = true;
                    }
                }
            });
        });
    }
}
