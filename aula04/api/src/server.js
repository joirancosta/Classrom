import http from "node:http"

const server = http.createServer(async (request, response) => {
    const {method, url} = request
    
    if (method === "GET" && url === "/products") {
        return response.end("Lista de produtos")
    }
    if (method === "POST" && url === "/products") {
        const buffers = []
        for await (const chunck of request){
            buffers.push(chunck)
        }
        console.log(Buffer.concat(buffers).toString())
        return response.writeHead(201).end("Produto cadastrado")
    }
    return response.writeHead(404).end("Rota não encontrada")
})

server.listen(3333)