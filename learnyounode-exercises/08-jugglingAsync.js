'use strict'

const http = require('http')

Promise.all(
  process.argv.slice(2, 5).map(url =>
    new Promise(resolve => {
      let body = ''
      http.get(url, response => {
        response.on('data', data => { body += data })
        response.on('end', () => { resolve(body.toString()) })
      })
    })
  )
).then(bodies =>
  bodies.forEach(body => {
    console.log(body)
  })
)
