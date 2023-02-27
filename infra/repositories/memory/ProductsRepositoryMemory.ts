import { Product } from "../../../domain/entities/Product";
import { ProductsRepository } from "./../../../application/repositories/ProductsRepository";

export class ProductsRepositoryMemory implements ProductsRepository {
  private products: Product.Props[] = [];

  async save(product: Product): Promise<void> {
    this.products.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      status: product.status,
    });
  }

  async count() {
    return this.products.length;
  }
}
