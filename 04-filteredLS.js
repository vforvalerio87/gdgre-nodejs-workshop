'use strict'

const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2], 'utf8', (err, files) => {
  if (err) throw err
  else files.filter(file =>
    path.extname(file).slice(1, file.length) === process.argv[3]
  ).forEach(line => console.log(line))
})
