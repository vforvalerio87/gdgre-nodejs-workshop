'use strict'

const leftPad = (input, charTotal = 2, paddingChar = '0') => input.length < charTotal ? leftPad(paddingChar.concat(input)) : input

require('net')
  .createServer(socket => {
    const date = new Date()
    let month = (date.getMonth() + 1).toString()
    month = leftPad(month) 
    let day = date.getDate().toString()
    day = leftPad(day) 
    socket.end(`${date.getFullYear()}-${month}-${day} ${date.getHours()}:${date.getMinutes()}\n`)
  })
  .listen(process.argv[2])
