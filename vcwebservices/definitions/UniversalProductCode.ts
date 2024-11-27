import { Product } from "./Product";

/**
 * UniversalProductCode
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface UniversalProductCode {
    /** s:int */
    SeqID?: number;
    /** Product */
    Product?: Product;
    /** s:string */
    Code?: string;
    /** s:int */
    UnitQuantity?: number;
}
