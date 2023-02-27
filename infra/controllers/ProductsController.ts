import { ProductsRepositoryMemory } from "./../repositories/memory/ProductsRepositoryMemory";
import { CreateProduct } from "../../application/useCases/CreateProduct";
import { CryptoIdentifier } from "../security/CryptoIdentifier";

const productsRepository = new ProductsRepositoryMemory();

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
}
