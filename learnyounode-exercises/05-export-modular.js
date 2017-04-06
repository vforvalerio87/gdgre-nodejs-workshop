'use strict'

const fs = require('fs')
const path = require('path')

module.exports = (dirname, extension, callback) => {
  fs.readdir(dirname, 'utf8', (err, files) => {
    if (err) callback(err)
    else callback(null, files.filter(file =>
      path.extname(file).slice(1, file.length) === extension
    ))
  })
}
