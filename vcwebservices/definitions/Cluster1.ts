import { Cluster } from "./Cluster";
import { Offer } from "./Offer";
import { SizeColorPairs } from "./SizeColorPairs";
import { SizeClass } from "./SizeClass";
import { ColorClass } from "./ColorClass";
import { ProductTemplate } from "./ProductTemplate";

/**
 * cluster
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Cluster1 {
    /** Cluster */
    Cluster?: Cluster;
    /** Offer */
    Offer?: Offer;
    /** SizeColorPairs */
    SizeColorPairs?: SizeColorPairs;
    /** SizeClass */
    SizeClass?: SizeClass;
    /** ColorClass */
    ColorClass?: ColorClass;
    /** ProductTemplate */
    ProductTemplate?: ProductTemplate;
}
