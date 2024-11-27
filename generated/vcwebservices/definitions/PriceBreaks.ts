import { PricingStructure } from "./PricingStructure";
import { Breaks } from "./Breaks";

/**
 * PriceBreaks
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface PriceBreaks {
    /** PricingStructure */
    PricingStructure?: PricingStructure;
    /** QuantityBreakType|s:string|PerOffer,PerLineItem,PriceFamily */
    QuantityBreakType?: string;
    /** Breaks */
    Breaks?: Breaks;
}
