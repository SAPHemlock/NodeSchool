import { Offer } from "./Offer";
import { Product } from "./Product";

/**
 * Surcharge
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Surcharge {
    /** s:int */
    SeqID?: number;
    /** Offer */
    Offer?: Offer;
    /** Product */
    Product?: Product;
    /** s:decimal */
    Surcharge?: number;
    /** s:string */
    SurchargeText?: string;
}
