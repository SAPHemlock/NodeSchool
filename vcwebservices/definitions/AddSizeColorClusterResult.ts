import { Products1 } from "./Products1";

/**
 * AddSizeColorClusterResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface AddSizeColorClusterResult {
    /** s:boolean */
    NewCluster?: boolean;
    /** s:int */
    ClusterSeqID?: number;
    /** s:int */
    OfferSeqID?: number;
    /** Products */
    Products?: Products1;
}
