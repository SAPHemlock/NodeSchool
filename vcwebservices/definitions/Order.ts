import { Header4 } from "./Header4";
import { Classification } from "./Classification";
import { Shipping } from "./Shipping";
import { Money } from "./Money";
import { Payment } from "./Payment";
import { OrderVariables } from "./OrderVariables";
import { OrderedBy } from "./OrderedBy";
import { ShipTo } from "./ShipTo";
import { BillTo } from "./BillTo";
import { Offers } from "./Offers";
import { OrderRecurrenceSchedule } from "./OrderRecurrenceSchedule";
import { OrderBudget } from "./OrderBudget";

/**
 * order
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Order {
    /** Header */
    Header?: Header4;
    /** Classification */
    Classification?: Classification;
    /** Shipping */
    Shipping?: Shipping;
    /** Money */
    Money?: Money;
    /** Payment */
    Payment?: Payment;
    /** OrderVariables */
    OrderVariables?: OrderVariables;
    /** OrderedBy */
    OrderedBy?: OrderedBy;
    /** ShipTo */
    ShipTo?: ShipTo;
    /** BillTo */
    BillTo?: BillTo;
    /** Offers */
    Offers?: Offers;
    /** OrderRecurrenceSchedule */
    OrderRecurrenceSchedule?: OrderRecurrenceSchedule;
    /** OrderBudget */
    OrderBudget?: OrderBudget;
}
