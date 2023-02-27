import { Product } from "./../../domain/entities/Product";
export class ProductAdapter {
  static create(data: Product.Props) {
    return new Product(data);
  }
}
