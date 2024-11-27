import { VariableField } from "./VariableField";

/**
 * PersonVariable
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface PersonVariable {
    /** VariableField */
    VariableField?: VariableField;
    /** s:string */
    Value?: string;
    /** s:string */
    ValueDescription?: string;
}
