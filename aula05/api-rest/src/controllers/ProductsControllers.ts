import {Request, Response, NextFunction} from "express"
import { AppError } from "../utils/AppError";
import { z } from "zod"

class ProductsControllers {
/**
 * index - GET para listar vários registros.
 * show - GET para exibir um registro específico.
 * create - POST para criar um registro.
 * update - PUT para atualizar um registro.
 * remove - DELETE para deletar um registro.
 */
    index(request: Request, response: Response, next: NextFunction) {
        const {page, limit} = request.query
        response.send(`Página ${page} de ${limit}`)
    }
    create(request: Request, response: Response, next: NextFunction) {
        // const {name, price} = request.body
        const bodySchema = z.object({
            name: z.string({required_error: "Name is required"}).trim().min(6, {message: "Name must be 6 or more characters"}),
            price: z.number({required_error: "Price is required"}).positive({message: "Price must be positive"})//.nullable()
        })
        const {name, price} = bodySchema.parse(request.body)
        /*
        if (!name || !price) {
            throw new AppError("Nome e preço do produto são obrigatórios!")
        }
        if (!name) {
            throw new AppError("Nome do produto é obrigatório!")
        }
        if (name.trim().length < 6) {
            throw new AppError("Nome do produto precisa ter pelo menos 6 caracteres!")
        }
        if (!price) {
            throw new AppError("Preço do produto é obrigatório!")
        }
        if (price < 0) {
            throw new AppError("O preço do produto não pode ser menor que 0!")
        }
        // throw new Error("ERRO DE EXEMPLO!")
        */
        
        response.status(201).json({name, price, user_id: request.user_id})
    }
}

export {ProductsControllers}