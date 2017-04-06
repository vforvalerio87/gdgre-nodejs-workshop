'use strict'

const fs = require('fs')
const path = require('path')
const Transform = require('stream').Transform
const markdown = require('markdown').markdown

const appDirectory = fs.realpathSync(process.cwd())

const readStream = fs.createReadStream(path.resolve(
  appDirectory, 'src', 'corsoNode.md')
)
const writeStream = fs.createWriteStream(path.resolve(
  appDirectory, 'corsoNode.html')
)
const toHTMLStream = new Transform({
  transform(chunk, _, callback) {
    this.push(markdown.toHTML(chunk.toString()))
    callback()
  }
})

readStream
  .pipe(toHTMLStream)
  .pipe(writeStream)
