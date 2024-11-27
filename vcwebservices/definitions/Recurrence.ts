import { RecurrenceSchedules } from "./RecurrenceSchedules";

/**
 * Recurrence
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Recurrence {
    /** RecurrenceType|s:string|None,Automatic,ListOfSchedules */
    Recurrence?: string;
    /** RecurrenceSchedules */
    RecurrenceSchedules?: RecurrenceSchedules;
    /** s:int */
    NumberOfRecurrences?: number;
    /** BillOfMaterialsType|s:string|HardBOM,RollingBOM,BOMPerCycle */
    RecurrenceBillOfMaterialsType?: string;
    /** s:dateTime */
    RecurrenceStartDate?: Date;
    /** s:string */
    RecurrenceNone?: string;
    /** s:boolean */
    AllowSuspension?: boolean;
    /** s:boolean */
    MassRelease?: boolean;
    /** s:boolean */
    HasOrders?: boolean;
}
