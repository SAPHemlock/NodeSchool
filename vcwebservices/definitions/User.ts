import { Ordoby } from "./Ordoby";

/**
 * user
 * @targetNSAlias `tns`
 * @targetNamespace `http://sma-promail/`
 */
export interface User {
    /** s:int */
    SeqID?: number;
    /** ORDOBY */
    ORDOBY?: Ordoby;
    /** s:string */
    UtilitiesCustomMenuTitle?: string;
    /** s:string */
    UtilitiesCustomMenuLink?: string;
    /** s:string */
    ReportsCustomMenuTitle?: string;
    /** s:string */
    ReportsCustomMenuLink?: string;
    /** s:int */
    PeopFlag?: number;
    /** s:boolean */
    WelcomeDefaults?: boolean;
    /** s:string */
    WelcomeHeading?: string;
    /** s:boolean */
    DisplayGraphs?: boolean;
    /** StartingGraphType|s:string|None,Classic,Dashboard */
    StartingGraphs?: string;
    /** s:string */
    WelcomeText?: string;
    /** s:int */
    ContactFlag?: number;
    /** s:short */
    Graph1?: number;
    /** s:short */
    Graph2?: number;
    /** s:short */
    Graph3?: number;
    /** s:short */
    Graph4?: number;
    /** ClassicGraphType|s:string|None,TopOffers,OrderVolume5Weeks,TopBackorderd,OrderVolume13Months,UnapprovedOrders,InactivatedOffers */
    Graph1Type?: string;
    /** ClassicGraphType|s:string|None,TopOffers,OrderVolume5Weeks,TopBackorderd,OrderVolume13Months,UnapprovedOrders,InactivatedOffers */
    Graph2Type?: string;
    /** ClassicGraphType|s:string|None,TopOffers,OrderVolume5Weeks,TopBackorderd,OrderVolume13Months,UnapprovedOrders,InactivatedOffers */
    Graph3Type?: string;
    /** ClassicGraphType|s:string|None,TopOffers,OrderVolume5Weeks,TopBackorderd,OrderVolume13Months,UnapprovedOrders,InactivatedOffers */
    Graph4Type?: string;
}
