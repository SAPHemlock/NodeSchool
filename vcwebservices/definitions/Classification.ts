import { ResponseMedia } from "./ResponseMedia";
import { Source } from "./Source";
import { Issue } from "./Issue";
import { CustomerProject } from "./CustomerProject";

/**
 * Classification
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface Classification {
    /** s:string */
    CampaignID?: string;
    /** ResponseMedia */
    ResponseMedia?: ResponseMedia;
    /** Source */
    Source?: Source;
    /** Issue */
    Issue?: Issue;
    /** CustomerProject */
    CustomerProject?: CustomerProject;
    /** s:string */
    CustomerCode?: string;
    /** s:string */
    Store?: string;
    /** s:string */
    Department?: string;
    /** s:string */
    DistributionCenter?: string;
    /** s:string */
    Vendor?: string;
}
