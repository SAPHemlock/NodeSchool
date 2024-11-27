import { Owner } from "./Owner";
import { Vendor } from "./Vendor";
import { ParentSystem } from "./ParentSystem";
import { Products } from "./Products";

/**
 * PurchaseOrder
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface PurchaseOrder {
    /** s:int */
    SeqID?: number;
    /** s:string */
    ReferenceNumber?: string;
    /** Owner */
    Owner?: Owner;
    /** s:string */
    PONumber?: string;
    /** s:dateTime */
    DateRecorded?: Date;
    /** s:dateTime */
    ApproximateArrivalDate?: Date;
    /** s:string */
    FromWhere?: string;
    /** s:string */
    Comments?: string;
    /** s:int */
    Job?: number;
    /** s:int */
    Project?: number;
    /** s:int */
    JobPackage?: number;
    /** Vendor */
    Vendor?: Vendor;
    /** System */
    System?: ParentSystem;
    /** s:string */
    ShipTo?: string;
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
    /** s:dateTime */
    UTCDateRecorded?: Date;
    /** Products */
    Products?: Products;
}
