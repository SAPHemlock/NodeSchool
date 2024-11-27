import { Status } from "./Status";
import { Components } from "./Components";

/**
 * DefaultKit
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface DefaultKit {
    /** s:string */
    Composition?: string;
    /** s:dateTime */
    StartDate?: Date;
    /** s:dateTime */
    EndDate?: Date;
    /** s:double */
    Weight?: number;
    /** WeightType|s:string|Oz,Lbs */
    WeightType?: string;
    /** Status */
    Status?: Status;
    /** s:boolean */
    Current?: boolean;
    /** Components */
    Components?: Components;
    /** s:boolean */
    Used?: boolean;
}
