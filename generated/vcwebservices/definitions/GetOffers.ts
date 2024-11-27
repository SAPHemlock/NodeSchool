import { SortGroups } from "./SortGroups";
import { CustomCategories1 } from "./CustomCategories1";

/** GetOffers */
export interface GetOffers {
    /** sortGroups */
    sortGroups?: SortGroups;
    /** s:string */
    categoryGroupDescription?: string;
    /** customCategories */
    customCategories?: CustomCategories1;
    /** s:string */
    mailerUID?: string;
    /** s:string */
    searchString?: string;
    /** s:boolean */
    searchID?: boolean;
    /** s:boolean */
    searchDescription?: boolean;
    /** s:string */
    priceClassDescription?: string;
}
