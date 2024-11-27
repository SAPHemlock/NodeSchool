import { SizeClass } from "./SizeClass";

/**
 * Size
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Size {
    /** s:int */
    SeqID?: number;
    /** s:string */
    Description?: string;
    /** s:string */
    Code?: string;
    /** SizeClass */
    SizeClass?: SizeClass;
    /** s:int */
    Sequence?: number;
}
