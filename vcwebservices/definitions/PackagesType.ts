
/**
 * PackagesType
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface PackagesType {
    /** s:string */
    PackageType?: string;
    /** s:dateTime */
    DatePacked?: Date;
    /** s:dateTime */
    DateShipped?: Date;
    /** s:dateTime */
    DateVoided?: Date;
    /** s:string */
    Carrier?: string;
    /** s:string */
    Service?: string;
    /** s:string */
    ActualService?: string;
    /** s:double */
    Weight?: number;
    /** s:double */
    ActualFreight?: number;
    /** s:double */
    ActualAdditionalChg?: number;
    /** s:string */
    TrackingId?: string;
    /** s:string */
    PickUpId?: string;
    /** s:double */
    InsuredValue?: number;
}
