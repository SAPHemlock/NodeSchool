import { Owner } from "./Owner";

/**
 * RestrictedOwner
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface RestrictedOwner {
    /** s:int */
    SeqID?: number;
    /** Owner */
    Owner?: Owner;
    /** s:boolean */
    Access?: boolean;
}
