import { PriceFamily } from "./PriceFamily";
import { PriceBreaks } from "./PriceBreaks";

/**
 * Pricing
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Pricing {
    /** s:decimal */
    DefaultPrice?: number;
    /** OfferPriceType|s:string|Each,PerThousand */
    PriceType?: string;
    /** s:decimal */
    ShippingAndHandlingCharge?: number;
    /** ShippingAndHandlingChargeType|s:string|Each,PerLine,PerThousand */
    ShippingAndHandlingChargeType?: string;
    /** s:decimal */
    ChargePerPdfDownload?: number;
    /** s:decimal */
    ChargePerPptDownload?: number;
    /** s:boolean */
    Taxable?: boolean;
    /** s:boolean */
    ClusterSurcharge?: boolean;
    /** PriceFamily */
    PriceFamily?: PriceFamily;
    /** PriceBreaks */
    PriceBreaks?: PriceBreaks;
}
