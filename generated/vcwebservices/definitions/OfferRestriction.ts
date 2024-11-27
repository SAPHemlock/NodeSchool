import { RestrictionType } from "./RestrictionType";

/**
 * OfferRestriction
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OfferRestriction {
    /** RestrictionType */
    RestrictionType?: RestrictionType;
    /** s:int */
    Limit?: number;
    /** SuppressOffer|s:string|No,Yes,ViewOnly */
    Suppress?: string;
    /** s:boolean */
    AllowOrdering?: boolean;
    /** s:boolean */
    SuppressDisplay?: boolean;
    /** s:boolean */
    ViewOnly?: boolean;
    /** s:boolean */
    PaymentAlwaysRequired?: boolean;
    /** s:string */
    Comments?: string;
}
