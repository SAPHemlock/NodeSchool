import { Product1 } from "./Product1";
import { Cluster } from "./Cluster";
import { CustomAssemblyGroup } from "./CustomAssemblyGroup";
import { RevenueCenter } from "./RevenueCenter";
import { CustomizationProfile } from "./CustomizationProfile";
import { Surcharge } from "./Surcharge";

/**
 * OfferComponent
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OfferComponent {
    /** s:int */
    SeqID?: number;
    /** Product */
    Product?: Product1;
    /** Cluster */
    Cluster?: Cluster;
    /** s:int */
    PTASKS?: number;
    /** s:int */
    Quantity?: number;
    /** s:string */
    Instructions?: string;
    /** BackorderTreatment|s:string|SystemDefault,ShipInStockBackorderRest,BackorderWholeOrder,ShipInStockCancelRest,BackorderEntireOfferLine,ShipCompleteReserveAvailable,ShipCompleteOffersReserveAvailable */
    BackorderTreatment?: string;
    /** CustomAssemblyGroup */
    CustomAssemblyGroup?: CustomAssemblyGroup;
    /** s:boolean */
    Required?: boolean;
    /** s:boolean */
    IsPrimaryRevenue?: boolean;
    /** s:decimal */
    RevenueAmount?: number;
    /** RevenueCenter */
    RevenueCenter?: RevenueCenter;
    /** s:boolean */
    UserSpecifiedQuantities?: boolean;
    /** s:boolean */
    ExcludeFromAvailability?: boolean;
    /** s:boolean */
    DoNotShipAlone?: boolean;
    /** s:boolean */
    CADefault?: boolean;
    /** s:int */
    Sequence?: number;
    /** CustomizationProfile */
    CustomizationProfile?: CustomizationProfile;
    /** Surcharge */
    Surcharge?: Surcharge;
}
