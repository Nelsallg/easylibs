import CheckboxManager  from './scripts/checkbox-manager';
import ColorManager  from './scripts/color-manager';
import DateManager  from './scripts/date-manager';
import PasswordManager  from './scripts/password-manager';
import SelectManager  from './scripts/select-manager';

export namespace FormInput {
  /**
 * Manages the functionality of a group of checkboxes with a parent-child relationship.
 */
  export class CheckboxType extends CheckboxManager {
    /**
     * Constructs a new CheckboxManager instance.
     * @param parentElement - The selector for the parent element in the DOM.
     */
    constructor(parentElement: string) {
      super(parentElement)
    }
  }
  /**
   * Manages the color-related functionality, including fetching colors from a URL and handling color selection events.
   */
  export class ColorType extends ColorManager {}
 
  export class PasswordType extends PasswordManager {
     /**
     * Constructs a new PasswordVisibility instance.
     * @param iconPath - The paths for hide and show icons.
     * @param iconPath.hide - The path for the hide icon.
     * @param iconPath.show - The path for the show icon.
     * @param showIconsToClick - Indicates whether to show icons on click or by default.
    */
    constructor(iconPath: { hide: string; show: string }, showIconsToClick: boolean = false){
      super(iconPath,showIconsToClick)
    }
  }
  /**
   * Manages functionality related to HTML select elements.
   */
  export class SelectType extends SelectManager {
    constructor(){
      super()
    }
  }
  export class DateType extends DateManager {
    /**
   * Constructs a new DateManager instance.
   * @param startDate - The start date input or selector.
   * @param endDate - The end date input or selector.
   * @param durationContainer - The container to display the duration.
   * @param autoSetDuration - Indicates whether to automatically set the duration text.
   */
    constructor(startDate:string | HTMLInputElement,endDate:string | HTMLInputElement,durationContainer:HTMLElement,autoSetDuration=false){
      super(startDate,endDate,durationContainer,autoSetDuration)
    }
  }
}