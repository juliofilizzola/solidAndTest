import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "./messaging";
import { ShoppingCart } from "./ShoppingCart";

export class order {
  private _orderStatus: OrderStatus = 'open';

  constructor( private readonly cart: ShoppingCart, private readonly msg: Messaging) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho vazio...');
      return;
    }
    this.msg.sendMessage(`seu pedido com total de ${this.cart.total()} foi recebido`);
    
    this.saveOrder();
    this.cart.clear();
  }


  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

}