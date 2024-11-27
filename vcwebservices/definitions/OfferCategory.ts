import { Category } from "./Category";

/**
 * OfferCategory
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OfferCategory {
    /** s:int */
    SeqID?: number;
    /** Category */
    Category?: Category;
}
