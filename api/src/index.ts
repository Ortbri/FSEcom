

import express, {json, urlencoded} from "express";
import productsRoutes from "./routes/products/index";

const port = 3000;

const app = express();

/**
 * the following is middleware for parsing the request body
 * and converting it to JSON
 */
app.use(urlencoded({extended: false}))
app.use(json());

/**
 * the following is the route for products
 */

app.use("/products", productsRoutes);

/**
 * the follwing is console logging for listening
 */
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});