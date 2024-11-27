import { ApprovalGroup } from "./ApprovalGroup";

/**
 * ApprovalGroupUser
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ApprovalGroupUser {
    /** s:int */
    SeqID?: number;
    /** ApprovalGroup */
    ApprovalGroup?: ApprovalGroup;
}
