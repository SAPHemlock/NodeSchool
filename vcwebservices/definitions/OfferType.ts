
/**
 * OfferType
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OfferType {
    /** s:string */
    OfferId?: string;
    /** s:string */
    OfferDesc?: string;
    /** s:string */
    OfferDocID?: string;
    /** s:int */
    OrderQty?: number;
    /** s:double */
    UnitPrice?: number;
}
