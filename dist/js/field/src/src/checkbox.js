define(["require", "exports", "./dom", "./convert-type"], function (require, exports, dom_1, convert_type_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckboxManager = void 0;
    /**
     * CheckboxManager class to initialize checkbox functionality in a specified parent element.
     */
    class CheckboxManager {
        constructor(parentElement) {
            this.parentElement = parentElement;
        }
        /**
         * Initializes the checkbox functionality in the specified parent element.
         */
        initializeCheckbox() {
            const content = (0, dom_1.$$)(this.parentElement);
            if (content !== null) {
                (0, convert_type_1.processNodes)(content, (node) => {
                    this.init(node);
                });
            }
        }
        init(content) {
            const parentCheckbox = content.querySelector('.parent-checkbox');
            const childrenCheckboxes = content.querySelectorAll('.child-checkbox');
            let parentChecked = parentCheckbox.checked;
            /**
             * Toggles the selection state of child checkboxes.
             * @param checked Selection state of checkboxes.
             */
            const toggleChildrenCheckboxes = (checked) => {
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
                    }
                    else if (checkbox.checked && !parentChecked) {
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
    exports.CheckboxManager = CheckboxManager;
});
//# sourceMappingURL=checkbox.js.map