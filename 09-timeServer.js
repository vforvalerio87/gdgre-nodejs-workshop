'use strict'

const leftPad = (input) => input < 10 ? '0'.concat(input) : input.toString()

require('net')
  .createServer(socket => {
    const date = new Date()
    socket.end(
      `${date.getFullYear()}-` +
      `${leftPad(date.getMonth() + 1)}-` +
      `${leftPad(date.getDate())} ` +
      `${leftPad(date.getHours())}:` +
      `${leftPad(date.getMinutes())}\n`
    )
  })
  .listen(process.argv[2])
