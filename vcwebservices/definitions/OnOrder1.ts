import { PurchaseOrder } from "./PurchaseOrder";
import { PurchaseOrderProduct } from "./PurchaseOrderProduct";

/**
 * OnOrder
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OnOrder1 {
    /** s:int */
    OnOrderSeqID?: number;
    /** PurchaseOrder */
    PurchaseOrder?: PurchaseOrder;
    /** s:int */
    OnOrderProductSeqID?: number;
    /** PurchaseOrderProduct */
    PurchaseOrderProduct?: PurchaseOrderProduct;
    /** s:string */
    ReferenceNumber?: string;
    /** s:string */
    PurchaseOrderNumber?: string;
    /** s:dateTime */
    DateRecorded?: Date;
    /** s:dateTime */
    ApproximateReceiveDate?: Date;
    /** s:string */
    FromWhere?: string;
    /** s:string */
    Comments?: string;
    /** OfferPriceType|s:string|Each,PerThousand */
    PriceType?: string;
    /** s:int */
    Quantity?: number;
    /** s:decimal */
    UnitPrice?: number;
    /** s:decimal */
    ExtendedPrice?: number;
    /** s:int */
    QuantityReceived?: number;
    /** s:dateTime */
    UTCDateRecorded?: Date;
    /** s:boolean */
    ToDelete?: boolean;
}
