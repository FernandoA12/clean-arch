import { CreateProduct } from "../application/useCases/CreateProduct";
import { ProductsRepositoryMemory } from "../infra/repositories/memory/ProductsRepositoryMemory";

it("should update product",async ()=>{
  const identifier = {
    createId() {
      return "1";
    },
  };
  const productsRepository = new ProductsRepositoryMemory();
  const createProduct = new CreateProduct(productsRepository, identifier);
  await createProduct.execute({
    name: "product 1",
    price: 10,
  });

  
})