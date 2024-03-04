import { StyleOptions } from "./scripts/interfaces";
import { ProgressFormType } from "./scripts/types";
/**
 * ProgressForm represents a class for managing a progressive form.
 */
export default class ProgressForm {
    private enableDefaultCssStyle;
    private translateX;
    private fieldsetLength;
    private fieldsetMarginWidth;
    private params;
    /**
     * @param enableDefaultCssStyle Determines whether the default CSS style should be enabled. Default is true.
     */
    constructor(enableDefaultCssStyle?: boolean);
    /**
     * Defines the movement of each fieldset.
     * @param params The parameters for setting translateX.
     * @param fieldSet The fieldset element.
    */
    private setTranslateX;
    /**
     * Executes the progressive form.
     * @param params The parameters of the form.
     * @param styleOptions Style options for the form.
    */
    run(params: ProgressFormType, styleOptions?: StyleOptions): void;
    /**
     * Handles the "next" button click event.
     * @param nextButton The "next" button element.
     * @param nextIndex The index of the next fieldset.
     * @param nextTranslateX The translateX value for the next fieldset.
     * @param progressElement The progress element.
     * @param nextProgress The progress for the next fieldset.
     */
    private next;
    /**
     * Handles the "previous" button click event.
     * @param prevButton The "previous" button element.
     * @param prevIndex The index of the previous fieldset.
     * @param prevTranslateX The translateX value for the previous fieldset.
     * @param progressElement The progress element.
     * @param prevProgress The progress for the previous fieldset.
    */
    private prev;
    /**
     * Calculates the progress percentage of the form.
     * @returns The progress percentage.
    */
    get progress(): number;
    /**
     * Compartmentalizes focus within a fieldset.
     * @param fieldSet The fieldset to compartmentalize focus within.
    */
    private compartmentalizeFocusInFieldset;
    /**
     * Checks if a fieldset is valid.
     * @param fieldSet The fieldset to validate.
     * @returns true if the fieldset is valid, otherwise false.
    */
    private isValidFieldset;
    /**
     * Generates an array of target selectors for fieldsets.
     * @returns An array of target selectors.
     */
    private get fieldsetTargetArray();
    /**
     * Checks if the HTML structure of the form is valid.
     * @param form The form to validate.
     * @throws Error if the HTML structure is not valid.
     */
    private hasValidHTMLStructure;
}
