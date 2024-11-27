import { RestrictionType } from "./RestrictionType";
import { PriceClass } from "./PriceClass";
import { MailerClass } from "./MailerClass";

/**
 * BillingInfo
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface BillingInfo {
    /** s:boolean */
    TaxExempt?: boolean;
    /** s:string */
    TaxExemptID?: string;
    /** s:boolean */
    TaxExemptApproved?: boolean;
    /** RestrictionType1 */
    RestrictionType1?: RestrictionType;
    /** RestrictionType2 */
    RestrictionType2?: RestrictionType;
    /** PriceClass */
    PriceClass?: PriceClass;
    /** MailerClass */
    MailerClass?: MailerClass;
}
