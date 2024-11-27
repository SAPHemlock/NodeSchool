import { PickPackProducts } from "./PickPackProducts";
import { Packages } from "./Packages";

/**
 * PickPackType
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface PickPackType {
    /** s:string */
    PickSlipID?: string;
    /** s:string */
    PickPackId?: string;
    /** s:string */
    Status?: string;
    /** s:dateTime */
    DatePicked?: Date;
    /** s:double */
    MerchAmt?: number;
    /** s:double */
    ShipHandAmt?: number;
    /** s:double */
    TaxAmt?: number;
    /** s:double */
    DiscountAmt?: number;
    /** s:string */
    HoldFlag?: string;
    /** s:double */
    SpecialHandling?: number;
    /** s:double */
    AdditionalCharge?: number;
    /** PickPackProducts */
    PickPackProducts?: PickPackProducts;
    /** Packages */
    Packages?: Packages;
}
