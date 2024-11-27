import { Product1 } from "./Product1";

/**
 * RawMaterial
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface RawMaterial {
    /** s:int */
    SeqID?: number;
    /** Component */
    Component?: Product1;
    /** s:int */
    Quantity?: number;
    /** TreatmentType|s:string|Essential,NonEssential */
    Treatment?: string;
    /** s:string */
    Instructions?: string;
    /** s:int */
    Sequence?: number;
    /** s:boolean */
    WasModified?: boolean;
    /** s:boolean */
    NeedsRemoval?: boolean;
}
