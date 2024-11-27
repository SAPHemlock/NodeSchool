import { ParentSystem } from "./ParentSystem";

/**
 * ProductWMSSystem
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ProductWmsSystem {
    /** s:int */
    SeqID?: number;
    /** System */
    System?: ParentSystem;
    /** s:int */
    ReorderPoint?: number;
    /** s:int */
    ReorderAmount?: number;
    /** s:string */
    ReorderComments?: string;
    /** CountFrequency|s:string|Never,OnDemand,Daily,Weekly,BiWeekly,Monthly,BiMonthly,Quarterly,SemiAnnually,Annually */
    CountFrequency?: string;
    /** s:int */
    Reserved?: number;
    /** s:int */
    Tie?: number;
    /** s:int */
    High?: number;
    /** s:boolean */
    Active?: boolean;
    /** s:boolean */
    Deleted?: boolean;
    /** s:boolean */
    IsDefault?: boolean;
}
