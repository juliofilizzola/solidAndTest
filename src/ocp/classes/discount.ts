export abstract class Discount {
  constructor(public discount: number ) {}
  abstract calculete(value: number): number;
}

export class FiftyPercentDiscount extends Discount {
  calculete(price: number): number {
    return price - price * (this.discount *100);
  }
}