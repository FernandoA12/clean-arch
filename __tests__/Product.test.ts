import { Product } from "../domain/entities/Product";
import { ProductUnavaible } from "../domain/errors/ProductUnavaible";

const product = new Product({
  id: "any",
  name: "product-name",
  price: 100,
});

it("should create a new Product", () => {
  expect(product.id).toBe("any");
  expect(product.name).toBe("product-name");
  expect(product.status).toBe("unavaible");
  expect(product.price).toBe(100);
  expect(product.quantity).toBe(0);
});

it("deve lançar uma exceção caso a quantidade for zero", () => {
  expect(() => product.buy()).toThrowError(ProductUnavaible);
});

it("deve mudar a quantidade do produto", () => {
  product.setQuantity(100);

  expect(product.quantity).toBe(100);
});

it("deve comprar", () => {
  const valor = product.buy(90);

  expect(valor).toBe(9000);
  expect(product.status).toBe("unavaible");
  expect(product.quantity).toBe(10);
});
