import { ProductAdapter } from "./../../../application/adapters/ProductAdapter";
import { Product } from "../../../domain/entities/Product";
import { ProductsRepository } from "./../../../application/repositories/ProductsRepository";

export class ProductsRepositoryMemory implements ProductsRepository {
  private products: Product[] = [];

  async save(product: Product): Promise<void> {
    this.products.push(product);
  }

  async count() {
    return this.products.length;
  }

  async getAll(): Promise<Product[]> {
    return this.products.map((p) => ProductAdapter.create(p));
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.find((productItem) => productItem.id === id);
  }

  async update(product: Product): Promise<void> {
    this.products = this.products.map((p) => {
      if (p.id === product.id) {
        return product;
      }
      return p;
    });
  }
}
