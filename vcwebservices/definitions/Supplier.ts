
/**
 * Supplier
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Supplier {
    /** s:int */
    SeqID?: number;
    /** s:string */
    Name?: string;
    /** s:string */
    AccountNo?: string;
    /** s:string */
    Reference?: string;
    /** s:int */
    CommunicationMethod?: number;
    /** s:int */
    ShippingMethod?: number;
    /** s:string */
    XMLLink?: string;
    /** s:string */
    DirectoryName?: string;
    /** s:string */
    PhysicalDirectory?: string;
    /** s:string */
    EmailAddress?: string;
    /** s:string */
    CCEmailAddress?: string;
    /** s:string */
    BCCEmailAddress?: string;
    /** s:string */
    Address1?: string;
    /** s:string */
    Address2?: string;
    /** s:string */
    Address3?: string;
    /** s:string */
    City?: string;
    /** s:string */
    State?: string;
    /** s:string */
    PostalCode?: string;
    /** s:string */
    CountryCode?: string;
    /** s:string */
    Phone?: string;
    /** s:string */
    UpsShipperNo?: string;
    /** s:string */
    UpsPickUpCode?: string;
    /** s:int */
    UPSTareWeight?: number;
    /** s:string */
    UPSPackageType?: string;
    /** s:unsignedByte */
    UPSRateType?: string;
    /** s:string */
    FEDEXAccountNumber?: string;
    /** s:string */
    FEDEXMeterNumber?: string;
    /** s:string */
    FEDEXServiceType?: string;
    /** s:string */
    FEDEXPackagingType?: string;
    /** s:int */
    FEDEXTareWeight?: number;
    /** s:int */
    TimeZone?: number;
    /** s:string */
    FEDEXSmartPostHubID?: string;
    /** s:string */
    DefaultDropShipImportDir?: string;
}
