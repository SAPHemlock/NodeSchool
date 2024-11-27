import { CategoryAccessGroup } from "./CategoryAccessGroup";
import { SortGroupXRef } from "./SortGroupXRef";

/**
 * CategoryGroupDetail
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface CategoryGroupDetail {
    /** s:int */
    SeqID?: number;
    /** CategoryGroup */
    CategoryGroup?: CategoryAccessGroup;
    /** SortGroup */
    SortGroup?: SortGroupXRef;
    /** Access|s:string|No,Yes,Restricted */
    AccessFlag?: string;
}
