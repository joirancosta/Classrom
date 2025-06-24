import express, {Request, Response, NextFunction} from "express"
import { routes } from "./routes/index";
import { AppError } from "./utils/AppError";
// import { myMiddleware } from "./middlewares/my-middleware";

const PORT = 3333

const app = express()
app.use(express.json())
// Middleware global (aplica para todas as rotas abaixo.)
// app.use(myMiddleware)
/*
app.get("/", (request, response) => {
    response.send("Hello World Express!")
})
app.get("/products/:id/:user", (request, response) => {
    const {id, user} = request.params
    response.send(`Produto ${id} do usuário ${user}`)
})
*/
app.use(routes)
/**
 * npm install --save-dev @types/express@4.17.21
 * 400 (Bad Request): Erro do cliente.
 * 500 (Internal Server Error): Erro interno do servidor.
 */
app.use((error: any, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({message: error.message})
    }
    response.status(500).json({
        // message: "Erro no servidor!"
        message: error.message
    })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))