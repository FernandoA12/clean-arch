import { ProductsRepositoryMemory } from "./../repositories/memory/ProductsRepositoryMemory";
import { CreateProduct } from "../../application/useCases/CreateProduct";
import { CryptoIdentifier } from "../security/CryptoIdentifier";
import { BuyProduct } from "../../application/useCases/BuyProduct";
import { ProductsRepositoryDatabase } from "../repositories/database/ProductRepositoryDatabase";

const productsRepository = new ProductsRepositoryDatabase();

export class ProductsController {
  static async create(_, data) {
    const identifier = new CryptoIdentifier();
    const createProduct = new CreateProduct(productsRepository, identifier);
    const product = await createProduct.execute(data);
    return product;
  }

  static async getAll() {
    return await productsRepository.getAll();
  }

  static async buy(_, data){
    const buyProduct=new BuyProduct(productsRepository)
    return await buyProduct.execute(data)
  }
}
