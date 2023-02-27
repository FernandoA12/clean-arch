import { Identifier } from "../../infra/security/Identifier";
import { Product } from "./../../domain/entities/Product";
import { ProductsRepository } from "./../repositories/ProductsRepository";

export type InputDTOCreateProduct = {
  name: string;
  price: number;
  quantity?: number;
};

export class CreateProduct {
  constructor(
    private readonly productsRepository: ProductsRepository,
    private readonly identifier: Identifier
  ) {}

  async execute(data: InputDTOCreateProduct) {
    const product = new Product({
      id: this.identifier.createId(),
      ...data,
    });

    await this.productsRepository.save(product);

    return product;
  }
}
