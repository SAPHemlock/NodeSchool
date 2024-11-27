import { ParentSystem } from "./ParentSystem";
import { Valuation } from "./Valuation";
import { Acquisition } from "./Acquisition";
import { GiftCertificate } from "./GiftCertificate";
import { VersionTrack } from "./VersionTrack";
import { WarehouseSystems } from "./WarehouseSystems";
import { SerialNumber } from "./SerialNumber";
import { OptionalInfo } from "./OptionalInfo";
import { BillFactors } from "./BillFactors";
import { Header } from "./Header";
import { Sort } from "./Sort";
import { Characteristics } from "./Characteristics";
import { DefaultVersion } from "./DefaultVersion";
import { DefaultKit } from "./DefaultKit";
import { Versions } from "./Versions";
import { KitCompositions } from "./KitCompositions";
import { Variables } from "./Variables";
import { Activation } from "./Activation";
import { RawMaterials } from "./RawMaterials";
import { OnOrder } from "./OnOrder";
import { UniversalProductCodes } from "./UniversalProductCodes";
import { Deactivation } from "./Deactivation";
import { ProductBillingContainers } from "./ProductBillingContainers";

/**
 * product
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Product {
    /** ParentSystem */
    ParentSystem?: ParentSystem;
    /** Valuation */
    Valuation?: Valuation;
    /** Acquisition */
    Acquisition?: Acquisition;
    /** GiftCertificate */
    GiftCertificate?: GiftCertificate;
    /** VersionTrack */
    VersionTrack?: VersionTrack;
    /** WarehouseSystems */
    WarehouseSystems?: WarehouseSystems;
    /** SerialNumber */
    SerialNumber?: SerialNumber;
    /** OptionalInfo */
    OptionalInfo?: OptionalInfo;
    /** BillFactors */
    BillFactors?: BillFactors;
    /** Header */
    Header?: Header;
    /** Sort */
    Sort?: Sort;
    /** Characteristics */
    Characteristics?: Characteristics;
    /** DefaultVersion */
    DefaultVersion?: DefaultVersion;
    /** DefaultKit */
    DefaultKit?: DefaultKit;
    /** Versions */
    Versions?: Versions;
    /** s:string */
    MainSystemID?: string;
    /** KitCompositions */
    KitCompositions?: KitCompositions;
    /** Variables */
    Variables?: Variables;
    /** Activation */
    Activation?: Activation;
    /** RawMaterials */
    RawMaterials?: RawMaterials;
    /** OnOrder */
    OnOrder?: OnOrder;
    /** UniversalProductCodes */
    UniversalProductCodes?: UniversalProductCodes;
    /** Deactivation */
    Deactivation?: Deactivation;
    /** ProductBillingContainers */
    ProductBillingContainers?: ProductBillingContainers;
}
