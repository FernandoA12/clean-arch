import { Product } from "../../domain/entities/Product";

export interface ProductsRepository {
  save(product: Product): Promise<void>;
  count(): Promise<number>;
  getAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  update(product: Product): Promise<void>;
}
