import { PaymentType } from "./PaymentType";

/**
 * Payment
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Payment {
    /** PaymentType */
    PaymentType?: PaymentType;
    /** s:decimal */
    PaymentAmount?: number;
    /** s:string */
    CCNumber?: string;
    /** s:string */
    CCExpirationDate?: string;
    /** s:string */
    CSC?: string;
    /** s:string */
    ARReference?: string;
    /** s:string */
    Token?: string;
    /** s:string */
    TransactionID?: string;
    /** s:string */
    AuthorizationCode?: string;
    /** s:decimal */
    AuthorizationAmount?: number;
    /** s:dateTime */
    AuthorizationDate?: Date;
}
