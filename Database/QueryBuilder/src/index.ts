import express from "express"
import { Request, Response } from "express"
import { Product } from "./entity/Product"
import { AppDataSource } from "./data-source"


// create and setup express app
const app = express()
app.use(express.json())

// register routes
app.get("/products", async function (req: Request, res: Response) {
    const products = await AppDataSource.getRepository(Product).find()
    res.json(products)
})

// start express server
app.listen(3000)