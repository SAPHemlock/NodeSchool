import { ParentSystem } from "./ParentSystem";

/**
 * WarehouseLevels
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface WarehouseLevels {
    /** Warehouse */
    Warehouse?: ParentSystem;
    /** s:string */
    PartNumber?: string;
    /** s:string */
    PartDescription?: string;
    /** s:string */
    Size?: string;
    /** s:string */
    Color?: string;
    /** BuildType|s:string|Product,Kit,POD,MOD,EPOD */
    ProductType?: string;
    /** s:int */
    OnHand?: number;
    /** s:int */
    Reserved?: number;
    /** s:int */
    Marked?: number;
    /** s:int */
    Backordered?: number;
    /** s:int */
    Needed?: number;
    /** s:int */
    Unavailable?: number;
    /** s:int */
    Expected?: number;
    /** s:int */
    OnOrder?: number;
    /** s:int */
    Available?: number;
    /** s:int */
    TotalReserved?: number;
}
