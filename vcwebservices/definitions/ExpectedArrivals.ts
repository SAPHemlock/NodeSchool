
/**
 * ExpectedArrivals
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ExpectedArrivals {
    /** s:int */
    ExpectedArrivalID?: number;
    /** s:dateTime */
    DateTimeEntered?: Date;
    /** s:string */
    Warehouse?: string;
    /** s:string */
    OwnerID?: string;
    /** s:string */
    OwnerName?: string;
    /** s:string */
    ProductID?: string;
    /** s:string */
    ProductDescription?: string;
    /** s:string */
    Version?: string;
    /** s:dateTime */
    ExpectedArrivalDate?: Date;
    /** s:int */
    QTYRequested?: number;
    /** s:int */
    QTYReceivedtoDate?: number;
    /** s:short */
    Complete?: number;
    /** s:string */
    OurPO?: string;
    /** s:string */
    ClientPO?: string;
    /** s:string */
    ShippingFrom?: string;
    /** s:string */
    ShippingMethod?: string;
    /** s:string */
    Comments?: string;
}
