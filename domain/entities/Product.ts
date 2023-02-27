import { ProductUnavaible } from "../errors/ProductUnavaible";

export namespace Product {
  export type Status = "available" | "unavaible";
  export interface Props {
    readonly id: string;
    name: string;
    price: number;
    status?: Status;
    quantity?: number;
  }
}

export class Product {
  public readonly id: string;
  public name: string;
  public price: number;
  public status: Product.Status = "unavaible";
  public quantity?: number = 0;

  constructor(props: Product.Props) {
    Object.assign(this, props);
  }

  buy(quantity: number = 1) {
    if (this.quantity <= 0) {
      throw new ProductUnavaible();
    }

    this.quantity -= quantity;

    if (this.quantity < 10) {
      this.status = "unavaible";
    }

    return quantity * this.price;
  }

  setQuantity(quantity: number) {
    this.quantity = quantity;
  }
}
