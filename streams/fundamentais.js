// Netflix or Spotify
// Writeable streams -> write data to a file or database little by little, without waiting for the entire file to be read

// Example: importation of clients by CSV (excel)
// Readable streams -> takes longer, read all the files first to later process them to the database

// Writeable streams were the node.js biggest innovation at the time.

// requisitions and responses are also streams examples 

// here ill use stdin and stdout to demonstrate the use of streams.

//process.stdin
  //.pipe(process.stdout)
// pipe -> connects the output with the imput
// in this exemple, the output and the input are the same as if it were a real "pipe"
// process. -> always open, waiting for input, and when it receives it, it sends it to the output

import {Readable, Transform, Writable} from 'node:stream'
// node:stream -> module that allows you to create streams in node.js


class OneToHundredStream extends Readable {
  index = 1
// creating a readable stream that will read numbers from 1 to 100
  _read() {
    const i = this.index++
// this is literally THIS. basically.

    setTimeout(() => {
          if (i > 100) {
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

class InverseNumber extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1
// const because the value will not change, it will always be the same

    callback(null, Buffer.from(transformed.toString()))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
// _write -> method that writes data to the stream
// chunk -> data that is being written to the stream
// encoding -> encoding of the data being written to the stream
// callback -> function that is called when the data has been written to the stream
    console.log(Number(chunk.toString()) * 10)
// chunk is a buffer, so we need to convert it to a string before logging it
    callback()

}
}

new OneToHundredStream()
  .pipe(new InverseNumber())
  .pipe(new MultiplyByTenStream())

// there's also the duplex stream type, which is a combination of readable and writable streams.



