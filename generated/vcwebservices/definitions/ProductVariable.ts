import { VariableField } from "./VariableField";

/**
 * ProductVariable
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ProductVariable {
    /** s:int */
    SeqID?: number;
    /** VariableField */
    VariableField?: VariableField;
    /** s:string */
    Value?: string;
}
