import { SortLevel } from "./SortLevel";

/**
 * SortGroup1
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface SortGroup1 {
    /** s:int */
    SeqID?: number;
    /** s:string */
    Description?: string;
    /** SortLevel */
    SortLevel?: SortLevel;
    /** s:string */
    SortKey?: string;
}
