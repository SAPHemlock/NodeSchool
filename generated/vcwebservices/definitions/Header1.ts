import { Owner } from "./Owner";

/**
 * Header
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Header1 {
    /** s:int */
    SeqID?: number;
    /** s:string */
    PartNumber?: string;
    /** Owner */
    Owner?: Owner;
    /** s:string */
    Description?: string;
}
