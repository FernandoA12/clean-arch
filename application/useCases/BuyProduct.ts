import { ProductsRepository } from "../repositories/ProductsRepository";

export type InputBuyProductDTO = {
  id: string;
  quantity: number;
};

export class BuyProduct {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute(data: InputBuyProductDTO): Promise<number> {
    const product = await this.productsRepository.findById(data.id);
    const price = product.buy(data.quantity);

    await this.productsRepository.update(product);

    return price;
  }
}
