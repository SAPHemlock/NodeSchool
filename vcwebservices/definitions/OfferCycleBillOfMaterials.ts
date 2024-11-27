import { UpsellOffer } from "./UpsellOffer";

/**
 * OfferCycleBillOfMaterials
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OfferCycleBillOfMaterials {
    /** s:int */
    SeqID?: number;
    /** s:int */
    Sequence?: number;
    /** s:dateTime */
    CycleDate?: Date;
    /** CBOffer */
    CBOffer?: UpsellOffer;
}
