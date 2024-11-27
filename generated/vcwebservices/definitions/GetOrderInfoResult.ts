import { OrdHead } from "./OrdHead";
import { ShipToInfo } from "./ShipToInfo";
import { OfferInfo } from "./OfferInfo";
import { BillOfMaterials } from "./BillOfMaterials";
import { ShippingOrders } from "./ShippingOrders";

/**
 * GetOrderInfoResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface GetOrderInfoResult {
    /** OrdHead */
    OrdHead?: OrdHead;
    /** ShipToInfo */
    ShipToInfo?: ShipToInfo;
    /** OrderedBy */
    OrderedBy?: ShipToInfo;
    /** BillToInfo */
    BillToInfo?: ShipToInfo;
    /** OfferInfo */
    OfferInfo?: OfferInfo;
    /** BillOfMaterials */
    BillOfMaterials?: BillOfMaterials;
    /** ShippingOrders */
    ShippingOrders?: ShippingOrders;
}
