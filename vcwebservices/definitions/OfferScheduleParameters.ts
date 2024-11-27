import { RecurrenceSchedules } from "./RecurrenceSchedules";

/**
 * OfferScheduleParameters
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OfferScheduleParameters {
    /** s:int */
    SeqID?: number;
    /** RecurrenceSchedules */
    RecurrenceSchedules?: RecurrenceSchedules;
    /** s:string */
    OverrideDescription?: string;
    /** RecurrenceDurationType|s:string|Infinitely,NumberOfCycles,EndDate */
    DurationType?: string;
    /** s:int */
    MinimumRecurrences?: number;
    /** s:int */
    MaximumRecurrences?: number;
    /** s:int */
    RecurrenceIncrement?: number;
    /** s:dateTime */
    LastCycleDate?: Date;
    /** s:decimal */
    DiscountPercentage?: number;
    /** s:string */
    DiscountText?: string;
}
