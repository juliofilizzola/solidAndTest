import { Discount } from "../../discount";
import { CartItem } from "../../interfaces/cart-item";

export class CartItemMock implements CartItem {
  constructor(public name: string, public price: number) {}
};

export const productMock1 = {
  name: "Chinelo Havaina",
  price: 15.00
};

export const productMock2 = {
  name: "mousepad",
  price: 58.00
}