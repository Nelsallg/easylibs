import { ProgressFormType } from "./scripts/types";
import { StyleOptions } from "./scripts/interfaces";
export default class ProgressForm {
    private translateX;
    private fieldsetLength;
    private enableDefaultCssStyle;
    private fieldsetMarginWidth;
    constructor(enableDefaultCssStyle?: boolean);
    private setTranslateX;
    run<T extends ProgressFormType>(params: T, styleOptions?: StyleOptions): void;
    private next;
    private prev;
    get progress(): number;
    private compartmentalizeFocusInFieldset;
    private isValidFieldset;
    private get fieldsetTargetArray();
    private hasValidHTMLStructure;
}