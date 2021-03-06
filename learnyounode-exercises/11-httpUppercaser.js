'use strict'

const http = require('http')
const Transform = require('stream').Transform

const toUppercaseStringStream = new Transform({
  transform(chunk, _, callback) {
    callback(null, chunk.toString().toUpperCase())
  }
})

http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    req.pipe(toUppercaseStringStream).pipe(res)
  })
  .listen(process.argv[2])
