import { VariableFields } from "./VariableFields";

/**
 * CustomizationCode
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface CustomizationCode {
    /** s:int */
    SeqID?: number;
    /** s:string */
    ID?: string;
    /** s:string */
    Description?: string;
    /** s:string */
    Comments?: string;
    /** VariableFields */
    VariableFields?: VariableFields;
}
