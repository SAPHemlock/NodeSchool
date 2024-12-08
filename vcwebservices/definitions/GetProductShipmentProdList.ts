import { ProductIDs } from "./ProductIds";

/** GetProductShipmentProdList */
export interface GetProductShipmentProdList {
  /** s:dateTime */
  StartDate?: Date;
  /** s:dateTime */
  EndDate?: Date;
  /** ProductIds */
  ProductIds?: ProductIDs;
  /** s:string */
  owner?: string;
}
