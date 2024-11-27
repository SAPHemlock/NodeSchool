import { Header5 } from "./Header5";
import { Characteristics } from "./Characteristics";
import { Valuation } from "./Valuation";
import { WarehouseSystems } from "./WarehouseSystems";
import { OptionalInfo } from "./OptionalInfo";
import { BillFactors } from "./BillFactors";
import { Sort } from "./Sort";
import { Activation } from "./Activation";
import { ProductBillingContainers } from "./ProductBillingContainers";

/**
 * ProductTemplate
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ProductTemplate {
    /** Header */
    Header?: Header5;
    /** Characteristics */
    Characteristics?: Characteristics;
    /** Valuation */
    Valuation?: Valuation;
    /** WarehouseSystems */
    WarehouseSystems?: WarehouseSystems;
    /** OptionalInfo */
    OptionalInfo?: OptionalInfo;
    /** BillFactors */
    BillFactors?: BillFactors;
    /** Sort */
    Sort?: Sort;
    /** Activation */
    Activation?: Activation;
    /** ProductBillingContainers */
    ProductBillingContainers?: ProductBillingContainers;
}
