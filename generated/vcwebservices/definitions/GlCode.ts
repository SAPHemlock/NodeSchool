
/**
 * GLCode
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface GlCode {
    /** s:int */
    SeqID?: number;
    /** s:string */
    ID?: string;
    /** s:string */
    Description?: string;
    /** GLCodeType|s:string|Sales,Cash,OrderDiscounts,PaymentDiscounts,AR,Tax,Credits,ShippingHandling,GiftCertificatesRedeemed,RushCharge,OfferShippingHandling,PackageCharge,BillBack,SpecialHandling,NoChargeDiscounts,OverUnderPayments,OrderReturns */
    Type?: string;
    /** s:boolean */
    Removable?: boolean;
    /** s:boolean */
    NeedsRemoval?: boolean;
    /** s:boolean */
    WasModified?: boolean;
}
