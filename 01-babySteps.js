'use strict'

console.log(
  process.argv
    .slice(2, process.argv.length)
    .reduce((acc, cur) =>
      acc + Number(cur),
      0
    )
)
