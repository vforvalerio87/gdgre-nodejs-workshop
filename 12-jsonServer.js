'use strict'

const http = require('http')

const sendJSON = (json, res) => {
  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify(json))
}

const sendBadRequest = (res) => {
  res.writeHead(400, { 'content-type': 'text/plain' })
  res.end('Bad request')
}

http
  .createServer((req, res) => {
    const [ endpoint, qs ] = req.url.split('?')
    const date = qs ? new Date(qs.slice(4, qs.length)) : NaN
    switch (endpoint) {
      case '/api/unixtime': {
        if (isNaN(date) === false) {
          sendJSON({
            'unixtime': date.getTime()
          }, res)
        } else { sendBadRequest(res) }
        break
      }
      case '/api/parsetime': {
        if (isNaN(date) === false) {
          sendJSON({
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
          }, res)
        } else { sendBadRequest(res) }
        break
      }
      default: {
        res.writeHead(404, { 'content-type': 'text/plain' })
        res.end('Not found')
        break
      }
    }
  })
  .listen(process.argv[2])
