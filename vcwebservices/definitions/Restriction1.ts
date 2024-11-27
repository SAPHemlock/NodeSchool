import { RestrictionType } from "./RestrictionType";

/**
 * Restriction1
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Restriction1 {
    /** RestrictionType */
    RestrictionType?: RestrictionType;
    /** s:int */
    QuantityRemaining?: number;
    /** s:int */
    QuantityOrdered?: number;
}
