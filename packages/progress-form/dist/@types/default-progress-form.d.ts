import { StyleOptions } from "./scripts/interfaces";
import { ProgressFormType, PreventType, ProgressingType, RenderedStyle } from "./scripts/types";
/**
 * ProgressForm represents a class for managing a progressive form.
 */
export default class ProgressForm {
    form: HTMLFormElement;
    enableDefaultCssStyle: boolean;
    protected translateX: number;
    protected fieldsetLength: number;
    protected fieldsetMarginWidth: number;
    protected progressOptions: ProgressFormType;
    protected progressingData: ProgressingType;
    protected lastIndex: number;
    protected isLazyProgress: boolean;
    protected lazyFieldsetLength: number;
    protected renderedStyle: RenderedStyle;
    protected animation: boolean;
    protected fieldSetElement: HTMLElement | null;
    /**
     * @param enableDefaultCssStyle Determines whether the default CSS style should be enabled. Default is true.
     */
    constructor(form: HTMLFormElement, enableDefaultCssStyle?: boolean);
    /**
     * Retrieves and initializes all data and variables for running
     * @param progressOptions The parameters of the form.
     * @returns
     */
    protected init(progressOptions: ProgressFormType): {
        fieldSets: NodeListOf<HTMLFieldSetElement>;
        nextIndex: number;
        prevTranslateX: number;
        PROGRESS: number;
        prevIndex: number;
        progressElement: HTMLElement;
    };
    /**
     * Executes the progressive form.
     * @param params The parameters of the form.
     * @param styleOptions Style options for the form, fieldsets and fieldsets parent elements.
    */
    run(progressOptions?: ProgressFormType, styleOptions?: StyleOptions, preventProgress?: PreventType): void;
    /**
     * Handles the "next" button click event.
     * @param nextIndex The index of the next fieldset.
     * @param nextTranslateX The translateX value for the next fieldset.
     * @param nextButton The "next" button element.
     * @param progressElement The progress element.
     * @param nextProgress The progress for the next fieldset.
     */
    next(nextIndex: number, nextTranslateX: number, nextButton?: HTMLElement, progressElement?: HTMLElement, nextProgress?: number): void;
    /**
     * Handles the "previous" button click event.
     * @param prevIndex The index of the previous fieldset.
     * @param prevTranslateX The translateX value for the previous fieldset.
     * @param prevButton The "previous" button element.
     * @param progressElement The progress element.
     * @param prevProgress The progress for the previous fieldset.
    */
    prev(prevIndex: number, prevTranslateX: number, prevButton?: HTMLElement, progressElement?: HTMLElement, prevProgress?: number): void;
    /**
     * Calculates the progress percentage of the form.
     * @returns The progress percentage.
    */
    get PROGRESS(): number;
    /**
     * Retrieve progress data for each fieldset
     */
    get PROGRESSING_DATA(): ProgressingType;
    get RENDERED_STYLE(): RenderedStyle;
    protected formatProgressingData(i: number): void;
    /**
     * Compartmentalizes focus within a fieldset.
     * @param fieldSet The fieldset to compartmentalize focus within.
    */
    protected compartmentalizeFocusInFieldset(fieldSet: HTMLElement): void;
    /**
     * Checks if a fieldset is valid.
     * @param fieldSet The fieldset to validate.
     * @returns true if the fieldset is valid, otherwise false.
    */
    protected isValidFieldset(fieldSet: HTMLElement): boolean;
    /**
     * Generates an array of target selectors for fieldsets.
     * @returns An array of target selectors.
     */
    protected get fieldsetTargetArray(): string[];
    /**
     * Checks if the HTML structure of the form is valid.
     * @param form The form to validate.
     * @throws Error if the HTML structure is not valid.
     */
    protected hasValidHTMLStructure(form: HTMLFormElement): void;
    /**
     * Defines the movement of each fieldset.
     * @param params The parameters for setting translateX.
     * @param fieldSet The fieldset element.
    */
    protected setTranslateX(fieldSet: HTMLElement, progressOptions?: ProgressFormType): void;
}
