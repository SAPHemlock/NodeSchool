import { ParentSystem } from "./ParentSystem";

/**
 * OMSSystem
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OmsSystem {
    /** s:int */
    SeqID?: number;
    /** System */
    System?: ParentSystem;
}
