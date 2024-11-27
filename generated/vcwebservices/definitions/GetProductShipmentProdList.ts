import { ProductIds } from "./ProductIds";

/** GetProductShipmentProdList */
export interface GetProductShipmentProdList {
    /** s:dateTime */
    StartDate?: Date;
    /** s:dateTime */
    EndDate?: Date;
    /** ProductIds */
    ProductIds?: ProductIds;
    /** s:string */
    owner?: string;
}
