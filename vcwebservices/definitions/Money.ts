import { PriceClass } from "./PriceClass";
import { NoChargeType } from "./NoChargeType";
import { DiscountCode } from "./DiscountCode";
import { Coupon } from "./Coupon";
import { GiftCertificate1 } from "./GiftCertificate1";

/**
 * Money
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Money {
    /** PriceClass */
    PriceClass?: PriceClass;
    /** s:decimal */
    ShippingHandlingCharge?: number;
    /** s:decimal */
    RushHandlingCharge?: number;
    /** NoChargeType */
    NoChargeType?: NoChargeType;
    /** s:decimal */
    DiscountAmount?: number;
    /** s:float */
    DiscountPercent?: number;
    /** DiscountCode */
    DiscountCode?: DiscountCode;
    /** Coupon */
    Coupon?: Coupon;
    /** s:decimal */
    SpecialHandlingCharge?: number;
    /** s:decimal */
    CreditAmount?: number;
    /** GiftCertificate */
    GiftCertificate?: GiftCertificate1;
    /** s:decimal */
    GiftCertificateAmount?: number;
    /** s:decimal */
    TaxPercent?: number;
    /** s:decimal */
    NoChargeAmount?: number;
    /** s:decimal */
    TaxAmount?: number;
}
