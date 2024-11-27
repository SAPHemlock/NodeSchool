import { Category } from "./Category";

/**
 * UserCategoryRestriction
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface UserCategoryRestriction {
    /** s:int */
    SeqID?: number;
    /** CustomCategory */
    CustomCategory?: Category;
}
