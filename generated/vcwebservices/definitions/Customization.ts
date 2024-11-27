import { CustomizationCode } from "./CustomizationCode";
import { RemoteSystem } from "./RemoteSystem";
import { CustomizationProfile } from "./CustomizationProfile";

/**
 * Customization
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Customization {
    /** s:boolean */
    RemoteOnly?: boolean;
    /** s:string */
    LinkToRemote?: string;
    /** s:string */
    OrderButtonText?: string;
    /** s:boolean */
    AllowOrderQuantityChange?: boolean;
    /** RemotePriceTreatment|s:string|OfferPricing,RemotePriceAsUnitPrice,RemotePriceAsFlatPrice */
    RemotePriceTreatment?: string;
    /** CustomizationCode */
    CustomizationCode?: CustomizationCode;
    /** s:boolean */
    PreviewButton?: boolean;
    /** s:string */
    PreviewText?: string;
    /** s:string */
    PreviewLink?: string;
    /** s:boolean */
    PFAllowReorder?: boolean;
    /** s:int */
    PFReorderExpDays?: number;
    /** s:string */
    ReorderBtnText?: string;
    /** s:string */
    ReorderLinkText?: string;
    /** s:string */
    PrevOrdersText?: string;
    /** s:string */
    RemoteSystemParameter1?: string;
    /** s:string */
    RemoteSystemParameter2?: string;
    /** s:string */
    RemoteSystemParameter3?: string;
    /** RemoteSystem */
    RemoteSystem?: RemoteSystem;
    /** s:string */
    Routing?: string;
    /** CustomizationProfile */
    CustomizationProfile?: CustomizationProfile;
}
