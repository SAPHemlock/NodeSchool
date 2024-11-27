import { ExpectedArrival } from "./ExpectedArrival";
import { DefaultVersion } from "./DefaultVersion";

/**
 * ExpectedArrivalComponent
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ExpectedArrivalComponent {
    /** s:int */
    SeqID?: number;
    /** ExpectedArrival */
    ExpectedArrival?: ExpectedArrival;
    /** ProductVersion */
    ProductVersion?: DefaultVersion;
    /** s:int */
    Quantity?: number;
    /** s:dateTime */
    ReceiptDate?: Date;
    /** s:int */
    ReceiptQuantity?: number;
    /** s:boolean */
    IsComplete?: boolean;
    /** s:int */
    ASNHDRSeqID?: number;
    /** s:boolean */
    IsCancel?: boolean;
}
