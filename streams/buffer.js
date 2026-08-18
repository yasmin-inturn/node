// buffers is the part of the memory that is used to store data temporarily while it is being moved from one place to another
// In this case, it is used to store the chunks of data that are being sent to the server. 

// buffer keeps the data in binary format, which is more efficient than storing it as a string.
// it was created cuz of the incapability of the JavaScript to deal with binary data

// example:

const buf = Buffer.from('Hello, World!')

console.log(buf) // <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21> -> Hello, World! (in binary format)

// this is way more efficient than storing it as a string, which would take up more memory and be slower to process.