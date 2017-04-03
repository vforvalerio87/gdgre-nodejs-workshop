'use strict'

const leftPad = (input) => input < 10 ? '0'.concat(input) : input.toString()

require('net')
  .createServer(socket => {
    const date = new Date()
    const month = leftPad(date.getMonth() + 1)
    const day = leftPad(date.getDate())
    socket.end(`${date.getFullYear()}-${month}-${day} ${date.getHours()}:${date.getMinutes()}\n`)
  })
  .listen(process.argv[2])
