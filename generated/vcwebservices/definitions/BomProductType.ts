
/**
 * BOMProductType
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface BomProductType {
    /** s:string */
    ProductId?: string;
    /** s:string */
    ProductDesc?: string;
    /** s:int */
    OrderQty?: number;
    /** s:int */
    ReservedQty?: number;
    /** s:int */
    MarkedQty?: number;
    /** s:int */
    PulledQty?: number;
    /** s:int */
    CanceledQty?: number;
    /** s:int */
    BackorderQty?: number;
    /** s:string */
    ProductDocID?: string;
}
