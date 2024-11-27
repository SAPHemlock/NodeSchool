import { RemoteSystem } from "./RemoteSystem";
import { CustomizationCode } from "./CustomizationCode";

/**
 * CustomizationProfile
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface CustomizationProfile {
    /** s:int */
    SeqID?: number;
    /** s:boolean */
    RemoteOnly?: boolean;
    /** s:string */
    ID?: string;
    /** RemoteSystem */
    RemoteSystem?: RemoteSystem;
    /** s:string */
    RCFld1?: string;
    /** s:string */
    RCFld2?: string;
    /** s:string */
    RCFld3?: string;
    /** s:string */
    Routing?: string;
    /** s:string */
    OrderButtonText?: string;
    /** RemotePriceTreatment|s:string|OfferPricing,RemotePriceAsUnitPrice,RemotePriceAsFlatPrice */
    RemoteSystemPricing?: string;
    /** CustomizationCode */
    CustomizationCode?: CustomizationCode;
    /** s:boolean */
    PreviewButton?: boolean;
    /** s:string */
    PreviewText?: string;
    /** s:string */
    PreviewLink?: string;
    /** s:boolean */
    AllowOrderQuantityChange?: boolean;
    /** s:string */
    RemoteLink?: string;
}
