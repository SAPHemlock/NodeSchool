import { Color } from "./Color";
import { Size } from "./Size";

/**
 * Characteristics
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Characteristics {
    /** s:double */
    Height?: number;
    /** s:double */
    Width?: number;
    /** s:double */
    Length?: number;
    /** s:double */
    DefaultWeight?: number;
    /** WeightType|s:string|Oz,Lbs */
    DefaultWeightType?: string;
    /** s:string */
    PackDescription?: string;
    /** Color */
    Color?: Color;
    /** Size */
    Size?: Size;
    /** s:boolean */
    PrePack?: boolean;
    /** s:int */
    PackQuantity?: number;
    /** PackTrack|s:string|Each,Containers */
    PackTrack?: string;
    /** s:boolean */
    ShipSeparatePackages?: boolean;
    /** s:boolean */
    ImageLocal?: boolean;
    /** s:string */
    ImageDirectory?: string;
    /** s:string */
    ImagePathThumbnail?: string;
    /** s:string */
    ImagePathFull?: string;
    /** s:int */
    ClusterSequence?: number;
    /** s:double */
    PRDUCT_SpoilagePercent?: number;
    /** s:int */
    PRDUCT_SpoilageRoundingQuantity?: number;
    /** s:double */
    PPCubicFoot?: number;
    /** s:double */
    CubicFeetPP?: number;
}
