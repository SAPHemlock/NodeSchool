import { SortGroupings } from "./SortGroupings";
import { CustomCategories } from "./CustomCategories";

/**
 * Categorization
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Categorization {
    /** s:boolean */
    FeaturedOnMain?: boolean;
    /** s:dateTime */
    MainFeatureEndDate?: Date;
    /** SortGroupings */
    SortGroupings?: SortGroupings;
    /** CustomCategories */
    CustomCategories?: CustomCategories;
}
