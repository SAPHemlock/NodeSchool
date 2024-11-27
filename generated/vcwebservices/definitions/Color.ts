import { ColorClass } from "./ColorClass";

/**
 * Color
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Color {
    /** s:int */
    SeqID?: number;
    /** ColorClass */
    ColorClass?: ColorClass;
    /** s:string */
    Code?: string;
    /** s:string */
    Description?: string;
    /** s:string */
    ImagePath?: string;
    /** s:boolean */
    ImageLocal?: boolean;
    /** s:int */
    Sequence?: number;
}
