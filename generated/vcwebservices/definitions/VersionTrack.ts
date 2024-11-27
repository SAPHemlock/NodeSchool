
/**
 * VersionTrack
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface VersionTrack {
    /** s:boolean */
    VersionTrack?: boolean;
    /** VersionSequence|s:string|FirstAvailable,Manual */
    VersionSequence?: string;
    /** s:int */
    InactiveVersionDays?: number;
}
