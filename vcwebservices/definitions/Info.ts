import { RevenueCenter } from "./RevenueCenter";

/**
 * Info
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Info {
    /** BillOfMaterials|s:string|ProductList,CustomAssembly,DropShip,EDelivery */
    BillOfMaterials?: string;
    /** s:boolean */
    CustomAssembly?: boolean;
    /** DropShipType|s:string|DropShip,EDelivery */
    DropShip?: string;
    /** RevenueCenter */
    RevenueCenter?: RevenueCenter;
    /** s:boolean */
    ProductImages?: boolean;
}
