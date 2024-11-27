import { Color } from "./Color";
import { Size } from "./Size";

/**
 * SizeColorPair
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface SizeColorPair {
    /** Color */
    Color?: Color;
    /** Size */
    Size?: Size;
}
