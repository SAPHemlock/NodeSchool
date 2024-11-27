import {
  Client as SoapClient,
  createClientAsync as soapCreateClientAsync,
  IExOptions as ISoapExOptions,
} from "soap";
import { AddProduct } from "./definitions/AddProduct";
import { AddProductResponse } from "./definitions/AddProductResponse";
import { SaveOffer } from "./definitions/SaveOffer";
import { SaveOfferResponse } from "./definitions/SaveOfferResponse";
import { AddPurchaseOrder } from "./definitions/AddPurchaseOrder";
import { AddPurchaseOrderResponse } from "./definitions/AddPurchaseOrderResponse";
import { SaveExpectedArrival } from "./definitions/SaveExpectedArrival";
import { SaveExpectedArrivalResponse } from "./definitions/SaveExpectedArrivalResponse";
import { CancelExpectedArrival } from "./definitions/CancelExpectedArrival";
import { CancelExpectedArrivalResponse } from "./definitions/CancelExpectedArrivalResponse";
import { CancelExpectedArrivalComponent } from "./definitions/CancelExpectedArrivalComponent";
import { CancelExpectedArrivalComponentResponse } from "./definitions/CancelExpectedArrivalComponentResponse";
import { GetOrderInfo } from "./definitions/GetOrderInfo";
import { GetOrderInfoResponse } from "./definitions/GetOrderInfoResponse";
import { GetOffers } from "./definitions/GetOffers";
import { GetOffersResponse } from "./definitions/GetOffersResponse";
import { AddMailer } from "./definitions/AddMailer";
import { AddMailerResponse } from "./definitions/AddMailerResponse";
import { AddPreRegisteredUser } from "./definitions/AddPreRegisteredUser";
import { AddPreRegisteredUserResponse } from "./definitions/AddPreRegisteredUserResponse";
import { GetDetailedBilling } from "./definitions/GetDetailedBilling";
import { GetDetailedBillingResponse } from "./definitions/GetDetailedBillingResponse";
import { GetProductShipmentAllProds } from "./definitions/GetProductShipmentAllProds";
import { GetProductShipmentAllProdsResponse } from "./definitions/GetProductShipmentAllProdsResponse";
import { GetProductShipmentProdList } from "./definitions/GetProductShipmentProdList";
import { GetProductShipmentProdListResponse } from "./definitions/GetProductShipmentProdListResponse";
import { GetShippingActivity } from "./definitions/GetShippingActivity";
import { GetShippingActivityResponse } from "./definitions/GetShippingActivityResponse";
import { GetProductReturns } from "./definitions/GetProductReturns";
import { GetProductReturnsResponse } from "./definitions/GetProductReturnsResponse";
import { GetProductSerialNumbers } from "./definitions/GetProductSerialNumbers";
import { GetProductSerialNumbersResponse } from "./definitions/GetProductSerialNumbersResponse";
import { GetShippingCharge } from "./definitions/GetShippingCharge";
import { GetShippingChargeResponse } from "./definitions/GetShippingChargeResponse";
import { AddOrder } from "./definitions/AddOrder";
import { AddOrderResponse } from "./definitions/AddOrderResponse";
import { AddSizeColorCluster } from "./definitions/AddSizeColorCluster";
import { AddSizeColorClusterResponse } from "./definitions/AddSizeColorClusterResponse";
import { AddProductListCluster } from "./definitions/AddProductListCluster";
import { AddProductListClusterResponse } from "./definitions/AddProductListClusterResponse";
import { CreateProductFromJson } from "./definitions/CreateProductFromJson";
import { CreateProductFromJsonResponse } from "./definitions/CreateProductFromJsonResponse";
import { CreateOfferFromJson } from "./definitions/CreateOfferFromJson";
import { CreateOfferFromJsonResponse } from "./definitions/CreateOfferFromJsonResponse";
import { CreateExpectedArrivalFromJson } from "./definitions/CreateExpectedArrivalFromJson";
import { CreateExpectedArrivalFromJsonResponse } from "./definitions/CreateExpectedArrivalFromJsonResponse";
import { CreatePurchaseOrderFromJson } from "./definitions/CreatePurchaseOrderFromJson";
import { CreatePurchaseOrderFromJsonResponse } from "./definitions/CreatePurchaseOrderFromJsonResponse";
import { CreateUserPreRegisteredFromJson } from "./definitions/CreateUserPreRegisteredFromJson";
import { CreateUserPreRegisteredFromJsonResponse } from "./definitions/CreateUserPreRegisteredFromJsonResponse";
import { CreateSizeColorClusterFromJson } from "./definitions/CreateSizeColorClusterFromJson";
import { CreateSizeColorClusterFromJsonResponse } from "./definitions/CreateSizeColorClusterFromJsonResponse";
import { CreateProductListClusterFromJson } from "./definitions/CreateProductListClusterFromJson";
import { CreateProductListClusterFromJsonResponse } from "./definitions/CreateProductListClusterFromJsonResponse";
import { GetProductAvailabilities } from "./definitions/GetProductAvailabilities";
import { GetProductAvailabilitiesResponse } from "./definitions/GetProductAvailabilitiesResponse";
import { GetProduct } from "./definitions/GetProduct";
import { GetProductResponse } from "./definitions/GetProductResponse";
import { GetExpectedArrivals } from "./definitions/GetExpectedArrivals";
import { GetExpectedArrivalsResponse } from "./definitions/GetExpectedArrivalsResponse";
import { CreateProductFromJson1 } from "./definitions/CreateProductFromJson1";
import { CreateProductFromJsonResponse1 } from "./definitions/CreateProductFromJsonResponse1";
import { CreateOfferFromJson1 } from "./definitions/CreateOfferFromJson1";
import { CreateOfferFromJsonResponse1 } from "./definitions/CreateOfferFromJsonResponse1";
import { CreateExpectedArrivalFromJson1 } from "./definitions/CreateExpectedArrivalFromJson1";
import { CreateExpectedArrivalFromJsonResponse1 } from "./definitions/CreateExpectedArrivalFromJsonResponse1";
import { CreatePurchaseOrderFromJson1 } from "./definitions/CreatePurchaseOrderFromJson1";
import { CreatePurchaseOrderFromJsonResponse1 } from "./definitions/CreatePurchaseOrderFromJsonResponse1";
import { CreateUserPreRegisteredFromJson1 } from "./definitions/CreateUserPreRegisteredFromJson1";
import { CreateUserPreRegisteredFromJsonResponse1 } from "./definitions/CreateUserPreRegisteredFromJsonResponse1";
import { CreateSizeColorClusterFromJson1 } from "./definitions/CreateSizeColorClusterFromJson1";
import { CreateSizeColorClusterFromJsonResponse1 } from "./definitions/CreateSizeColorClusterFromJsonResponse1";
import { CreateProductListClusterFromJson1 } from "./definitions/CreateProductListClusterFromJson1";
import { CreateProductListClusterFromJsonResponse1 } from "./definitions/CreateProductListClusterFromJsonResponse1";
import { VeraCoreWebServices } from "./services/Order";

export interface VcWebServicesClient extends SoapClient {
  Order: VeraCoreWebServices;
  AddProductAsync(
    addProduct: AddProduct,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddProductResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  SaveOfferAsync(
    saveOffer: SaveOffer,
    options?: ISoapExOptions
  ): Promise<
    [
      result: SaveOfferResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddPurchaseOrderAsync(
    addPurchaseOrder: AddPurchaseOrder,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddPurchaseOrderResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  SaveExpectedArrivalAsync(
    saveExpectedArrival: SaveExpectedArrival,
    options?: ISoapExOptions
  ): Promise<
    [
      result: SaveExpectedArrivalResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CancelExpectedArrivalAsync(
    cancelExpectedArrival: CancelExpectedArrival,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CancelExpectedArrivalResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CancelExpectedArrivalComponentAsync(
    cancelExpectedArrivalComponent: CancelExpectedArrivalComponent,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CancelExpectedArrivalComponentResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetOrderInfoAsync(
    getOrderInfo: GetOrderInfo,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetOrderInfoResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetOffersAsync(
    getOffers: GetOffers,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetOffersResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddMailerAsync(
    addMailer: AddMailer,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddMailerResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddPreRegisteredUserAsync(
    addPreRegisteredUser: AddPreRegisteredUser,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddPreRegisteredUserResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetDetailedBillingAsync(
    getDetailedBilling: GetDetailedBilling,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetDetailedBillingResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductShipmentAllProdsAsync(
    getProductShipmentAllProds: GetProductShipmentAllProds,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductShipmentAllProdsResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductShipmentProdListAsync(
    getProductShipmentProdList: GetProductShipmentProdList,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductShipmentProdListResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetShippingActivityAsync(
    getShippingActivity: GetShippingActivity,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetShippingActivityResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductReturnsAsync(
    getProductReturns: GetProductReturns,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductReturnsResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductSerialNumbersAsync(
    getProductSerialNumbers: GetProductSerialNumbers,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductSerialNumbersResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetShippingChargeAsync(
    getShippingCharge: GetShippingCharge,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetShippingChargeResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddOrderAsync(
    addOrder: AddOrder,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddOrderResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddSizeColorClusterAsync(
    addSizeColorCluster: AddSizeColorCluster,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddSizeColorClusterResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddProductListClusterAsync(
    addProductListCluster: AddProductListCluster,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddProductListClusterResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateProductFromJSONAsync(
    createProductFromJson: CreateProductFromJson,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateProductFromJsonResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateOfferFromJSONAsync(
    createOfferFromJson: CreateOfferFromJson,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateOfferFromJsonResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateExpectedArrivalFromJSONAsync(
    createExpectedArrivalFromJson: CreateExpectedArrivalFromJson,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateExpectedArrivalFromJsonResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreatePurchaseOrderFromJSONAsync(
    createPurchaseOrderFromJson: CreatePurchaseOrderFromJson,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreatePurchaseOrderFromJsonResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateUserPreRegisteredFromJSONAsync(
    createUserPreRegisteredFromJson: CreateUserPreRegisteredFromJson,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateUserPreRegisteredFromJsonResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateSizeColorClusterFromJSONAsync(
    createSizeColorClusterFromJson: CreateSizeColorClusterFromJson,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateSizeColorClusterFromJsonResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateProductListClusterFromJSONAsync(
    createProductListClusterFromJson: CreateProductListClusterFromJson,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateProductListClusterFromJsonResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductAvailabilitiesAsync(
    getProductAvailabilities: GetProductAvailabilities,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductAvailabilitiesResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductAsync(
    getProduct: GetProduct,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetExpectedArrivalsAsync(
    getExpectedArrivals: GetExpectedArrivals,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetExpectedArrivalsResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddProductAsync(
    addProduct: AddProduct,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddProductResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  SaveOfferAsync(
    saveOffer: SaveOffer,
    options?: ISoapExOptions
  ): Promise<
    [
      result: SaveOfferResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddPurchaseOrderAsync(
    addPurchaseOrder: AddPurchaseOrder,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddPurchaseOrderResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  SaveExpectedArrivalAsync(
    saveExpectedArrival: SaveExpectedArrival,
    options?: ISoapExOptions
  ): Promise<
    [
      result: SaveExpectedArrivalResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CancelExpectedArrivalAsync(
    cancelExpectedArrival: CancelExpectedArrival,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CancelExpectedArrivalResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CancelExpectedArrivalComponentAsync(
    cancelExpectedArrivalComponent: CancelExpectedArrivalComponent,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CancelExpectedArrivalComponentResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetOrderInfoAsync(
    getOrderInfo: GetOrderInfo,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetOrderInfoResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetOffersAsync(
    getOffers: GetOffers,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetOffersResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddMailerAsync(
    addMailer: AddMailer,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddMailerResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddPreRegisteredUserAsync(
    addPreRegisteredUser: AddPreRegisteredUser,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddPreRegisteredUserResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetDetailedBillingAsync(
    getDetailedBilling: GetDetailedBilling,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetDetailedBillingResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductShipmentAllProdsAsync(
    getProductShipmentAllProds: GetProductShipmentAllProds,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductShipmentAllProdsResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductShipmentProdListAsync(
    getProductShipmentProdList: GetProductShipmentProdList,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductShipmentProdListResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetShippingActivityAsync(
    getShippingActivity: GetShippingActivity,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetShippingActivityResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductReturnsAsync(
    getProductReturns: GetProductReturns,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductReturnsResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductSerialNumbersAsync(
    getProductSerialNumbers: GetProductSerialNumbers,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductSerialNumbersResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetShippingChargeAsync(
    getShippingCharge: GetShippingCharge,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetShippingChargeResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddOrderAsync(
    addOrder: AddOrder,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddOrderResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddSizeColorClusterAsync(
    addSizeColorCluster: AddSizeColorCluster,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddSizeColorClusterResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  AddProductListClusterAsync(
    addProductListCluster: AddProductListCluster,
    options?: ISoapExOptions
  ): Promise<
    [
      result: AddProductListClusterResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateProductFromJSONAsync(
    createProductFromJson: CreateProductFromJson1,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateProductFromJsonResponse1,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateOfferFromJSONAsync(
    createOfferFromJson: CreateOfferFromJson1,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateOfferFromJsonResponse1,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateExpectedArrivalFromJSONAsync(
    createExpectedArrivalFromJson: CreateExpectedArrivalFromJson1,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateExpectedArrivalFromJsonResponse1,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreatePurchaseOrderFromJSONAsync(
    createPurchaseOrderFromJson: CreatePurchaseOrderFromJson1,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreatePurchaseOrderFromJsonResponse1,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateUserPreRegisteredFromJSONAsync(
    createUserPreRegisteredFromJson: CreateUserPreRegisteredFromJson1,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateUserPreRegisteredFromJsonResponse1,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateSizeColorClusterFromJSONAsync(
    createSizeColorClusterFromJson: CreateSizeColorClusterFromJson1,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateSizeColorClusterFromJsonResponse1,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  CreateProductListClusterFromJSONAsync(
    createProductListClusterFromJson: CreateProductListClusterFromJson1,
    options?: ISoapExOptions
  ): Promise<
    [
      result: CreateProductListClusterFromJsonResponse1,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductAvailabilitiesAsync(
    getProductAvailabilities: GetProductAvailabilities,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductAvailabilitiesResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetProductAsync(
    getProduct: GetProduct,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetProductResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
  GetExpectedArrivalsAsync(
    getExpectedArrivals: GetExpectedArrivals,
    options?: ISoapExOptions
  ): Promise<
    [
      result: GetExpectedArrivalsResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any
    ]
  >;
}

/** Create VcWebServicesClient */
export function createClientAsync(
  ...args: Parameters<typeof soapCreateClientAsync>
): Promise<VcWebServicesClient> {
  return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
