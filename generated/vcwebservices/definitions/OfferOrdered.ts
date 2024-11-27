import { UpsellOffer } from "./UpsellOffer";
import { OrderShipTo1 } from "./OrderShipTo1";
import { Variables2 } from "./Variables2";
import { ProductDetails } from "./ProductDetails";

/**
 * OfferOrdered
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OfferOrdered {
    /** Offer */
    Offer?: UpsellOffer;
    /** s:int */
    Quantity?: number;
    /** s:int */
    CanceledQuantity?: number;
    /** OrderShipTo */
    OrderShipTo?: OrderShipTo1;
    /** OrderShipToKey */
    OrderShipToKey?: OrderShipTo1;
    /** s:unsignedByte */
    PriceType?: string;
    /** s:decimal */
    UnitPrice?: number;
    /** s:short */
    ShipType?: number;
    /** s:decimal */
    ShippingHandling?: number;
    /** s:decimal */
    Discounts?: number;
    /** s:int */
    DiscountPercent?: number;
    /** s:string */
    DocumentID?: string;
    /** s:int */
    SeqID?: number;
    /** s:int */
    CloneLine?: number;
    /** s:boolean */
    Unapproved?: boolean;
    /** s:string */
    ShipToKey?: string;
    /** s:string */
    FgnOrder?: string;
    /** s:string */
    Comments?: string;
    /** s:string */
    RCOrderKey?: string;
    /** s:boolean */
    Recurring?: boolean;
    /** s:long */
    LineNumber?: number;
    /** s:string */
    ProofLink?: string;
    /** Variables */
    Variables?: Variables2;
    /** ProductDetails */
    ProductDetails?: ProductDetails;
    /** s:decimal */
    LineTaxPercent?: number;
    /** s:decimal */
    ShippingHandlingTaxPercent?: number;
    /** s:decimal */
    LineTaxAmount?: number;
}
