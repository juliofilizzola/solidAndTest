import { CartItem } from '../interfaces/cart-item';
import { ShoppingCart } from '../ShoppingCart';
import { DiscountMock, CartItemMock } from './mock/mockShoppinCart';
 
const createSUT = (): ShoppingCart => {
  return new ShoppingCart(new DiscountMock());
}

const createItem = (name: string, price: number): CartItem => {
  return new CartItemMock(name, price);
};

describe('shopping cart test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should be an empty cart when no products is added', () => {
    const sut = createSUT();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const sut = createSUT();
    expect(sut.items.length).toBe(2);
  });
});

