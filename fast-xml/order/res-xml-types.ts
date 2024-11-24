export type Welcome = {
  xml: string;
  soap12Envelope: Soap12Envelope;
};

export type Soap12Envelope = {
  soap12Header: Soap12Header;
  soap12Body: Soap12Body;
};

export type Soap12Body = {
  addOrderResponse: AddOrderResponse;
};

export type AddOrderResponse = {
  addOrderResult: AddOrderResult;
};

export type AddOrderResult = {
  orderSeqID: string;
  orderID: string;
};

export type Soap12Header = {
  debugHeader: DebugHeader;
};

export type DebugHeader = {
  debug: string;
  request: string;
};
