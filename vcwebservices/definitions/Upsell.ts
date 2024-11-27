import { UpsellOffer } from "./UpsellOffer";

/**
 * Upsell
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Upsell {
    /** s:int */
    SeqID?: number;
    /** UpsellOffer */
    UpsellOffer?: UpsellOffer;
    /** s:boolean */
    ShowOnOfferDetail?: boolean;
    /** s:string */
    OfferDetailComments?: string;
    /** s:boolean */
    ShowOnSplash?: boolean;
    /** s:string */
    SplashComments?: string;
    /** s:boolean */
    NeedsRemoval?: boolean;
}
