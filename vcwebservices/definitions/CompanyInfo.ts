import { ShippingOption } from "./ShippingOption";

/**
 * CompanyInfo
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface CompanyInfo {
    /** s:string */
    Name?: string;
    /** s:string */
    Title?: string;
    /** s:int */
    Store?: number;
    /** DefaultShippingOption */
    DefaultShippingOption?: ShippingOption;
}
