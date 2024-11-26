export interface AuthenticationHeader {
  username: string;
  password: string;
}

export interface DebugHeader {
  debug: string;
  request: string;
}

export interface Header {
  authenticationHeader: AuthenticationHeader;
  debugHeader: DebugHeader;
  iD: string;
  entryDate: string;
  orderEntryView: OrderEntryView;
  referenceNumber: string;
  pONumber: string;
  comments: string;
  approvalComment: string;
}

export interface OrderEntryView {
  seqID: string;
  description: string;
}

export interface ResponseMedia {
  description: string;
}

export interface CustomerProject {
  iD: string;
}

export interface Classification {
  campaignID: string;
  responseMedia: ResponseMedia;
  customerProject: CustomerProject;
  store: string;
  department: string;
  distributionCenter: string;
  vendor: string;
}

export interface FreightCarrier {
  name: string;
}

export interface FreightService {
  description: string;
}

export interface Person {}

export interface FreightAccount {
  seqID: string;
  description: string;
  freightCarrier: FreightCarrier;
  person: Person;
  thirdAcctNo: string;
  nonResident: string;
}

export interface ShippingOption {
  description: string;
}

export interface Shipping {
  freightCarrier: FreightCarrier;
  freightService: FreightService;
  freightAccount: FreightAccount;
  shippingOption: ShippingOption;
  freightCode: string;
  freightCodeDescription: string;
  shipComments: string;
  neededBy: string;
  rush: string;
  releaseDate: string;
  thirdPartyType: string;
  thirdAccountNumber: string;
  nCShip: string;
  nCPack: string;
  nCOffers: string;
  nCHandling: string;
  nCOffShipHandling: string;
  nCSpecialHandling: string;
  nCRush: string;
}

export interface PriceClass {
  seqID: string;
  description: string;
}

export interface Money {
  priceClass: PriceClass;
  specialHandlingCharge: string;
  taxPercent: string;
  noChargeAmount: string;
  taxAmount: string;
}

export interface VariableField {}

export interface OrderVariable {
  seqID: string;
  variableField: VariableField;
  value: string;
  valueDescription: string;
}

export interface OrderVariables {
  orderVariable: OrderVariable[];
}

export interface ORDOBY {
  seqID: string;
  customerID: string;
}

export interface OrderedBy {
  oRDOBY: ORDOBY;
  fullName: string;
  fullNameWithSuffix: string;
  cityStateZip: string;
  cityStateZipCountry: string;
  compoundAddress: string;
}

export interface SpecialHandling {}

export interface OrderShipTo {
  flag: string;
  key: string;
  releaseDate: string;
  rush: string;
  rushHandling: string;
  comments: string;
  specialHandling: SpecialHandling;
  fullName: string;
  cityStateZip: string;
  cityStateZipCountry: string;
  compoundAddress: string;
}

export interface ShipTo {
  orderShipTo: OrderShipTo;
}

export interface BillTo {
  flag: string;
  fullName: string;
  fullNameWithSuffix: string;
  cityStateZip: string;
  cityStateZipCountry: string;
  compoundAddress: string;
}

export interface Offer {}

export interface OrderShipToKey {}

export interface Variables {}

export interface ProductDetails {}

export interface OfferOrdered {
  offer: Offer;
  quantity: string;
  orderShipTo: OrderShipTo;
  orderShipToKey: OrderShipToKey;
  priceType: string;
  unitPrice: string;
  shipType: string;
  shippingHandling: string;
  discounts: string;
  documentID: string;
  shipToKey: string;
  comments: string;
  rCOrderKey: string;
  lineNumber: string;
  proofLink: string;
  variables: Variables;
  productDetails: ProductDetails;
  lineTaxPercent: string;
  lineTaxAmount: string;
}

export interface Offers {
  offerOrdered: OfferOrdered;
}

export interface Order {
  header: Header;
  classification: Classification;
  shipping: Shipping;
  money: Money;
  orderVariables: OrderVariables;
  orderedBy: OrderedBy;
  shipTo: ShipTo;
  billTo: BillTo;
  offers: Offers;
}

export interface AddOrder {
  order: Order;
}

export interface Body {
  addOrder: AddOrder;
}

export interface Envelope {
  header: Header;
  body: Body;
}
