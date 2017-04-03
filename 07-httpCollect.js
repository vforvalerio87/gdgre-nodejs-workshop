'use strict'

require('http').get(process.argv[2], response => {
  let body = ''
  response.on('data', data => { body += data })
  response.on('end', () => {
    body = body.toString()
    console.log(body.length)
    console.log(body)
  })
})
