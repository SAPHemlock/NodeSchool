import { RecurrenceScheduleShippingOptions } from "./RecurrenceScheduleShippingOptions";

/**
 * RecurrenceSchedules
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface RecurrenceSchedules {
    /** s:int */
    SeqID?: number;
    /** s:string */
    ID?: string;
    /** s:string */
    Description?: string;
    /** s:string */
    Definition?: string;
    /** s:string */
    DefinitionDetail?: string;
    /** ScheduleType|s:string|EveryXDays,EveryXWeeks,EveryXMonths */
    Schedule?: string;
    /** s:int */
    ScheduleCount?: number;
    /** CycleType|s:string|Rolling,Custom */
    Cycle?: string;
    /** s:dateTime */
    StartCycleDate?: Date;
    /** s:int */
    DaysToJoin?: number;
    /** MonthlyRecurrenceTypes|s:string|DayOfMonth,WeekOfMonthAndDayOfWeek */
    MonthlyRecurrenceType?: string;
    /** s:int */
    MinimumRecurrences?: number;
    /** s:int */
    MaximumRecurrences?: number;
    /** s:int */
    RecurrenceIncrement?: number;
    /** s:boolean */
    AllowInfiniteRecurrence?: boolean;
    /** s:string */
    InfiniteTag?: string;
    /** s:string */
    DurationTag?: string;
    /** s:dateTime */
    ExpirationDate?: Date;
    /** s:dateTime */
    NextCycleDate?: Date;
    /** s:boolean */
    HasValidCycleDate?: boolean;
    /** s:boolean */
    AnyOffer?: boolean;
    /** RecurrenceScheduleShippingOptions */
    RecurrenceScheduleShippingOptions?: RecurrenceScheduleShippingOptions;
}
