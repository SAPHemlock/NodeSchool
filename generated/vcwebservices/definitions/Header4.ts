import { OrderEntryView } from "./OrderEntryView";

/**
 * Header
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Header4 {
    /** s:string */
    ID?: string;
    /** s:dateTime */
    EntryDate?: Date;
    /** OrderEntryView */
    OrderEntryView?: OrderEntryView;
    /** s:string */
    ReferenceNumber?: string;
    /** s:string */
    PONumber?: string;
    /** s:string */
    Comments?: string;
    /** s:string */
    IpAddress?: string;
    /** s:string */
    ApprovalComment?: string;
    /** s:dateTime */
    InsertDate?: Date;
    /** s:dateTime */
    UTCEntryDateTime?: Date;
}
