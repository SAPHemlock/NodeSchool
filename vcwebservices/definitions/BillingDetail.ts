
/**
 * BillingDetail
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface BillingDetail {
    /** s:dateTime */
    ShippingDate?: Date;
    /** s:string */
    OrderID?: string;
    /** s:int */
    ShippingOrderID?: number;
    /** s:string */
    PickPackID?: string;
    /** s:int */
    LineItemQty?: number;
    /** s:decimal */
    ChargePerLine?: number;
    /** s:int */
    PackageQty?: number;
    /** s:decimal */
    PackageCost?: number;
    /** s:int */
    CreditCardTransQty?: number;
    /** s:decimal */
    CreditCardTransCost?: number;
    /** s:int */
    BillingUnitsQty?: number;
    /** s:decimal */
    BillingUnitsCost?: number;
    /** s:decimal */
    BundleCost?: number;
    /** s:decimal */
    PublishedFreight?: number;
    /** s:decimal */
    ActualFreight?: number;
    /** s:decimal */
    MarkedUpFreight?: number;
    /** s:decimal */
    ChargePerShipment?: number;
    /** s:decimal */
    TotalMerchandiseCharge?: number;
    /** s:string */
    ProjectID?: string;
    /** s:string */
    ProjectDescription?: string;
    /** s:string */
    OrderReferenceNumber?: string;
    /** s:string */
    OrdersPONumber?: string;
    /** s:string */
    OBYName?: string;
    /** s:string */
    OBYCOMPANY?: string;
    /** s:string */
    OBYADDR1?: string;
    /** s:string */
    OBYADDR2?: string;
    /** s:string */
    OBYADDR3?: string;
    /** s:string */
    OBYCITY?: string;
    /** s:string */
    OBYST?: string;
    /** s:string */
    OBYZIP?: string;
    /** s:string */
    OBYCOUNTRY?: string;
    /** s:string */
    STOName?: string;
    /** s:string */
    STOCOMPANY?: string;
    /** s:string */
    STOADDR1?: string;
    /** s:string */
    STOADDR2?: string;
    /** s:string */
    STOADDR3?: string;
    /** s:string */
    STOCITY?: string;
    /** s:string */
    STOST?: string;
    /** s:string */
    STOZIP?: string;
    /** s:string */
    STOCOUNTRY?: string;
    /** s:string */
    BTOName?: string;
    /** s:string */
    BTOCOMPANY?: string;
    /** s:string */
    BTOADDR1?: string;
    /** s:string */
    BTOADDR2?: string;
    /** s:string */
    BTOADDR3?: string;
    /** s:string */
    BTOCITY?: string;
    /** s:string */
    BTOST?: string;
    /** s:string */
    BTOZIP?: string;
    /** s:string */
    BTOCOUNTRY?: string;
    /** s:string */
    SOURCE?: string;
    /** s:string */
    OrderStream?: string;
    /** s:decimal */
    ShippingHandlingCharges?: number;
    /** s:string */
    VarFld1?: string;
    /** s:string */
    VarVal1?: string;
    /** s:string */
    VarFld2?: string;
    /** s:string */
    VarVal2?: string;
    /** s:string */
    VarFld3?: string;
    /** s:string */
    VarVal3?: string;
    /** s:string */
    VarFld4?: string;
    /** s:string */
    VarVal4?: string;
    /** s:string */
    VarFld5?: string;
    /** s:string */
    VarVal5?: string;
    /** s:string */
    VarFld6?: string;
    /** s:string */
    VarVal6?: string;
    /** s:string */
    VarFld7?: string;
    /** s:string */
    VarVal7?: string;
    /** s:string */
    VarFld8?: string;
    /** s:string */
    VarVal8?: string;
    /** s:string */
    VarFld9?: string;
    /** s:string */
    VarVal9?: string;
    /** s:string */
    VarFld10?: string;
    /** s:string */
    VarVal10?: string;
    /** s:string */
    FirstShipCarrier?: string;
    /** s:string */
    FirstShipSvc?: string;
    /** s:int */
    BUKey?: number;
    /** s:string */
    ShipmentOrderType?: string;
    /** s:string */
    RushOrder?: string;
    /** s:decimal */
    RushSurcharge?: number;
}
