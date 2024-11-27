import { CategoryDef } from "./CategoryDef";

/**
 * Category
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Category {
    /** s:int */
    SeqID?: number;
    /** CategoryDef */
    CategoryDef?: CategoryDef;
    /** s:string */
    Description?: string;
    /** s:int */
    Sequence?: number;
}
