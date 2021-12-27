import { OrderStatus } from "./interfaces/order-status";
import { ShoppingCart } from "./ShoppingCart";

export class order {
  private _orderStatus: OrderStatus = 'open';

  constructor( private readonly cart: ShoppingCart) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho vazio...');
      return;
    }
    this.sendMessage(`seu pedido com total de ${this.cart.total()} foi recebido`);
    
    this.saveOrder();
    this.cart.clear();
  }

  sendMessage(msg: string) {
    console.log('Mensagem enviada: %s', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

}