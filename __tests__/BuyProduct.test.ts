import { BuyProduct } from "../application/useCases/BuyProduct";
import { CreateProduct } from "../application/useCases/CreateProduct";
import { ProductsRepositoryMemory } from "../infra/repositories/memory/ProductsRepositoryMemory";

it("should buy product",async ()=>{
  const identifier = {
    createId() {
      return "1";
    },
  };
  const productsRepository = new ProductsRepositoryMemory();
  const createProduct = new CreateProduct(productsRepository, identifier);
  const product=await createProduct.execute({
    name: "product 1",
    price: 10,
    quantity: 20
  });

  
  const buyProduct=new BuyProduct(productsRepository)
  const quantity=5;
  const productPrice=await buyProduct.execute({idProduct:"1",quantity})

  expect(productPrice).toBe(product.price*quantity);

})