import { ProductsController } from "./../../../controllers/ProductsController";
import { ExpressAdapter } from "./../../../../application/adapters/ExpressAdapter";
import { Router } from "express";

const router = Router();

router.post("/products", ExpressAdapter.create(ProductsController.create, 201));
router.post("/products/buy", ExpressAdapter.create(ProductsController.buy));
router.get("/products", ExpressAdapter.create(ProductsController.getAll));

export default router;

/**
 * LER TODOS OS REGISTROS
 * GET /root
 *
 * LER UM REGISTRO
 * GET /root/:id
 *
 * PRA ALTERAR UM REGISTRO
 * PUT /root/:id
 * body {}
 *
 * PRA CRIAR UM REGISTRO
 * POST /root
 * body {}
 *
 * PRA REMOVER UM REGISTRO
 * DELETE /root/:id
 */
