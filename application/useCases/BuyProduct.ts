import { ProductsRepository } from "../repositories/ProductsRepository";

export type InputBuyProductDTO={
  idProduct:string;
  quantity:number;
}

export class BuyProduct{
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute(data:InputBuyProductDTO):Promise<number>{
    const product=await this.productsRepository.findById(data.idProduct)
    const price=product.buy(data.quantity)
    
    return price;
  }
}