
/**
 * RemoteSystem
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface RemoteSystem {
    /** s:int */
    SeqID?: number;
    /** s:string */
    Description?: string;
    /** s:string */
    NDUrl?: string;
    /** s:string */
    NDReturnParameter?: string;
    /** s:string */
    NDParameter1?: string;
    /** s:string */
    NDParameter1Description?: string;
    /** s:string */
    NDParameter2?: string;
    /** s:string */
    NDParameter2Description?: string;
    /** s:string */
    NDParameter3?: string;
    /** s:string */
    NDParameter3Description?: string;
    /** s:string */
    ReturnDocParameter?: string;
    /** s:string */
    ReturnQuantityParameter?: string;
    /** s:string */
    EditUrl?: string;
    /** s:string */
    EditReturnParameter?: string;
    /** s:string */
    EditUIDParameter?: string;
    /** s:string */
    EditDocIDParameter?: string;
    /** s:string */
    ProofUrl?: string;
    /** s:string */
    ProofDocIDParameter?: string;
    /** s:string */
    ProofOfferIDParameter?: string;
    /** s:string */
    FinalUrl?: string;
    /** s:string */
    FinalDocIdParameter?: string;
    /** s:string */
    FinalOfferIDParameter?: string;
    /** s:boolean */
    NeedsTicket?: boolean;
    /** s:string */
    TicketRSP?: string;
    /** s:string */
    EnterDocUrl?: string;
    /** s:string */
    EnterDocParameter?: string;
    /** s:string */
    PriceParameter?: string;
    /** s:boolean */
    PassUserInfo?: boolean;
    /** s:string */
    OrderLink?: string;
    /** s:string */
    OrderDocParameter?: string;
    /** s:string */
    OrderUserParameter?: string;
    /** s:string */
    FinalTicketUrl?: string;
    /** s:string */
    ReorderUrl?: string;
    /** s:string */
    ReorderReturnParameter?: string;
    /** s:string */
    ReorderUIDParameter?: string;
    /** s:string */
    ReorderDocIDParameter?: string;
    /** s:string */
    OrderService?: string;
    /** s:string */
    OrderAction?: string;
    /** s:int */
    PMKey?: number;
    /** s:string */
    UserID?: string;
    /** s:string */
    Password?: string;
    /** s:string */
    AdditionalParameter?: string;
    /** s:string */
    CommParameter?: string;
    /** s:string */
    UpdateUrl?: string;
    /** s:string */
    QueryUrl?: string;
}
