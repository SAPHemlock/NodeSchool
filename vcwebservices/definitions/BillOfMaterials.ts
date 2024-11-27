import { BomProductType } from "./BomProductType";

/**
 * BillOfMaterials
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface BillOfMaterials {
    /** BOMProductType[] */
    BOMProductType?: Array<BomProductType>;
}
