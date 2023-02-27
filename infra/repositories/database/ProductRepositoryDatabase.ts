import { ProductsRepository } from "../../../application/repositories/ProductsRepository";
import { Product } from "../../../domain/entities/Product";
import {connection} from '../../database/MongoDB'

export class ProductsRepositoryDatabase implements ProductsRepository {
  private collection=connection.collection('products');
  
  async save(product: Product): Promise<void> {
    await this.collection.insertOne(product)
  }

  async count() {
    return 0;
  }

  async getAll(): Promise<Product[]> {
    return [] as Product[]
  }

  async findById(id: string): Promise<Product> {
    return null;
  }
}