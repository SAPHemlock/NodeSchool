import { OrderSoap } from "../ports/OrderSoap";
import { OrderSoap12 } from "../ports/OrderSoap12";

export interface VeraCoreWebServices {
  readonly OrderSoap: OrderSoap;
  readonly OrderSoap12: OrderSoap12;
}
