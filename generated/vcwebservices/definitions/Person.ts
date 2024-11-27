import { Name } from "./Name";
import { CompanyInfo } from "./CompanyInfo";
import { Address } from "./Address";
import { ContactInfo } from "./ContactInfo";
import { BillingInfo } from "./BillingInfo";
import { Variables1 } from "./Variables1";

/**
 * person
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Person {
    /** Name */
    Name?: Name;
    /** CompanyInfo */
    CompanyInfo?: CompanyInfo;
    /** Address */
    Address?: Address;
    /** ContactInfo */
    ContactInfo?: ContactInfo;
    /** BillingInfo */
    BillingInfo?: BillingInfo;
    /** Variables */
    Variables?: Variables1;
}
