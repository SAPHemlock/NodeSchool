import { Details } from "./Details";

/**
 * CategoryAccessGroup
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface CategoryAccessGroup {
    /** s:int */
    SeqID?: number;
    /** s:string */
    Description?: string;
    /** Details */
    Details?: Details;
}
