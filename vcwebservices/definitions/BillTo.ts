import { Variables1 } from "./Variables1";

/**
 * BillTo
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface BillTo {
    /** s:string */
    Prefix?: string;
    /** s:string */
    FirstName?: string;
    /** s:string */
    MiddleInitial?: string;
    /** s:string */
    LastName?: string;
    /** s:string */
    Suffix?: string;
    /** s:string */
    CompanyName?: string;
    /** s:string */
    Title?: string;
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
    /** s:string */
    Phone?: string;
    /** s:string */
    Fax?: string;
    /** s:string */
    Email?: string;
    /** s:string */
    UID?: string;
    /** s:boolean */
    TaxExempt?: boolean;
    /** s:string */
    TaxExemptID?: string;
    /** s:boolean */
    TaxExemptApproved?: boolean;
    /** s:boolean */
    Commercial?: boolean;
    /** Variables */
    Variables?: Variables1;
    /** BillToFlag|s:string|Other,OrderedBy,DoNotUse,ShipTo */
    Flag?: string;
    /** s:string */
    FullName?: string;
    /** s:string */
    FullNameWithSuffix?: string;
    /** s:string */
    CityStateZip?: string;
    /** s:string */
    CityStateZipCountry?: string;
    /** s:string */
    CompoundAddress?: string;
}
