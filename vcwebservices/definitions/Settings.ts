import { UnitOfMeasure } from "./UnitOfMeasure";
import { AllowedQuantities } from "./AllowedQuantities";
import { ShipsSeparatelyCategory } from "./ShipsSeparatelyCategory";

/**
 * Settings
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Settings {
    /** s:int */
    Limit?: number;
    /** s:int */
    Minimum?: number;
    /** UnitOfMeasure */
    UnitOfMeasure?: UnitOfMeasure;
    /** s:boolean */
    ShipSeperately?: boolean;
    /** s:boolean */
    CaptureComments?: boolean;
    /** DisplayAvailable|s:string|Suppress,AvailableBalance,InStockOutOfStockOnly,AvailableBalanceOutOfStock */
    DisplayAvailable?: string;
    /** OrderUnavailableAction|s:string|AllowOrdering,DisplayOfferNoOrdering,SuppressWhenOutOfStock,YesMaximumOrderQtyAsAvailableQty */
    OrderUnavailableAction?: string;
    /** s:boolean */
    OnlyAllowedQuantities?: boolean;
    /** AllowedQuantities */
    AllowedQuantities?: AllowedQuantities;
    /** s:boolean */
    NoShCharges?: boolean;
    /** s:boolean */
    NoShFields?: boolean;
    /** ShipsSeparatelyCategory */
    ShipsSeparatelyCategory?: ShipsSeparatelyCategory;
}
