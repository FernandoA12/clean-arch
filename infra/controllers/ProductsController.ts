import { ProductsRepositoryMemory } from "./../repositories/memory/ProductsRepositoryMemory";
import { CreateProduct } from "../../application/useCases/CreateProduct";
import { CryptoIdentifier } from "../security/CryptoIdentifier";

export class ProductsController {
  static async create(_, data) {
    const identifier = new CryptoIdentifier();
    const productsRepository = new ProductsRepositoryMemory();
    const createProduct = new CreateProduct(productsRepository, identifier);
    const product = await createProduct.execute(data);
    return product;
  }
}
