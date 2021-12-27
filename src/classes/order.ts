import { OrderStatus } from "./interfaces/order-status";

export class order {
  private _orderStatus: OrderStatus = 'open';
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

}