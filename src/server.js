import http from 'node:http';
import { json } from './middlewares/json.js';
// - diferentes requisições

// - HTTP
// - Método HTTP
// - URL

// GET, POST, PUT, PATCH, DELETE

// - GET: buscar informações do back-end
// - POST: criar uma nova informação no back-end
// - PUT: atualizar uma informação no back-end
// - PATCH: atualizar uma informação específica no back-end
// - DELETE: remover uma informação do back-end

// Stateful - depende de informações de estado, como por exemplo: login, carrinho de compras, etc (guarda infos)
// Stateless - não depende de informações de estado, como por exemplo: busca de produtos, listagem de produtos, etc (não guarda infos)

// JSON - JavaScript Object Notation - formato de dados leve e fácil de ler e escrever, utilizado para troca de informações entre front e back-end

// Cabecalhos HTTP - infos adicionais enviadas junto com a requisição, para melhorar a comunicação entre front e back, como por exemplo: Content-Type, Authorization, etc
// Metadados - informações sobre informações, como por exemplo: tamanho do arquivo, tipo de arquivo, etc
const users = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res, async)

    let body = {}

    if (method === 'POST') {
        let rawBody = ''

        for await (const chunk of req) {
            rawBody += chunk
        }

        if (rawBody) {
            try {
                body = JSON.parse(rawBody)
            } catch {
                return res.writeHead(400).end()
            }
        }
    }

    if (method === 'GET' && url === '/users') {
        return res
        .end(JSON.stringify(users)) 
        // retorna uma resposta para o http, já que res.end() espera uma string, então é necessário converter o array de objetos para string
    }
    if (method === 'POST' && url === '/users') {
        const { name, email } = body

        users.push({
            id: 1,
            name,
            email,
        })

        return res.writeHead(201).end()
        // writeHead() - define the response status code and headers, in this case 201 Created
        // .end() - ends the response process, sending the response to the client
        
        // HTTP Status Codes - indicate the result of the HTTP request,
        // for exemple: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error, etc
    }
    

    return res.writeHead(404).end() // retorna uma resposta para o http 
})

server.listen(3333)

