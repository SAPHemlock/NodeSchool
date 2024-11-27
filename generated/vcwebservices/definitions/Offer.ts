import { Header2 } from "./Header2";
import { Info } from "./Info";
import { Status1 } from "./Status1";
import { Settings } from "./Settings";
import { Strings } from "./Strings";
import { Pricing } from "./Pricing";
import { Recurrence } from "./Recurrence";
import { Customization } from "./Customization";
import { Links } from "./Links";
import { Images } from "./Images";
import { Categorization } from "./Categorization";
import { DropShip } from "./DropShip";
import { EDelivery } from "./EDelivery";
import { Restrictions } from "./Restrictions";
import { Components1 } from "./Components1";
import { DropShipParts } from "./DropShipParts";
import { CustomCategories } from "./CustomCategories";
import { Upsells } from "./Upsells";
import { ClusterSurcharges } from "./ClusterSurcharges";
import { ScheduleParameters } from "./ScheduleParameters";
import { CycleBillOfMaterials } from "./CycleBillOfMaterials";

/**
 * offer
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Offer {
    /** Header */
    Header?: Header2;
    /** Info */
    Info?: Info;
    /** Status */
    Status?: Status1;
    /** Settings */
    Settings?: Settings;
    /** Strings */
    Strings?: Strings;
    /** Pricing */
    Pricing?: Pricing;
    /** Recurrence */
    Recurrence?: Recurrence;
    /** Customization */
    Customization?: Customization;
    /** Links */
    Links?: Links;
    /** Images */
    Images?: Images;
    /** Categorization */
    Categorization?: Categorization;
    /** DropShip */
    DropShip?: DropShip;
    /** EDelivery */
    EDelivery?: EDelivery;
    /** Restrictions */
    Restrictions?: Restrictions;
    /** Components */
    Components?: Components1;
    /** DropShipParts */
    DropShipParts?: DropShipParts;
    /** Categories */
    Categories?: CustomCategories;
    /** Upsells */
    Upsells?: Upsells;
    /** ClusterSurcharges */
    ClusterSurcharges?: ClusterSurcharges;
    /** ScheduleParameters */
    ScheduleParameters?: ScheduleParameters;
    /** CycleBillOfMaterials */
    CycleBillOfMaterials?: CycleBillOfMaterials;
    /** CustomAssemblySurcharges */
    CustomAssemblySurcharges?: ClusterSurcharges;
}
