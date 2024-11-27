import { SortGroupType } from "./SortGroupType";
import { BillCode } from "./BillCode";

/**
 * Owner
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Owner {
    /** s:int */
    SeqID?: number;
    /** SortGroupType */
    SortGroupType?: SortGroupType;
    /** s:string */
    ID?: string;
    /** s:string */
    CompanyName?: string;
    /** BillCode */
    BillCode?: BillCode;
    /** ProductHistoryTransactionTypes|s:string|OnePerTransaction,OnePerDay */
    ProductHistoryTransactionType?: string;
}
