import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { NoDiscount } from "./classes/discount";
import { Order } from "./classes/order";
import { Product } from "./classes/products";
import { ShoppingCart } from "./classes/ShoppingCart";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/costumer";


const noDiscount = new NoDiscount()

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer('Luiz', 'Antonio', '111.111.111-11');
const enterpriseCustomer = new EnterpriseCustomer('xablau.lsa', '1255787248744-54'); 

const order = new Order(shoppingCart, messaging, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount());
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);