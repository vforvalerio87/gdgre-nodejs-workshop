'use strict'

require('./05a-modular')(...process.argv.slice(2, 4), (err, files) => {
  if (err) throw err
  else files.forEach(file => console.log(file))
})
