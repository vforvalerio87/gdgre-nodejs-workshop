'use strict'

require('./05a-modular')(process.argv[2], process.argv[3], (err, files) => {
  if (err) throw err
  else files.forEach(file => console.log(file))
})
