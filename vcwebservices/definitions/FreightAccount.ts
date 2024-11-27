import { FreightCarrier } from "./FreightCarrier";
import { Person } from "./Person";

/**
 * FreightAccount
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface FreightAccount {
    /** s:int */
    SeqID?: number;
    /** s:string */
    Description?: string;
    /** FreightCarrier */
    FreightCarrier?: FreightCarrier;
    /** Person */
    Person?: Person;
    /** s:string */
    ThirdAcctNo?: string;
    /** s:boolean */
    NonResident?: boolean;
}
