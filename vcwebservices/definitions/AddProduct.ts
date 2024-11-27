import { Product } from "./Product";
import { Offer } from "./Offer";

/** AddProduct */
export interface AddProduct {
    /** product */
    product?: Product;
    /** offer */
    offer?: Offer;
}
