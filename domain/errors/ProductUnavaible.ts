export class ProductUnavaible extends Error {
  constructor() {
    super("O produto não esta disponivel");
    this.name = "ProductUnavaible";
  }
}
