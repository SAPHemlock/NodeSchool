import { SortGroup } from "./SortGroup";
import { SortGroupXRef } from "./SortGroupXRef";

/**
 * OfferSort
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OfferSort {
    /** s:int */
    BranchCount?: number;
    /** SortGroup */
    SortGroup?: SortGroup;
    /** SortGroupXRef */
    SortGroupXRef?: SortGroupXRef;
    /** s:boolean */
    Feature?: boolean;
    /** s:dateTime */
    FeatureEndDate?: Date;
}
