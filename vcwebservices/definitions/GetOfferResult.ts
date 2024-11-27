import { Restriction1 } from "./Restriction1";
import { PriceInfo } from "./PriceInfo";
import { PriceClassStructure } from "./PriceClassStructure";

/**
 * GetOfferResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface GetOfferResult {
    /** Restriction1 */
    Restriction1?: Restriction1;
    /** Restriction2 */
    Restriction2?: Restriction1;
    /** PriceInfo */
    PriceInfo?: PriceInfo;
    /** s:int */
    SeqID?: number;
    /** s:string */
    ID?: string;
    /** s:string */
    Description?: string;
    /** s:string */
    SortKey?: string;
    /** s:int */
    OrderMinimum?: number;
    /** s:int */
    OrderLimit?: number;
    /** s:string */
    ImagePath?: string;
    /** s:boolean */
    ImageLocal?: boolean;
    /** s:string */
    FullImagePath?: string;
    /** s:string */
    PPLink?: string;
    /** s:string */
    PdfLink?: string;
    /** s:dateTime */
    StartDate?: Date;
    /** s:dateTime */
    EndDate?: Date;
    /** s:string */
    Inactive?: string;
    /** s:string */
    InactiveText?: string;
    /** s:string */
    Comments?: string;
    /** s:int */
    CustomAssem?: number;
    /** s:decimal */
    DefaultPrice?: number;
    /** PriceClassStructure */
    PriceClassStructure?: PriceClassStructure;
    /** s:int */
    Available?: number;
    /** s:int */
    ClusterCount?: number;
    /** s:boolean */
    Taxable?: boolean;
    /** s:int */
    OFFCSTSeqID?: number;
    /** s:int */
    ProdCount?: number;
    /** s:int */
    KitCount?: number;
    /** s:int */
    PODCount?: number;
    /** s:boolean */
    DropShip?: boolean;
    /** s:boolean */
    CustAssem?: boolean;
    /** s:string */
    OtherLink1?: string;
    /** s:string */
    OtherLink2?: string;
    /** s:string */
    OtherLink3?: string;
    /** s:string */
    FullImageText?: string;
    /** s:string */
    PdfText?: string;
    /** s:string */
    PPTText?: string;
    /** s:string */
    Other1Text?: string;
    /** s:string */
    Other2Text?: string;
    /** s:string */
    Other3Text?: string;
    /** s:int */
    DisplayAvailable?: number;
    /** s:int */
    OrderUnavailable?: number;
    /** s:string */
    InStockText?: string;
    /** s:string */
    OutOfStockText?: string;
    /** s:int */
    OtherOrderFlag?: number;
    /** s:string */
    OrderLink?: string;
    /** s:string */
    RCFld1?: string;
    /** s:string */
    RCFld2?: string;
    /** s:string */
    RCFld3?: string;
    /** s:int */
    OFFRCS_SeqID?: number;
    /** s:string */
    OFFRCS_NDURL?: string;
    /** s:string */
    OFFRCS_NDRTNPARM?: string;
    /** s:string */
    OFFRCS_NDparm1?: string;
    /** s:string */
    OFFRCS_NDParm2?: string;
    /** s:string */
    OFFRCS_NDParm3?: string;
    /** s:string */
    OFFRCS_EDITURL?: string;
    /** s:string */
    OFFRCS_EDITRTNPARM?: string;
    /** s:string */
    OFFRCS_EDITUIDPARM?: string;
    /** s:string */
    OFFRCS_EDITDOCIDPARM?: string;
    /** s:string */
    ButtonText?: string;
    /** s:boolean */
    AllowQuantityChange?: boolean;
    /** s:boolean */
    SelQuantityOnly?: boolean;
    /** s:boolean */
    OFFRCS_NEEDSTICKET?: boolean;
    /** s:string */
    OFFRCS_TicketRSP?: string;
    /** s:string */
    offrcs_enterdocurl?: string;
    /** s:string */
    offrcs_enterdocparm?: string;
    /** s:boolean */
    offrcs_passuserinfo?: boolean;
    /** s:string */
    AddlSearchText?: string;
    /** s:boolean */
    PFAllowReorder?: boolean;
    /** s:int */
    PFReorderExpDays?: number;
    /** s:string */
    OFFRCS_ReorderUrl?: string;
    /** s:string */
    OFFRCS_ReorderRtnParm?: string;
    /** s:string */
    OFFRCS_ReorderUIDParm?: string;
    /** s:string */
    OFFRCS_ReorderDocIDParm?: string;
    /** OfferPriceType|s:string|Each,PerThousand */
    PriceType?: string;
    /** s:int */
    MainFeature?: number;
    /** s:string */
    ReorderButtonText?: string;
    /** s:string */
    ReorderLinkText?: string;
    /** s:string */
    PreviousOrdersText?: string;
    /** s:string */
    UnitomDescription?: string;
    /** s:dateTime */
    MainFeatureEndDate?: Date;
}
