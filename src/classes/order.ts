import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "./messaging";
import { Persistency } from "./persistency";
import { ShoppingCart } from "./ShoppingCart";

export class order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart, 
    private readonly msg: Messaging,
    private readonly saveOrder: Persistency
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho vazio...');
      return;
    }
    this.msg.sendMessage(`seu pedido com total de ${this.cart.total()} foi recebido`);
    
    this.saveOrder.saveOrder();
    this.cart.clear();
  }

}