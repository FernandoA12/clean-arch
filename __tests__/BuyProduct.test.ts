import { BuyProduct } from "../application/useCases/BuyProduct";
import { Product } from "../domain/entities/Product";
import { ProductsRepositoryMemory } from "../infra/repositories/memory/ProductsRepositoryMemory";

const productsRepository = new ProductsRepositoryMemory();

productsRepository.save(
  new Product({
    id: "1",
    name: "product 1",
    price: 10,
    quantity: 20,
  })
);

productsRepository.update = jest.fn();

it("should buy product", async () => {
  const buyProduct = new BuyProduct(productsRepository);
  const productPrice = await buyProduct.execute({ id: "1", quantity: 5 });

  const product = await productsRepository.findById("1");

  expect(productPrice).toBe(50);
  expect(product.quantity).toBe(15);
  expect(productsRepository.update).toBeCalled();
});
