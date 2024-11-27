import { FreightCarrier } from "./FreightCarrier";
import { FreightService } from "./FreightService";
import { FreightAccount } from "./FreightAccount";
import { ShippingOption } from "./ShippingOption";

/**
 * Shipping
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Shipping {
    /** FreightCarrier */
    FreightCarrier?: FreightCarrier;
    /** FreightService */
    FreightService?: FreightService;
    /** FreightAccount */
    FreightAccount?: FreightAccount;
    /** ShippingOption */
    ShippingOption?: ShippingOption;
    /** s:string */
    FreightCode?: string;
    /** s:string */
    FreightCodeDescription?: string;
    /** s:string */
    ShipComments?: string;
    /** s:string */
    NeededBy?: string;
    /** s:boolean */
    Rush?: boolean;
    /** s:dateTime */
    ReleaseDate?: Date;
    /** s:int */
    ThirdPartyType?: number;
    /** s:string */
    ThirdAccountNumber?: string;
    /** s:boolean */
    NCShip?: boolean;
    /** s:boolean */
    NCPack?: boolean;
    /** s:boolean */
    NCOffers?: boolean;
    /** s:boolean */
    NCHandling?: boolean;
    /** s:boolean */
    NCOffShipHandling?: boolean;
    /** s:boolean */
    NCSpecialHandling?: boolean;
    /** s:boolean */
    NCRush?: boolean;
}
