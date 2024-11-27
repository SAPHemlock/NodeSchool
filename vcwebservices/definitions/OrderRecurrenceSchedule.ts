import { RecurrenceSchedules } from "./RecurrenceSchedules";
import { ShippingOption } from "./ShippingOption";

/**
 * OrderRecurrenceSchedule
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OrderRecurrenceSchedule {
    /** RecurrenceSchedules */
    RecurrenceSchedules?: RecurrenceSchedules;
    /** s:boolean */
    RecurrenceOfferFlag?: boolean;
    /** RecurrenceShippingOption */
    RecurrenceShippingOption?: ShippingOption;
    /** s:decimal */
    RecurrenceSpecialHandlingCharge?: number;
    /** s:int */
    NumberRecurrence?: number;
}
