import { FreightCarrier } from "./FreightCarrier";
import { FreightService } from "./FreightService";

/**
 * FreightCode
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface FreightCode {
    /** s:int */
    SeqID?: number;
    /** s:string */
    CarrierCode?: string;
    /** s:string */
    Description?: string;
    /** FreightCarrier */
    FreightCarrier?: FreightCarrier;
    /** FreightService */
    FreightService?: FreightService;
    /** s:short */
    Default?: number;
    /** s:string */
    SCACCode?: string;
    /** s:boolean */
    ContinentalUS?: boolean;
    /** s:boolean */
    Canada?: boolean;
    /** s:boolean */
    Mexico?: boolean;
    /** s:boolean */
    Alaska?: boolean;
    /** s:boolean */
    Hawaii?: boolean;
    /** s:boolean */
    PuertoRico?: boolean;
    /** s:boolean */
    International?: boolean;
    /** s:int */
    DeliveryDays?: number;
    /** s:dateTime */
    GuaranteedDeliveryTime?: Date;
    /** WeightType|s:string|Oz,Lbs */
    WeightType?: string;
    /** s:double */
    MinimumWeight?: number;
    /** s:double */
    MaximumWeight?: number;
    /** s:double */
    MaxDimensionalWeight?: number;
    /** s:boolean */
    Metric?: boolean;
    /** s:double */
    MaximumWidth?: number;
    /** s:double */
    MaximumLength?: number;
    /** s:double */
    MaximumHeight?: number;
    /** s:double */
    MaximumLengthGirth?: number;
    /** s:boolean */
    Commercial?: boolean;
    /** s:boolean */
    Residential?: boolean;
    /** s:boolean */
    RuralRoutes?: boolean;
    /** s:boolean */
    PostOfficeBoxes?: boolean;
    /** s:boolean */
    SaturdayDelivery?: boolean;
    /** s:boolean */
    Active?: boolean;
    /** s:boolean */
    PromailDistributed?: boolean;
    /** s:string */
    SystemID?: string;
    /** s:string */
    XmlServiceType?: string;
    /** s:boolean */
    SmartPost?: boolean;
    /** s:string */
    SmartPostIndiciaType?: string;
    /** s:string */
    SmartPostAncillaryEndorsement?: string;
}
