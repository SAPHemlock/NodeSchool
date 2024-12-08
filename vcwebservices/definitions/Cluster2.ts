import { Cluster } from "./Cluster";
import { Offer } from "./Offer";
import { ProductIDs } from "./ProductIds";
import { Activation } from "./Activation";

/**
 * cluster
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Cluster2 {
  /** Cluster */
  Cluster?: Cluster;
  /** Offer */
  Offer?: Offer;
  /** ProductIDs */
  ProductIDs?: ProductIDs;
  /** Activation */
  Activation?: Activation;
}
