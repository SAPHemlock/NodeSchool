
/**
 * Acquisition
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Acquisition {
    /** AcquisitionType|s:string|Unknown,Make,Buy,Receive */
    AcquisitionType?: string;
    /** s:dateTime */
    AcquisitionDate?: Date;
    /** s:string */
    AcquisitionFrom?: string;
    /** s:string */
    AcquisitionComments?: string;
}
