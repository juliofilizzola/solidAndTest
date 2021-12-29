import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { ShoppingCart } from "./ShoppingCart";
import { CustomerOrder } from "./interfaces/costumer";

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart, 
    private readonly msg: Messaging,
    private readonly saveOrder: Persistency,
    private readonly customer: CustomerOrder 
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho vazio...');
      return;
    }
    this._orderStatus = 'closed';
    this.msg.sendMessage(`seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`);
    
    this.saveOrder.saveOrder();
    this.cart.clear();
    console.log(
      `O nome do cliente é ${this.customer.getName()} ${this.customer.getIDN()}`
    );
  }

}