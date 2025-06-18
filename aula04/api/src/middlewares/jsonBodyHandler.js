export async function jsonBodyHandler(request, response) {
    // Adiciona cada chunk
    const buffers = []
    // Coleta os chunks de dados da requisição
    for await (const chunck of request){
        buffers.push(chunck)
    }
    try {
        // Concatena os chunk e converte para stirng. Em seguida, converte a string para json
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }
    // Define o header de resposta como JSON
    response.setHeader("Content-Type", "application/json")
}