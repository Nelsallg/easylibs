import CheckboxManager from './scripts/checkbox-manager';
import ColorManager from './scripts/color-manager';
import DateManager from './scripts/date-manager';
import PasswordManager from './scripts/password-manager';
import SelectManager from './scripts/select-manager';
export declare namespace FormInput {
    /**
   * Manages the functionality of a group of checkboxes with a parent-child relationship.
   */
    class CheckboxType extends CheckboxManager {
        /**
         * Constructs a new CheckboxManager instance.
         * @param parentElement - The selector for the parent element in the DOM.
         */
        constructor(parentElement: string);
    }
    /**
     * Manages the color-related functionality, including fetching colors from a URL and handling color selection events.
     */
    class ColorType extends ColorManager {
    }
    class PasswordType extends PasswordManager {
        /**
        * Constructs a new PasswordVisibility instance.
        * @param iconPath - The paths for hide and show icons.
        * @param iconPath.hide - The path for the hide icon.
        * @param iconPath.show - The path for the show icon.
        * @param showIconsToClick - Indicates whether to show icons on click or by default.
       */
        constructor(iconPath: {
            hide: string;
            show: string;
        }, showIconsToClick?: boolean);
    }
    /**
     * Manages functionality related to HTML select elements.
     */
    class SelectType extends SelectManager {
        constructor();
    }
    class DateType extends DateManager {
        /**
       * Constructs a new DateManager instance.
       * @param startDate - The start date input or selector.
       * @param endDate - The end date input or selector.
       * @param durationContainer - The container to display the duration.
       * @param autoSetDuration - Indicates whether to automatically set the duration text.
       */
        constructor(startDate: string | HTMLInputElement, endDate: string | HTMLInputElement, durationContainer: HTMLElement, autoSetDuration?: boolean);
    }
}
