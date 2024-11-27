
/**
 * Cluster
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Cluster {
    /** s:int */
    SeqID?: number;
    /** s:string */
    PartNumber?: string;
    /** s:string */
    Description?: string;
    /** s:boolean */
    IsProductList?: boolean;
    /** EntryMode|s:string|DropDown,TableListing,IDAndDescriptionTableListing */
    OrderingMode?: string;
    /** s:string */
    DropDownText?: string;
    /** s:string */
    ProductIDHeader?: string;
}
