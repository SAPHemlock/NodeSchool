import { VariableField } from "./VariableField";

/**
 * OfferVariable
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OfferVariable {
    /** s:int */
    SeqID?: number;
    /** VariableField */
    VariableField?: VariableField;
    /** s:string */
    Value?: string;
}
