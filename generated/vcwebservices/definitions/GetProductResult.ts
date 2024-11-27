import { Product } from "./Product";
import { Offer } from "./Offer";

/**
 * GetProductResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface GetProductResult {
    /** product */
    product?: Product;
    /** offer */
    offer?: Offer;
}
