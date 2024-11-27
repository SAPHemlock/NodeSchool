import { Variables1 } from "./Variables1";
import { FreightCarrier } from "./FreightCarrier";
import { FreightService } from "./FreightService";
import { ShippingOption } from "./ShippingOption";
import { PickPacks } from "./PickPacks";

/**
 * OrderShipTo
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface OrderShipTo {
    /** s:string */
    Prefix?: string;
    /** s:string */
    FirstName?: string;
    /** s:string */
    MiddleInitial?: string;
    /** s:string */
    LastName?: string;
    /** s:string */
    Suffix?: string;
    /** s:string */
    CompanyName?: string;
    /** s:string */
    Title?: string;
    /** s:string */
    Address1?: string;
    /** s:string */
    Address2?: string;
    /** s:string */
    Address3?: string;
    /** s:string */
    City?: string;
    /** s:string */
    State?: string;
    /** s:string */
    PostalCode?: string;
    /** s:string */
    Country?: string;
    /** s:string */
    Phone?: string;
    /** s:string */
    Fax?: string;
    /** s:string */
    Email?: string;
    /** s:string */
    UID?: string;
    /** s:boolean */
    TaxExempt?: boolean;
    /** s:string */
    TaxExemptID?: string;
    /** s:boolean */
    TaxExemptApproved?: boolean;
    /** s:boolean */
    Commercial?: boolean;
    /** Variables */
    Variables?: Variables1;
    /** s:int */
    SeqID?: number;
    /** ShipToFlag|s:string|Other,OrderedBy */
    Flag?: string;
    /** s:string */
    Key?: string;
    /** s:string */
    NeededBy?: string;
    /** s:dateTime */
    ReleaseDate?: Date;
    /** s:boolean */
    Rush?: boolean;
    /** s:decimal */
    RushHandling?: number;
    /** s:string */
    Comments?: string;
    /** FreightCarrier */
    FreightCarrier?: FreightCarrier;
    /** FreightService */
    FreightService?: FreightService;
    /** s:int */
    ThirdPartyType?: number;
    /** s:string */
    ThirdPartyAccountNumber?: string;
    /** s:string */
    FreightCode?: string;
    /** s:string */
    FreightCodeDescription?: string;
    /** SpecialHandling */
    SpecialHandling?: ShippingOption;
    /** s:decimal */
    SpecialHandlingCharge?: number;
    /** s:decimal */
    ShippingHandlingCharge?: number;
    /** s:string */
    FullName?: string;
    /** s:string */
    FullNameWithSuffix?: string;
    /** s:string */
    CityStateZip?: string;
    /** s:string */
    CityStateZipCountry?: string;
    /** s:string */
    CompoundAddress?: string;
    /** PickPacks */
    PickPacks?: PickPacks;
    /** s:decimal */
    ShippingHandlingTaxAmount?: number;
    /** s:decimal */
    ShippingHandlingTaxPercent?: number;
}
