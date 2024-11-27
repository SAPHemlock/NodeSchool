import { Product } from "./Product";

/**
 * Deactivation
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Deactivation {
    /** s:dateTime */
    DeactivatedAt?: Date;
    /** s:string */
    DeactivatedBy?: string;
    /** s:boolean */
    IsDiscontinued?: boolean;
    /** ReplacementProduct */
    ReplacementProduct?: Product;
}
