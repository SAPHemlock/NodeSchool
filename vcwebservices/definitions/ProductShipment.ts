
/**
 * ProductShipment
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface ProductShipment {
    /** s:string */
    Owner?: string;
    /** s:string */
    OrderId?: string;
    /** s:dateTime */
    OrderDate?: Date;
    /** s:dateTime */
    ShipDate?: Date;
    /** s:string */
    OrderedByCo?: string;
    /** s:string */
    OrderedByName?: string;
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
    Zip?: string;
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
    /** s:string */
    ShipToCo?: string;
    /** s:string */
    ShipToName?: string;
    /** s:string */
    STOAddress1?: string;
    /** s:string */
    STOAddress2?: string;
    /** s:string */
    STOAddress3?: string;
    /** s:string */
    STOCity?: string;
    /** s:string */
    STOState?: string;
    /** s:string */
    asSTOZip?: string;
    /** s:string */
    STOCountry?: string;
    /** s:string */
    STOPhone?: string;
    /** s:string */
    STOFax?: string;
    /** s:string */
    STOEmail?: string;
    /** s:string */
    STOUID?: string;
    /** s:string */
    Source?: string;
    /** s:int */
    OrderQty?: number;
    /** s:int */
    ShipQty?: number;
    /** s:int */
    OnHandQty?: number;
    /** s:int */
    ReOrderPoint?: number;
    /** s:string */
    PartNum?: string;
    /** s:string */
    Version?: string;
    /** s:string */
    Description?: string;
    /** s:string */
    Size?: string;
    /** s:string */
    Color?: string;
    /** s:string */
    SortLvl1?: string;
    /** s:string */
    SortLvl2?: string;
    /** s:string */
    SortLvl3?: string;
    /** s:string */
    SortLv4?: string;
    /** s:decimal */
    FifoValue?: number;
    /** s:decimal */
    DefaultValue?: number;
    /** s:decimal */
    ExtendedFifoValue?: number;
    /** s:decimal */
    ExtendedDefaultValue?: number;
    /** s:string */
    OrdVarFld1?: string;
    /** s:string */
    OrdVarValue1?: string;
    /** s:string */
    OrdVarFld2?: string;
    /** s:string */
    OrdVarValue2?: string;
    /** s:string */
    OrdVarFld3?: string;
    /** s:string */
    OrdVarValue3?: string;
    /** s:string */
    OrdVarFld4?: string;
    /** s:string */
    OrdVarValue4?: string;
    /** s:string */
    OrdVarFld5?: string;
    /** s:string */
    OrdVarValue5?: string;
    /** s:string */
    OrdVarFld6?: string;
    /** s:string */
    OrdVarValue6?: string;
    /** s:string */
    OrdVarFld7?: string;
    /** s:string */
    OrdVarValue7?: string;
    /** s:string */
    OrdVarFld8?: string;
    /** s:string */
    OrdVarValue8?: string;
    /** s:string */
    OrdVarFld9?: string;
    /** s:string */
    OrdVarValue9?: string;
    /** s:string */
    OrdVarFld10?: string;
    /** s:string */
    OrdVarValue10?: string;
    /** s:string */
    ProdVarFld1?: string;
    /** s:string */
    ProdVarValue1?: string;
    /** s:string */
    ProdVarFld2?: string;
    /** s:string */
    ProdVarValue2?: string;
    /** s:string */
    ProdVarFld3?: string;
    /** s:string */
    ProdVarValue3?: string;
    /** s:string */
    ProdVarFld4?: string;
    /** s:string */
    ProdVarValue4?: string;
    /** s:string */
    ProdVarFld5?: string;
    /** s:string */
    ProdVarValue5?: string;
    /** s:string */
    ProdVarFld6?: string;
    /** s:string */
    ProdVarValue6?: string;
    /** s:string */
    ProdVarFld7?: string;
    /** s:string */
    ProdVarValue7?: string;
    /** s:string */
    ProdVarFld8?: string;
    /** s:string */
    ProdVarValue8?: string;
    /** s:string */
    ProdVarFld9?: string;
    /** s:string */
    ProdVarValue9?: string;
    /** s:string */
    ProdVarFld10?: string;
    /** s:string */
    ProdVarValue10?: string;
    /** s:string */
    ProdVarFld11?: string;
    /** s:string */
    ProdVarValue11?: string;
    /** s:string */
    ProdVarFld12?: string;
    /** s:string */
    ProdVarValue12?: string;
    /** s:string */
    ProdVarFld13?: string;
    /** s:string */
    ProdVarValue13?: string;
    /** s:string */
    ProdVarFld14?: string;
    /** s:string */
    ProdVarValue14?: string;
    /** s:string */
    ProdVarFld15?: string;
    /** s:string */
    ProdVarValue15?: string;
    /** s:string */
    ProdVarFld16?: string;
    /** s:string */
    ProdVarValue16?: string;
    /** s:string */
    ProdVarFld17?: string;
    /** s:string */
    ProdVarValue17?: string;
    /** s:string */
    ProdVarFld18?: string;
    /** s:string */
    ProdVarValue18?: string;
    /** s:string */
    ProdVarFld19?: string;
    /** s:string */
    ProdVarValue19?: string;
    /** s:string */
    ProdVarFld20?: string;
    /** s:string */
    ProdVarValue20?: string;
    /** s:string */
    Rep1Name?: string;
    /** s:string */
    Rep1Company?: string;
    /** s:string */
    Rep1Title?: string;
    /** s:string */
    Rep2Name?: string;
    /** s:string */
    Rep2Company?: string;
    /** s:string */
    Rep2Title?: string;
    /** s:string */
    Rep3Name?: string;
    /** s:string */
    Rep3Company?: string;
    /** s:string */
    Rep3Title?: string;
    /** s:string */
    Rep4Name?: string;
    /** s:string */
    Rep4Company?: string;
    /** s:string */
    Rep4Title?: string;
    /** s:string */
    Rep5Name?: string;
    /** s:string */
    Rep5Company?: string;
    /** s:string */
    Rep5Title?: string;
    /** s:string */
    Rep6Name?: string;
    /** s:string */
    Rep6Company?: string;
    /** s:string */
    Rep6Title?: string;
    /** s:string */
    Rep7Name?: string;
    /** s:string */
    Rep7Company?: string;
    /** s:string */
    Rep7Title?: string;
    /** s:string */
    Rep8Name?: string;
    /** s:string */
    Rep8Company?: string;
    /** s:string */
    Rep8Title?: string;
    /** s:string */
    Rep9Name?: string;
    /** s:string */
    Rep9Company?: string;
    /** s:string */
    Rep9Title?: string;
    /** s:string */
    Rep10Name?: string;
    /** s:string */
    Rep10Company?: string;
    /** s:string */
    Rep10Title?: string;
    /** s:string */
    ReferenceNo?: string;
    /** s:string */
    PO?: string;
    /** s:string */
    OBYMailerClass?: string;
    /** s:string */
    STOMailerClass?: string;
    /** s:string */
    PickSlipId?: string;
    /** s:int */
    ProductOwner?: number;
    /** s:string */
    ProjectId?: string;
    /** s:string */
    ProjectDesc?: string;
}
