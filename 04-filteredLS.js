'use strict'

require('fs').readdir(process.argv[2], 'utf8', (err, files) => {
  if (err) throw err
  else files.filter(file =>
    require('path').extname(file).slice(1, file.length) === process.argv[3]
  ).forEach(line => console.log(line))
})
