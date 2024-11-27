import { OrderShipTo } from "./OrderShipTo";
import { FreightCode } from "./FreightCode";

/**
 * PickPack
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface PickPack {
    /** s:int */
    SeqID?: number;
    /** OrderShipTo */
    OrderShipTo?: OrderShipTo;
    /** s:int */
    PPSBAT_Seqid?: number;
    /** s:dateTime */
    PickPackageDateTime?: Date;
    /** s:string */
    SystemID?: string;
    /** s:string */
    Status?: string;
    /** s:dateTime */
    MessagedDate?: Date;
    /** s:string */
    ShipOrderID?: string;
    /** s:dateTime */
    PickedDate?: Date;
    /** s:decimal */
    MerAmt?: number;
    /** s:decimal */
    ShipHand?: number;
    /** s:decimal */
    TaxAmt?: number;
    /** s:decimal */
    PICPAK_DiscAmt?: number;
    /** s:boolean */
    Hold?: boolean;
    /** s:int */
    CREDBT_Seqid?: number;
    /** s:decimal */
    SpecHand?: number;
    /** s:decimal */
    AddlCharge?: number;
    /** s:int */
    SUPPLR_Seqid?: number;
    /** s:boolean */
    ShpConfEmail?: boolean;
    /** s:boolean */
    NeedsInvoice?: boolean;
    /** s:string */
    SOTYPE?: string;
    /** s:decimal */
    CreditAmount?: number;
    /** s:decimal */
    GCAmt?: number;
    /** s:string */
    PICPAK_TaxTranID?: string;
    /** s:boolean */
    ChargeComplete?: boolean;
    /** s:decimal */
    OfferShipHand?: number;
    /** s:decimal */
    RushHand?: number;
    /** s:decimal */
    PackCharges?: number;
    /** s:decimal */
    ShipCharges?: number;
    /** s:decimal */
    NCAmount?: number;
    /** s:decimal */
    NCUsed?: number;
    /** s:decimal */
    BudgetAmount?: number;
    /** FreightCode */
    FreightCode?: FreightCode;
    /** s:string */
    InterceptComments?: string;
}
