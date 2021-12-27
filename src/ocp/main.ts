import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { NoDiscount } from "./classes/discount";
import { Order } from "./classes/order";
import { Product } from "./classes/products";
import { ShoppingCart } from "./classes/ShoppingCart";


const noDiscount = new NoDiscount()

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount());
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);