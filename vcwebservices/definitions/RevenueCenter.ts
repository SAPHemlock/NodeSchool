import { GlCode } from "./GlCode";

/**
 * RevenueCenter
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface RevenueCenter {
    /** s:int */
    SeqID?: number;
    /** s:string */
    ID?: string;
    /** s:string */
    Description?: string;
    /** GLCode */
    GLCode?: GlCode;
    /** s:boolean */
    IsDefault?: boolean;
    /** s:int */
    Sequence?: number;
}
