import { PricingStructure } from "./PricingStructure";
import { PriceClass } from "./PriceClass";

/**
 * PricingDetail
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface PricingDetail {
    /** PricingStructure */
    PricingStructure?: PricingStructure;
    /** PriceClass */
    PriceClass?: PriceClass;
    /** s:int */
    Start?: number;
    /** s:string */
    End?: string;
    /** s:decimal */
    Price?: number;
}
