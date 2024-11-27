
/**
 * DropShip
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface DropShip {
    /** s:string */
    CheckOutText?: string;
    /** s:double */
    Weight?: number;
    /** WeightType|s:string|Oz,Lbs */
    WeightType?: string;
}
