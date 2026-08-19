export async function json(req, res, next) {
    const buffers = [] 
}

const server = http.createServer(async (req, res) => {
    const { method, url } = req; // destructuring = permite desempacotar 
    // valores de arrays para evitar repetiçoes desnecessárias como por exemplo: req.method, req.url
        const buffers = []
    for await (const chunk of req) {
        // for await -> allows us to iterate over the chunks of data that are being sent to the server
        buffers.push(chunk)
        // buffers -> array that will store the chunks of data that are being sent to the server
}

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    }   catch {
        req.body = null
        }
    });