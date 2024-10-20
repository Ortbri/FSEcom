

import express, {json, urlencoded} from "express";
import productsRoutes from "./routes/products/index";

const port = 3000;

const app = express();
// why do we need this?
// middlewaresn if this is below /products, it will not work
// if this is above /products, it will work
app.use(urlencoded({extended: false}))
app.use(json());

app.use("/products", productsRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});