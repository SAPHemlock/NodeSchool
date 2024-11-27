import { RecurrenceSchedules } from "./RecurrenceSchedules";
import { ShippingOption } from "./ShippingOption";

/**
 * RecurrenceScheduleShippingOption
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface RecurrenceScheduleShippingOption {
    /** s:int */
    SeqID?: number;
    /** RecurrenceSchedules */
    RecurrenceSchedules?: RecurrenceSchedules;
    /** ShippingOption */
    ShippingOption?: ShippingOption;
}
