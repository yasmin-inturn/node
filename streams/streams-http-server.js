import http from 'node:http';
import {Transform} from 'node:stream'

class InverseNumber extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1
// const because the value will not change, it will always be the same

        console.log(transformed)

callback(null, Buffer.from(transformed.toString()))
    }
}

// req -> readable stream, res -> writable stream

const server = http.createServer(async (req, res) => {
    const buffers = []
    for await (const chunk of req) {
        // for await -> allows us to iterate over the chunks of data that are being sent to the server
        buffers.push(chunk)
        // buffers -> array that will store the chunks of data that are being sent to the server
}

        const fullStreamContent = Buffer.concat(buffers).toString()
        // Buffer.concat -> method that concatenates all the buffers in the array into a single buffer
        console.log(fullStreamContent)

        return res.end(fullStreamContent)


    //    return req
    //       .pipe(new InverseNumber())
    //     .pipe(res)
    
})


server.listen(3334)