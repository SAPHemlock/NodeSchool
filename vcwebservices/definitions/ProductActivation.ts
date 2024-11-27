import { OmsSystem } from "./OmsSystem";
import { Cluster } from "./Cluster";
import { Product } from "./Product";

/**
 * ProductActivation
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ProductActivation {
    /** s:int */
    SeqID?: number;
    /** OMSSystem */
    OMSSystem?: OmsSystem;
    /** Cluster */
    Cluster?: Cluster;
    /** s:boolean */
    Active?: boolean;
    /** s:boolean */
    Discontinued?: boolean;
    /** ReplacementProduct */
    ReplacementProduct?: Product;
    /** s:boolean */
    RecallSO?: boolean;
    /** s:boolean */
    OfferTreat?: boolean;
    /** s:boolean */
    KitTreat?: boolean;
    /** s:int */
    BundleQuantity?: number;
    /** s:decimal */
    PackCharge?: number;
}
