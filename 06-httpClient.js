'use strict'

require('http').get(process.argv[2], (response) => {
  response.setEncoding('utf8')
  response.on('data', data => { console.log(data) })
})
