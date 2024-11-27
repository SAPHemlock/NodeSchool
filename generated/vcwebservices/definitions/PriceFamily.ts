
/**
 * PriceFamily
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface PriceFamily {
    /** s:int */
    SeqID?: number;
    /** s:string */
    ID?: string;
    /** s:string */
    Description?: string;
    /** s:decimal */
    AlertPercent?: number;
    /** s:string */
    Text1?: string;
    /** PriceFamilyData|s:string|NotUsed,QuantityNeededForNextBreak,UnitPriceAtNextBreak,UnitPriceSavingsAtNextBreak */
    DataSelect1?: string;
    /** s:string */
    Text2?: string;
    /** PriceFamilyData|s:string|NotUsed,QuantityNeededForNextBreak,UnitPriceAtNextBreak,UnitPriceSavingsAtNextBreak */
    DataSelect2?: string;
    /** s:string */
    Text3?: string;
    /** PriceFamilyData|s:string|NotUsed,QuantityNeededForNextBreak,UnitPriceAtNextBreak,UnitPriceSavingsAtNextBreak */
    DataSelect3?: string;
    /** s:int */
    Sequence?: number;
}
