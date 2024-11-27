
/**
 * Status
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Status1 {
    /** s:boolean */
    Inactive?: boolean;
    /** s:dateTime */
    StartDate?: Date;
    /** s:dateTime */
    EndDate?: Date;
    /** s:string */
    InactiveText?: string;
    /** s:dateTime */
    DisplayUntil?: Date;
}
