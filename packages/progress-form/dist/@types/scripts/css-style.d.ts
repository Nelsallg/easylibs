import { StyleOptions } from "./interfaces";
import { ProgressFormType } from "./types";
declare type animationType = {
    targets: (Element | string)[];
    translateX: number;
};
export declare function cssStyle(params: ProgressFormType, fieldSets: NodeListOf<HTMLFieldSetElement>, translateX: number, fieldsetLength: number, fieldsetMarginWidth: number, styleOptions?: StyleOptions): void;
export declare function anime(options: animationType): void;
export {};
