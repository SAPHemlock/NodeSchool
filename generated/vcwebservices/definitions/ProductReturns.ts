
/**
 * ProductReturns
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ProductReturns {
    /** s:string */
    OrderId?: string;
    /** s:string */
    PickSlip?: string;
    /** s:dateTime */
    DateOrdered?: Date;
    /** s:dateTime */
    FirstShip?: Date;
    /** s:dateTime */
    DateReturned?: Date;
    /** s:string */
    ProductId?: string;
    /** s:string */
    Description?: string;
    /** s:string */
    ProductVersion?: string;
    /** s:string */
    Size?: string;
    /** s:string */
    Color?: string;
    /** s:string */
    OrderReasonCode?: string;
    /** s:string */
    ProductReasonCode?: string;
    /** s:int */
    ShipQty?: number;
    /** s:int */
    ReturnQty?: number;
    /** s:string */
    ProductReturnComment?: string;
    /** s:string */
    OrderReturnComment?: string;
    /** s:string */
    ReceivedAs?: string;
    /** s:int */
    PackQuantity?: number;
    /** s:string */
    PackDescription?: string;
    /** s:string */
    OrderedByCompany?: string;
    /** s:string */
    OrderedByName?: string;
    /** s:string */
    OrderedByTitle?: string;
    /** s:string */
    OrderedByAddress1?: string;
    /** s:string */
    OrderedByAddress2?: string;
    /** s:string */
    OrderedByAddress3?: string;
    /** s:string */
    OrderedByCity?: string;
    /** s:string */
    OrderedByState?: string;
    /** s:string */
    OrderedByZipcode?: string;
    /** s:string */
    OrderedByCountry?: string;
    /** s:string */
    ShipToCompany?: string;
    /** s:string */
    ShipToName?: string;
    /** s:string */
    ShipToAddress1?: string;
    /** s:string */
    ShipToAddress2?: string;
    /** s:string */
    ShipToAddress3?: string;
    /** s:string */
    ShipToCity?: string;
    /** s:string */
    ShipToState?: string;
    /** s:string */
    ShipToZipcode?: string;
    /** s:string */
    ShipToCountry?: string;
    /** s:int */
    OwnerID?: number;
    /** s:string */
    ReferenceNumber?: string;
    /** s:string */
    Disposition?: string;
    /** s:dateTime */
    EvaluationDate?: Date;
    /** s:string */
    EvaluationComments?: string;
}
