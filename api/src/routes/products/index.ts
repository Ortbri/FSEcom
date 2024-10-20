// products endpoints - same prefix
import { Router } from "express";
import { createProduct, deleteProduct, getProductById, listProducts, updateProduct } from "./productsController";

const router = Router();

/* -------------------------------- endpoints ------------------------------- */
// get is reading from api, does not change, to create is a post request
/**
 * 
 * CRUD 
 * create is creating a new resource => post
 * read is reading from api => get
 * update is updating a resource => put
 * delete is deleting a resource => delete
 */
// create
router.post("/", createProduct);
// read
router.get("/", listProducts);
// read by id
router.get("/:id", getProductById);
// update by id
router.put("/:id", updateProduct);
// delete by id
router.delete("/:id", deleteProduct);

export default router;