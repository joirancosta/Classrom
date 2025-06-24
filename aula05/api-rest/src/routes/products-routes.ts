import {Router} from "express"
import { myMiddleware } from "../middlewares/my-middleware"
import { ProductsControllers } from "../controllers/ProductsControllers";

const productsRoutes = Router()
const productsControllers = new ProductsControllers()
/*
productsRoutes.get("/:id", (request, response) => {
    const {page, limit} = request.query
    const {id} = request.params
    response.send(`Página ${page} de ${limit} - ID: ${id}`)
    // Middleware local em uma rota especifica.
productsRoutes.post("/", myMiddleware,(request, response) => {
    const {name, price} = request.body
    // response.send(`Produto ${name} custa $ ${price}`)
    response.status(201).json({name, price, user_id: request.user_id})
})
})
*/
productsRoutes.get("/", productsControllers.index)
productsRoutes.post("/", myMiddleware, productsControllers.create)

export {productsRoutes}