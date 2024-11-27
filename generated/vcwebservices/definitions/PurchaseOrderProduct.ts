import { Product1 } from "./Product1";

/**
 * PurchaseOrderProduct
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface PurchaseOrderProduct {
    /** s:int */
    SeqID?: number;
    /** Product */
    Product?: Product1;
    /** s:int */
    Quantity?: number;
    /** OfferPriceType|s:string|Each,PerThousand */
    PriceType?: string;
    /** s:decimal */
    ValuationPrice?: number;
    /** s:decimal */
    ExtendedValuationPrice?: number;
    /** s:string */
    POLineNumber?: string;
    /** s:int */
    QuantityReceived?: number;
    /** s:int */
    Complete?: number;
    /** s:int */
    PurchaseOrderDetails?: number;
    /** s:decimal */
    UnitPrice?: number;
    /** s:decimal */
    ExtendedPrice?: number;
    /** s:dateTime */
    ExpectedArrivalDate?: Date;
}
