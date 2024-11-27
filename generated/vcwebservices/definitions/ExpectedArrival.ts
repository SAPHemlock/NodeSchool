import { ParentSystem } from "./ParentSystem";
import { Owner } from "./Owner";
import { Components2 } from "./Components2";

/**
 * expectedArrival
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ExpectedArrival {
    /** s:int */
    SeqID?: number;
    /** System */
    System?: ParentSystem;
    /** s:dateTime */
    EnteredAt?: Date;
    /** s:int */
    Job?: number;
    /** Owner */
    Owner?: Owner;
    /** s:string */
    OurPurchaseOrder?: string;
    /** s:string */
    CustomerPurchaseOrder?: string;
    /** s:dateTime */
    ArrivalTime?: Date;
    /** s:string */
    ArrivalTimeAsString?: string;
    /** s:string */
    ShippingFrom?: string;
    /** s:string */
    ShippingMethod?: string;
    /** s:string */
    Comments?: string;
    /** s:boolean */
    IsAssembly?: boolean;
    /** s:string */
    User?: string;
    /** s:dateTime */
    UTCArrivalDateTime?: Date;
    /** s:dateTime */
    UTCEnteredAt?: Date;
    /** Components */
    Components?: Components2;
}
