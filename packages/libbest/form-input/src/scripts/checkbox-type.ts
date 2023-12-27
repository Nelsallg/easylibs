// Import statements
import { $$ } from '../../../utils/src/dom';
import { processNodes } from '../../../utils/src/functions/process-node';

/**
 * CheckboxManager class to initialize checkbox functionality in a specified parent element.
 */
export class CheckboxManager {
    private parentElement: string;

    constructor(parentElement: string) {
        this.parentElement = parentElement;
    }

    /**
     * Initializes the checkbox functionality in the specified parent element.
     */
    public initializeCheckbox() {
        const content = $$(this.parentElement);

        if (content !== null) {
            processNodes(content, (node: HTMLElement) => {
                this.init(node);
            });
        }
    }

    private init(content: HTMLElement) {
        const parentCheckbox = content.querySelector('.parent-checkbox') as HTMLInputElement;
        const childrenCheckboxes = content.querySelectorAll('.child-checkbox') as NodeListOf<HTMLInputElement>;
        let parentChecked = parentCheckbox.checked;

        /**
         * Toggles the selection state of child checkboxes.
         * @param checked Selection state of checkboxes.
         */
        const toggleChildrenCheckboxes = (checked: boolean) => {
            childrenCheckboxes.forEach((checkbox) => {
                checkbox.checked = checked;
            });
        };

        /**
         * Event handler for the parent checkbox.
         * Updates the selection state of child checkboxes.
         * @param e Click event.
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
