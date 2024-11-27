import { ProductType } from "./ProductType";
import { SortGroup1 } from "./SortGroup1";

/**
 * Sort
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Sort {
    /** ProductType */
    ProductType?: ProductType;
    /** SortGroup1 */
    SortGroup1?: SortGroup1;
    /** SortGroup2 */
    SortGroup2?: SortGroup1;
    /** SortGroup3 */
    SortGroup3?: SortGroup1;
    /** SortGroup4 */
    SortGroup4?: SortGroup1;
}
