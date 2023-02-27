import { ProductsController } from "./../../../controllers/ProductsController";
import { ExpressAdapter } from "./../../../../application/adapters/ExpressAdapter";
import { Router } from "express";

const router = Router();

router.post("/products", ExpressAdapter.create(ProductsController.create, 201));
router.post("/buyProduct", ExpressAdapter.create(ProductsController.buy, 201));
router.get("/products", ExpressAdapter.create(ProductsController.getAll));

export default router;
