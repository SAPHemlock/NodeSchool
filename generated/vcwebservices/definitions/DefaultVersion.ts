import { Product1 } from "./Product1";
import { Status } from "./Status";
import { Disposition } from "./Disposition";

/**
 * DefaultVersion
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface DefaultVersion {
    /** s:int */
    SeqID?: number;
    /** Product */
    Product?: Product1;
    /** s:string */
    UID?: string;
    /** s:string */
    Date?: string;
    /** s:string */
    Comments?: string;
    /** s:dateTime */
    StartDate?: Date;
    /** s:dateTime */
    EndDate?: Date;
    /** s:double */
    Weight?: number;
    /** WeightType|s:string|Oz,Lbs */
    WeightType?: string;
    /** s:string */
    Version?: string;
    /** Status */
    Status?: Status;
    /** Disposition */
    Disposition?: Disposition;
    /** s:int */
    Order?: number;
    /** s:boolean */
    HasWarehouseTransactions?: boolean;
}
