import { Product } from "./Product";

/**
 * KitComponent
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface KitComponent {
    /** Product */
    Product?: Product;
    /** s:int */
    Quantity?: number;
    /** s:string */
    Instructions?: string;
    /** s:int */
    Sequence?: number;
    /** ComponentTreatment|s:string|Essential,NonEssential */
    Importance?: string;
}
