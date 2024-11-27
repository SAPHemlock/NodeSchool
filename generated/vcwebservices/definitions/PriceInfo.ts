import { PriceDetails } from "./PriceDetails";

/**
 * PriceInfo
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface PriceInfo {
    /** s:decimal */
    DefaultPrice?: number;
    /** OfferPriceType|s:string|Each,PerThousand */
    Units?: string;
    /** PriceDetails */
    PriceDetails?: PriceDetails;
}
