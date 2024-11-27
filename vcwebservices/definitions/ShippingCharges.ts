
/**
 * ShippingCharges
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ShippingCharges {
    /** s:string */
    PPSlip?: string;
    /** s:string */
    OrderId?: string;
    /** s:string */
    level1Name?: string;
    /** s:string */
    level1Company?: string;
    /** s:string */
    level2Name?: string;
    /** s:string */
    level2Company?: string;
    /** s:string */
    level3Name?: string;
    /** s:string */
    level3Company?: string;
    /** s:string */
    level4Name?: string;
    /** s:string */
    level4Company?: string;
    /** s:string */
    level5Name?: string;
    /** s:string */
    level5Company?: string;
    /** s:dateTime */
    DateShipped?: Date;
    /** s:string */
    FreightCarrier?: string;
    /** s:string */
    FreightDescription?: string;
    /** s:string */
    TrackingID?: string;
    /** s:string */
    PackageType?: string;
    /** s:float */
    PackageWeight?: number;
    /** s:decimal */
    FreightCost?: number;
    /** s:string */
    PickupNumber?: string;
    /** s:string */
    OrderedBYFirstName?: string;
    /** s:string */
    OrderedBYLastName?: string;
    /** s:string */
    OrderedBYCompany?: string;
    /** s:string */
    OrderedBYAddress1?: string;
    /** s:string */
    OrderedBYAddress2?: string;
    /** s:string */
    OrderedBYAddress3?: string;
    /** s:string */
    OrderedBYCity?: string;
    /** s:string */
    OrderedBYState?: string;
    /** s:string */
    OrderedBYZipCode?: string;
    /** s:string */
    OrderedBYCountry?: string;
    /** s:string */
    OrderedBYPhone?: string;
    /** s:string */
    OrderedBYFax?: string;
    /** s:string */
    OrderedBYEmail?: string;
    /** s:string */
    OrderedbyUID?: string;
    /** s:string */
    ShippedToFirstName?: string;
    /** s:string */
    ShippedToLastName?: string;
    /** s:string */
    ShippedToCompany?: string;
    /** s:string */
    ShippedToAddress1?: string;
    /** s:string */
    ShippedToAddress2?: string;
    /** s:string */
    ShippedToAddress3?: string;
    /** s:string */
    ShippedToCity?: string;
    /** s:string */
    ShippedToState?: string;
    /** s:string */
    ShippedToZipCode?: string;
    /** s:string */
    ShippedToCountry?: string;
    /** s:string */
    ShippedToPhone?: string;
    /** s:string */
    ShippedToFax?: string;
    /** s:string */
    ShippedToEmail?: string;
    /** s:string */
    ShippedToUID?: string;
    /** s:string */
    Ref?: string;
    /** s:string */
    Po?: string;
    /** s:int */
    Source?: number;
    /** s:string */
    SourceDescription?: string;
    /** s:int */
    RspnmdNumber?: number;
    /** s:string */
    Rspnmd?: string;
    /** s:int */
    CstprjID?: number;
    /** s:string */
    Cstprj?: string;
    /** s:string */
    CatAccess?: string;
    /** s:decimal */
    PackCost?: number;
    /** s:string */
    OBYMailerClass?: string;
    /** s:string */
    STOMailerClass?: string;
    /** s:string */
    ShipHyperlink?: string;
    /** s:string */
    ShippingOrderType?: string;
    /** s:string */
    CarrierCode?: string;
    /** s:string */
    FreightService?: string;
}
