import { Request, Response } from "express"
import { db } from "../../db/index";
import { productsTable } from "../../db/productsSchema";



export function listProducts(req: Request, res: Response) {
    res.send("the list of products")
}
export function getProductById(req: Request, res: Response) {  
    res.send("get product by id")
}
export async function createProduct(req: Request, res: Response) { 
    // console.log(req.body)
    await db.insert(productsTable).values(req.body)
    res.send("created product!!!")
}
export function updateProduct(req: Request, res: Response) { 
    res.send("update product")
}
export function deleteProduct(req: Request, res: Response) { 
    res.send("delete product")
}
