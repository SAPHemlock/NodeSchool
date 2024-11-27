
/**
 * EDelivery
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface EDelivery {
    /** s:boolean */
    UploadAttempted?: boolean;
    /** s:boolean */
    UploadSuccess?: boolean;
    /** s:string */
    Directory?: string;
    /** s:string */
    Filename?: string;
    /** s:int */
    ExpirationDays?: number;
}
