import { Owner } from "./Owner";
import { CostCenter } from "./CostCenter";
import { JobTemplate } from "./JobTemplate";

/**
 * Header
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Header {
    /** s:int */
    SeqID?: number;
    /** s:string */
    PartNumber?: string;
    /** s:string */
    Description?: string;
    /** s:string */
    Comments?: string;
    /** s:int */
    LeadDays?: number;
    /** BuildType|s:string|Product,Kit,POD,MOD,EPOD */
    BuildType?: string;
    /** UsageCode|s:string|ExclusiveToOwner,AllLocationsForClient,AnyClient */
    UsageCode?: string;
    /** s:boolean */
    OfferFlag?: boolean;
    /** s:dateTime */
    UserDate?: Date;
    /** Owner */
    Owner?: Owner;
    /** CostCenter */
    CostCenter?: CostCenter;
    /** JobTemplate */
    JobTemplate?: JobTemplate;
    /** ProductHistoryDetailLevels|s:string|OnePerTransaction,OnePerTransactionTypePerDay */
    ProductHistoryDetailLevel?: string;
    /** CreatedBy|s:string|WebService,Client,NonClient */
    CreatedByUserType?: string;
}
