
/**
 * JobTemplate
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface JobTemplate {
    /** s:int */
    SeqID?: number;
    /** s:int */
    PROJCT_Seqid?: number;
    /** s:string */
    Description?: string;
    /** s:string */
    Instructions?: string;
    /** s:dateTime */
    OrderDate?: Date;
    /** s:dateTime */
    ReadyDate?: Date;
    /** s:short */
    ReleaseSooner?: number;
    /** s:short */
    ReadyStatus?: number;
    /** s:string */
    JobStatus?: string;
    /** s:string */
    WorkStatus?: string;
    /** s:dateTime */
    MailDate?: Date;
}
