import { Size } from "./Size";
import { Color } from "./Color";

/**
 * SizeColorClusterProductInfo
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface SizeColorClusterProductInfo {
    /** s:int */
    ProductSeqID?: number;
    /** Size */
    Size?: Size;
    /** Color */
    Color?: Color;
}
