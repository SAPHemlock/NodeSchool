import { UserDefinedChoice } from "./UserDefinedChoice";
import { ExtensionUploads } from "./ExtensionUploads";

/**
 * VariableField
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface VariableField {
    /** s:int */
    SeqID?: number;
    /** s:string */
    FieldName?: string;
    /** UserDefinedChoice */
    UserDefinedChoice?: UserDefinedChoice;
    /** s:string */
    UserDefinedChoiceName?: string;
    /** ExtensionUploads */
    ExtensionUploads?: ExtensionUploads;
}
