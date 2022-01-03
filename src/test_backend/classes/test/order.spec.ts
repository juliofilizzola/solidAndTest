import { CartItem } from '../interfaces/cart-item';
import { IMessaging } from '../interfaces/Messaging';
import { IPersistency } from '../interfaces/persistency';
import { IShoppingCart } from '../interfaces/Shopping-cart';
import { Order } from '../order';
class shoppingCartMock implements IShoppingCart {
  get items(): readonly CartItem[] {
    return [];
  }
  addItem(item: CartItem): void {
    throw new Error('Method not implemented.');
  }
  removeItem(index: number): void {
    throw new Error('Method not implemented.');
  }
  total(): number {
    throw new Error('Method not implemented.');
  }
  totalWithDiscount(): number {
    throw new Error('Method not implemented.');
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.');
  }
  clear(): void {
    throw new Error('Method not implemented.');
  }

}

class MessingMock implements IMessaging {
  sendMessage(msg: string): void {
    throw new Error('Method not implemented.');
  }
}

class PersistencyMock implements IPersistency {
  saveOrder(): void {
    throw new Error('Method not implemented.');
  }
}



describe("Order", () => {
  it('should not checkout if cart is empty', () => {


  });
});