'use strict'

const fs = require('fs')
const path = require('path')
const Transform = require('stream').Transform
const showdown = require('showdown')

const appDirectory = fs.realpathSync(process.cwd())

const converter = new showdown.Converter({
  'noHeaderId': true
})

const sourceFile = path.resolve(appDirectory, 'README.md')

const sourceStream = fs.createReadStream(sourceFile)
const destStream = fs.createWriteStream(path.resolve(
  appDirectory, 'README.html')
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
  '<style>.active { background:turquoise; }</style>',
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
  '<title>Node.js Workshop - GDG Reggio Emilia</title>',
  '</head>',
  '<body>'
].join('\n')

const footer = [
  '<script>',
  '\'use strict;\'',
  'var toggleActive = function() {',
  'var active = document.querySelector(".active"); if (active) { active.classList.remove("active"); }',
  'var hash = location.hash; if (hash !== "") { document.getElementById(location.hash.slice(1)).classList.add("active"); }',
  '};',
  'window.onload = toggleActive;',
  'window.onhashchange = toggleActive;',
  '</script>',
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
