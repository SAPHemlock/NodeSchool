import { Supplier } from "./Supplier";

/**
 * SupplierPart
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface SupplierPart {
    /** s:int */
    SeqID?: number;
    /** Supplier */
    Supplier?: Supplier;
    /** s:dateTime */
    StartDate?: Date;
    /** s:dateTime */
    EndDate?: Date;
    /** s:string */
    PartNumber?: string;
}
