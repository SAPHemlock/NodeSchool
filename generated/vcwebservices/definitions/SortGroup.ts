import { Level } from "./Level";

/**
 * SortGroup
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface SortGroup {
    /** s:string */
    Description?: string;
    /** Level */
    Level?: Level;
    /** s:string */
    SortKey?: string;
    /** s:string */
    ImagePath?: string;
    /** s:boolean */
    ImageLocal?: boolean;
    /** s:string */
    HeaderPath?: string;
    /** s:boolean */
    HeaderLocal?: boolean;
    /** s:string */
    HeaderText?: string;
    /** s:string */
    FooterPath?: string;
    /** s:boolean */
    FooterLocal?: boolean;
    /** s:string */
    FooterText?: string;
    /** s:boolean */
    SuppressImgText?: boolean;
    /** s:string */
    PrefixHTML?: string;
    /** s:string */
    SuffixHTML?: string;
    /** s:int */
    ClassicViewListType?: number;
    /** s:int */
    ShoppingCartViewListType?: number;
}
