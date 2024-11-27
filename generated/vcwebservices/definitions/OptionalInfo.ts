import { SignatureRequired } from "./SignatureRequired";

/**
 * OptionalInfo
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OptionalInfo {
    /** s:string */
    CountryOrigin?: string;
    /** s:string */
    TariffCode?: string;
    /** s:decimal */
    CustomsValue?: number;
    /** s:decimal */
    Value?: number;
    /** s:decimal */
    InsuranceValue?: number;
    /** s:decimal */
    DefaultPrice?: number;
    /** PriceType|s:string|Each,PerPack */
    DefaultPriceType?: string;
    /** ReturnTreatment|s:string|CaseByCase,NotEligibleForReuse,MustBeEvaluated */
    ReturnTreatment?: string;
    /** SignatureRequired */
    SignatureRequired?: SignatureRequired;
    /** s:string */
    CommodityDescription?: string;
    /** s:string */
    NMFCNo?: string;
    /** s:string */
    FreightClass?: string;
}
