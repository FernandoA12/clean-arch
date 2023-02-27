import { CreateProduct } from "../application/useCases/CreateProduct";
import { ProductsRepositoryMemory } from "./../infra/repositories/memory/ProductsRepositoryMemory";

it("deve criar um produto", async () => {
  const identifier = {
    createId() {
      return "1";
    },
  };
  const productsRepository = new ProductsRepositoryMemory();
  const createProduct = new CreateProduct(productsRepository, identifier);
  const product = await createProduct.execute({
    name: "product 1",
    price: 10,
  });

  const productsLength = await productsRepository.count();

  expect(product.id).toBe("1");
  expect(productsLength).toBe(1);
});
