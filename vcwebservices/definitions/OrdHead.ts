import { Status2 } from "./Status2";

/**
 * OrdHead
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OrdHead {
    /** s:string */
    OrderId?: string;
    /** s:dateTime */
    EntryDate?: Date;
    /** s:dateTime */
    UploadDate?: Date;
    /** s:string */
    View?: string;
    /** s:string */
    Stream?: string;
    /** s:string */
    ReferenceNo?: string;
    /** s:string */
    CampaignId?: string;
    /** s:string */
    PoNum?: string;
    /** s:string */
    ResponseMethod?: string;
    /** s:string */
    Source?: string;
    /** s:string */
    SourceDetail?: string;
    /** s:string */
    OrderComment?: string;
    /** s:string */
    Carrier?: string;
    /** s:string */
    Service?: string;
    /** s:string */
    ShipComment?: string;
    /** s:string */
    NeedBy?: string;
    /** s:string */
    RushFlag?: string;
    /** Status */
    Status?: Status2;
    /** s:string */
    PaymentType?: string;
    /** s:string */
    PriceClass?: string;
    /** s:string */
    CCNumber?: string;
    /** s:string */
    ExpirationDate?: string;
    /** s:double */
    ShipHandCharge?: number;
    /** s:double */
    AdditionalCharge?: number;
    /** s:double */
    DiscountPct?: number;
    /** s:double */
    TaxPct?: number;
    /** s:double */
    SpecialHandCharge?: number;
    /** s:string */
    ShippingOption?: string;
    /** s:double */
    ShippingOptionCharge?: number;
}
