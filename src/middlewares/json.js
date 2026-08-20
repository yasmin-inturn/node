export async function json(req, res, next) {
    const buffers = [] 
}
    for await (const chunk of req) {
        // for await -> allows us to iterate over the chunks of data that are being sent to the server
        buffers.push(chunk)
        // buffers -> array that will store the chunks of data that are being sent to the server
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    }   catch {
        req.body = null
        


    res.setHeader('Content-Type', 'application/json') // defines the content type of the response as JSON
};

// this code is a middleware function that parses the incoming request body as JSON and 
// attaches it to the req object. It uses a for-await-of loop to read the incoming data chunks from the request stream, 
// concatenates them into a single buffer, and then attempts to parse that buffer as JSON. If parsing fails, it sets req.body to null. 
// Finally, it sets the Content-Type header of the response to application/json.