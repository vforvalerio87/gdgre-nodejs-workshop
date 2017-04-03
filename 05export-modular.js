'use strict'

module.exports = (dirname, extension, callback) => {
  require('fs').readdir(dirname, 'utf8', (err, files) => {
    if (err) callback(err)
    else callback(null, files.filter(file =>
      require('path').extname(file).slice(1, file.length) === extension
    ))
  })
}
