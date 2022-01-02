import { Discount } from "../../discount";
import { CartItem } from "../../interfaces/cart-item";


export class DiscountMock extends Discount {};

export class CartItemMock implements CartItem {
  constructor(public name: string, public price: number) {}
};