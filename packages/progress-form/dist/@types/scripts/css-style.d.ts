import { StyleOptions } from "./interfaces";
import { ProgressFormType } from "./types";
export declare function cssStyle<T extends ProgressFormType>(params: T, fieldSets: NodeListOf<HTMLFieldSetElement>, translateX: number, fieldsetLength: number, fieldsetMarginWidth: number, styleOptions?: StyleOptions): void;
