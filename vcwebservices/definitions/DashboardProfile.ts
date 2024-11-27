import { SystemCategory } from "./SystemCategory";

/**
 * DashboardProfile
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface DashboardProfile {
    /** s:int */
    SeqID?: number;
    /** s:string */
    Description?: string;
    /** SystemCategory */
    SystemCategory?: SystemCategory;
}
