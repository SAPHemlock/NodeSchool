export type Soap12Envelope = {
  soap12Header: Soap12Header;
  soap12Body: Soap12Body;
};

export type Soap12Body = {
  addOrder: AddOrder;
};

export type AddOrder = {
  order: Order;
};

export type Order = {
  header: Header;
  classification: Classification;
  shipping: Shipping;
  money: Money;
  payment: Payment;
  orderVariables: OrderVariables;
  orderedBy: BillTo;
  shipTo: ShipTo;
  billTo: BillTo;
  offers: Offers;
  orderRecurrenceSchedule: OrderRecurrenceSchedule;
  orderBudget: OrderBudget;
};

export type BillTo = {
  flag?: string;
  fullName: string;
  fullNameWithSuffix: string;
  cityStateZip: string;
  cityStateZipCountry: string;
  compoundAddress: string;
  ordoby?: Ordoby;
};

export type Ordoby = {
  seqID: string;
  customerID: string;
};

export type Classification = {
  campaignID: string;
  responseMedia: ResponseMedia;
  source: ResponseMedia;
  issue: Issue;
  customerProject: CustomerProject;
  customerCode: string;
  store: string;
  department: string;
  distributionCenter: string;
  vendor: string;
};

export type CustomerProject = {
  id: string;
};

export type Issue = {
  issue: string;
};

export type ResponseMedia = {
  description: string;
};

export type Header = {
  id: string;
  entryDate: string;
  orderEntryView: OrderEntryView;
  referenceNumber: string;
  poNumber: string;
  comments: string;
  ipAddress: string;
  approvalComment: string;
  insertDate: string;
  utcEntryDateTime: string;
};

export type OrderEntryView = {
  seqID: string;
  description: string;
};

export type Money = {
  priceClass: OrderEntryView;
  shippingHandlingCharge: string;
  rushHandlingCharge: string;
  noChargeType: ResponseMedia;
  discountAmount: string;
  discountPercent: string;
  discountCode: DiscountCode;
  coupon: Coupon;
  specialHandlingCharge: string;
  creditAmount: string;
  giftCertificate: GiftCertificate;
  giftCertificateAmount: string;
  taxPercent: string;
  noChargeAmount: string;
  taxAmount: string;
};

export type Coupon = {
  code: string;
};

export type DiscountCode = {
  id: string;
  description: string;
};

export type GiftCertificate = {
  uid: string;
  amount: string;
};

export type Offers = {
  offerOrdered: OfferOrdered[];
};

export type OfferOrdered = {
  offer: string;
  quantity: string;
  canceledQuantity: string;
  orderShipTo: string;
  orderShipToKey: string;
  priceType: string;
  unitPrice: string;
  shipType: string;
  shippingHandling: string;
  discounts: string;
  discountPercent: string;
  documentID: string;
  seqID: string;
  cloneLine: string;
  unapproved: string;
  shipToKey: string;
  fgnOrder: string;
  comments: string;
  rcOrderKey: string;
  recurring: string;
  lineNumber: string;
  proofLink: string;
  variables: string;
  productDetails: string;
  lineTaxPercent: string;
  shippingHandlingTaxPercent: string;
  lineTaxAmount: string;
};

export type OrderBudget = {
  person: Person;
};

export type Person = {
  name: string;
  companyInfo: string;
  address: string;
  contactInfo: string;
  billingInfo: string;
  variables: string;
};

export type OrderRecurrenceSchedule = {
  recurrenceSchedules: RecurrenceSchedules;
  recurrenceOfferFlag: string;
  recurrenceShippingOption: ResponseMedia;
  recurrenceSpecialHandlingCharge: string;
  numberRecurrence: string;
};

export type RecurrenceSchedules = {
  seqID: string;
  id: string;
  description: string;
  definition: string;
  definitionDetail: string;
  schedule: string;
  scheduleCount: string;
  cycle: string;
  startCycleDate: string;
  daysToJoin: string;
  monthlyRecurrenceType: string;
  minimumRecurrences: string;
  maximumRecurrences: string;
  recurrenceIncrement: string;
  allowInfiniteRecurrence: string;
  infiniteTag: string;
  durationTag: string;
  expirationDate: string;
  nextCycleDate: string;
  hasValidCycleDate: string;
  anyOffer: string;
  recurrenceScheduleShippingOptions: string;
};

export type OrderVariables = {
  orderVariable: OrderVariable[];
};

export type OrderVariable = {
  seqID: string;
  variableField: string;
  value: string;
  valueDescription: string;
};

export type Payment = {
  paymentType: PaymentType;
  paymentAmount: string;
  ccNumber: string;
  ccExpirationDate: string;
  csc: string;
  arReference: string;
  token: string;
  transactionID: string;
  authorizationCode: string;
  authorizationAmount: string;
  authorizationDate: string;
};

export type PaymentType = {
  description: string;
  sequence: string;
};

export type ShipTo = {
  orderShipTo: OrderShipTo[];
};

export type OrderShipTo = {
  seqID: string;
  flag: string;
  key: string;
  neededBy: string;
  releaseDate: string;
  rush: string;
  rushHandling: string;
  comments: string;
  freightCarrier: string;
  freightService: string;
  thirdPartyType: string;
  thirdPartyAccountNumber: string;
  freightCode: string;
  freightCodeDescription: string;
  specialHandling: string;
  specialHandlingCharge: string;
  shippingHandlingCharge: string;
  fullName: string;
  fullNameWithSuffix: string;
  cityStateZip: string;
  cityStateZipCountry: string;
  compoundAddress: string;
  pickPacks: string;
  shippingHandlingTaxAmount: string;
  shippingHandlingTaxPercent: string;
};

export type Shipping = {
  freightCarrier: FreightCarrier;
  freightService: ResponseMedia;
  freightAccount: FreightAccount;
  shippingOption: ResponseMedia;
  freightCode: string;
  freightCodeDescription: string;
  shipComments: string;
  neededBy: string;
  rush: string;
  releaseDate: string;
  thirdPartyType: string;
  thirdAccountNumber: string;
  ncShip: string;
  ncPack: string;
  ncOffers: string;
  ncHandling: string;
  ncOffShipHandling: string;
  ncSpecialHandling: string;
  ncRush: string;
};

export type FreightAccount = {
  seqID: string;
  description: string;
  freightCarrier: string;
  person: string;
  thirdAcctNo: string;
  nonResident: string;
};

export type FreightCarrier = {
  name: string;
};

export type Soap12Header = {
  authenticationHeader: AuthenticationHeader;
  debugHeader: DebugHeader;
};

export type AuthenticationHeader = {
  username: string;
  password: string;
};

export type DebugHeader = {
  debug: string;
  request: string;
};
