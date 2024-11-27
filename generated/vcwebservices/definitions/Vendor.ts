import { OmsSystem } from "./OmsSystem";

/**
 * Vendor
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Vendor {
    /** s:int */
    SeqID?: number;
    /** s:string */
    ID?: string;
    /** s:string */
    Name?: string;
    /** s:string */
    Contact?: string;
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
    Email?: string;
    /** VendorStatus|s:string|Active,Inactive,Historical */
    Status?: string;
    /** s:boolean */
    Hold?: boolean;
    /** s:string */
    Comments?: string;
    /** OMSSystem */
    OMSSystem?: OmsSystem;
    /** s:string */
    Phone?: string;
    /** s:string */
    Fax?: string;
    /** s:decimal */
    MinimumPurchaseAmount?: number;
}
