'use strict'

require('net')
  .createServer(socket => {
    const date = new Date()
    let month = (date.getMonth() + 1).toString()
    month = month.length < 2 ? `0${month}` : month
    let day = date.getDate().toString()
    day = day.length < 2 ? `0${day}` : day
    socket.end(`${date.getFullYear()}-${month}-${day} ${date.getHours()}:${date.getMinutes()}\n`)
  })
  .listen(process.argv[2])
