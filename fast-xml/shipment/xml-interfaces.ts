export type Welcome = {
  xml: string;
  soap12Envelope: Soap12Envelope;
};

export type Soap12Envelope = {
  soap12Header: Soap12Header;
  soap12Body: Soap12Body;
};

export type Soap12Body = {
  getShippingActivityResponse: GetShippingActivityResponse;
  getShippingActivity: GetShippingActivity;
};

export type GetShippingActivity = {
  startDate: string;
  endDate: string;
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

export type GetShippingActivityResponse = {
  getShippingActivityResult: GetShippingActivityResult;
};

export type GetShippingActivityResult = {
  shippingActivity: ShippingActivity[];
};

export type ShippingActivity = {
  shipDate: string;
  orderID: string;
  pickPackID: string;
  type: string;
  linesShipped: string;
  piecesShipped: string;
  numberofPackages: string;
  totalWeight: string;
  publishedFreight: string;
  actualFreight: string;
  markedUpFreight: string;
  shippingOrderType: string;
};
