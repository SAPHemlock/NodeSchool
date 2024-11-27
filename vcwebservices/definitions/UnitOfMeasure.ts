
/**
 * UnitOfMeasure
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface UnitOfMeasure {
    /** s:int */
    SeqID?: number;
    /** s:string */
    Description?: string;
    /** s:string */
    ID?: string;
    /** s:int */
    Sequence?: number;
    /** s:boolean */
    Removable?: boolean;
    /** s:boolean */
    NeedsRemoval?: boolean;
    /** s:boolean */
    WasModified?: boolean;
}
