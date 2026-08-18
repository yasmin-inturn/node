import {Readable} from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1
// creating a readable stream that will read numbers from 1 to 100
    _read() {
    const i = this.index++
// this is literally THIS. basically.

    setTimeout(() => {
    if (i > 5) {
        this.push(null)
// push -> method that adds data to the stream
    } else {
        const buf = Buffer.from(i.toString())
        
        this.push(buf) }
// push -> method that adds data to the stream
// i.toString() -> converts the number to a string, because streams only work with strings or buffers
    }, 1000)
    }
}

fetch('http://localhost:3334', {
    method: 'POST',
    body: new OneToHundredStream(),
    duplex: 'half'
}).then(response => {
    return response.text()
}).then(data => {
    console.log(data)
})
// this part of the code is responsible for sending the data to the server, 
// and then receiving the response from the server. The response is then logged to the console.