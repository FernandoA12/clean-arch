import { Product } from "../../domain/entities/Product";

export interface ProductsRepository {
  save(product: Product): Promise<void>;
  count(): Promise<number>;
  getAll(): Promise<Product[]>;
}
