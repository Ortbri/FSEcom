// products endpoints - same prefix
import {Router} from "express";

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

// get
router.get("/", (req, res) => {
    res.send("the list of products")
});
// get by id
router.get("/:id", (req, res) => {
    console.log(req.params)
    res.send("a product")
});
// create
router.post("/", (req, res) => {
    res.send('new product created')
});

export default router;