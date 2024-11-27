import { Owner } from "./Owner";

/**
 * Header
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Header5 {
    /** Owner */
    Owner?: Owner;
    /** s:string */
    Comments?: string;
    /** s:int */
    LeadDays?: number;
}
