'use strict'

const fs = require('fs')
const path = require('path')
const Transform = require('stream').Transform
const showdown = require('showdown')

const appDirectory = fs.realpathSync(process.cwd())

const converter = new showdown.Converter({
  'noHeaderId': true
})

const sourceFile = path.resolve(appDirectory, 'src', 'corsoNode.md')

const sourceStream = fs.createReadStream(sourceFile)
const destStream = fs.createWriteStream(path.resolve(
  appDirectory, 'corsoNode.html')
)
const toHTML = new Transform({
  transform(chunk, _, callback) {
    const mdString = chunk.toString('utf8')
    const html = converter.makeHtml(mdString)
    callback(null, html)
  }
})

const header = [
  '<!DOCTYPE html>',
  '<html>',
  '<head>',
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
  '<title>Node.js Workshop - GDG Reggio Emilia</title>',
  '</head>',
  '<body>'
].join('\n')

const footer = [
  '</body>',
  '</html>'
].join('\n')

destStream.write(
  `${header}\n`,
  () => {
    sourceStream
      .pipe(toHTML)
      .pipe(destStream, {end: false})
    sourceStream.on('end', () => {
      destStream.end(`\n${footer}`)
    })
  }
)
