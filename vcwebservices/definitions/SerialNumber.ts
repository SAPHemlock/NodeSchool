
/**
 * SerialNumber
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface SerialNumber {
    /** SerialNumbers|s:string|NoSerialNumbers,ShippingTime,TrackedInWMS,TableValidationShipTime */
    SerialNumbers?: string;
    /** s:boolean */
    SNCasePacks?: boolean;
    /** s:int */
    CasePackQuantity?: number;
}
