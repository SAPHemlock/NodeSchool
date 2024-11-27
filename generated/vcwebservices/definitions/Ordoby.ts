import { ApprovalGroupUsers } from "./ApprovalGroupUsers";
import { CustomCategoryRestrictions } from "./CustomCategoryRestrictions";
import { RestrictedOwners } from "./RestrictedOwners";
import { OrderEntryView } from "./OrderEntryView";
import { Person } from "./Person";
import { CategoryAccessGroup } from "./CategoryAccessGroup";
import { DashboardProfile } from "./DashboardProfile";

/**
 * ORDOBY
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Ordoby {
    /** ApprovalGroupUsers */
    ApprovalGroupUsers?: ApprovalGroupUsers;
    /** CustomCategoryRestrictions */
    CustomCategoryRestrictions?: CustomCategoryRestrictions;
    /** RestrictedOwners */
    RestrictedOwners?: RestrictedOwners;
    /** s:int */
    SeqID?: number;
    /** s:string */
    CustomerID?: string;
    /** s:string */
    Password?: string;
    /** OrderEntryView */
    OrderEntryView?: OrderEntryView;
    /** Mailer */
    Mailer?: Person;
    /** s:string */
    CCEmail?: string;
    /** s:string */
    BCCEmail?: string;
    /** s:boolean */
    Client?: boolean;
    /** s:boolean */
    NoOfferQuantityDropDown?: boolean;
    /** s:boolean */
    RequirePasswordNextLogin?: boolean;
    /** CategoryAccessGroup */
    CategoryAccessGroup?: CategoryAccessGroup;
    /** DashboardProfile */
    DashboardProfile?: DashboardProfile;
    /** s:boolean */
    MasterApproverStatus?: boolean;
    /** s:boolean */
    IsInactive?: boolean;
}
