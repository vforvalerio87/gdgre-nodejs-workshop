'use strict'

const http = require('http')
const url = require('url')

http
  .createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true)
    const date = query.iso ? new Date(query.iso) : NaN
    let body = { 'statusMessage': 'Bad request' }
    let writeHeadArgs = isNaN(date) ?
      [400, { 'content-type': 'application/json' }] :
      [200, { 'content-type': 'application/json' }]
    switch (pathname) {
      case '/api/unixtime': {
        if (!isNaN(date)) {
          body = Object.assign({}, { 'unixtime': date.getTime() })
        }
        break
      }
      case '/api/parsetime': {
        if (!isNaN(date)) {
          body = Object.assign({}, {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
          })
        }
        break
      }
      default: {
        writeHeadArgs = [404, { 'content-type': 'application/json' }]
        body = Object.assign({}, { 'statusMessage': 'Not found' })
        break
      }
    }
    res.writeHead(...writeHeadArgs)
    res.end(JSON.stringify(body))
  })
  .listen(process.argv[2])
