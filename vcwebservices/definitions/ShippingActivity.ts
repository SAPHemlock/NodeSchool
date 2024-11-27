
/**
 * ShippingActivity
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ShippingActivity {
    /** s:string */
    ShipDate?: string;
    /** s:string */
    OrderId?: string;
    /** s:string */
    PickPackId?: string;
    /** s:string */
    Type?: string;
    /** s:int */
    LinesShipped?: number;
    /** s:int */
    PiecesShipped?: number;
    /** s:int */
    NumberofPackages?: number;
    /** s:double */
    TotalWeight?: number;
    /** s:decimal */
    PublishedFreight?: number;
    /** s:decimal */
    ActualFreight?: number;
    /** s:decimal */
    MarkedUpFreight?: number;
    /** s:string */
    ShippingOrderType?: string;
}
