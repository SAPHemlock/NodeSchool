import { SortGroupType } from "./SortGroupType";

/**
 * SortLevel
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface SortLevel {
    /** s:int */
    SeqID?: number;
    /** s:string */
    Description?: string;
    /** s:int */
    Order?: number;
    /** SortGroupType */
    SortGroupType?: SortGroupType;
    /** s:boolean */
    IsActive?: boolean;
    /** s:boolean */
    IsEnabled?: boolean;
}
