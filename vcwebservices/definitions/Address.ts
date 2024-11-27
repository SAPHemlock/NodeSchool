
/**
 * Address
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Address {
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
    Country?: string;
    /** s:boolean */
    Commercial?: boolean;
    /** s:string */
    CityStateZip?: string;
    /** s:string */
    CityStateZipCountry?: string;
    /** s:string */
    CompoundAddress?: string;
}
