import { VariableField } from "./VariableField";

/**
 * OrderVariable
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OrderVariable {
    /** s:int */
    SeqID?: number;
    /** VariableField */
    VariableField?: VariableField;
    /** s:string */
    Value?: string;
    /** s:string */
    ValueDescription?: string;
}
