'use strict'

const fs = require('fs')
const path = require('path')
const http = require('http')

const showdown = require('showdown')
const chokidar = require('chokidar')

const appDirectory = fs.realpathSync(process.cwd())

const converter = new showdown.Converter({
  'noHeaderId': true
})

const sourceFile = path.resolve(appDirectory, 'README.md')
const destFile = path.resolve(appDirectory, 'README.html')

const header = [
  '<!DOCTYPE html>',
  '<html>',
  '<head>',
  '<style>',
  '.active { background:turquoise; }',
  'body { font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif; line-height: 1.4; }',
  'a { text-decoration: none; }',
  '</style>',
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

const watcher = chokidar.watch(sourceFile)

watcher.on('change', () => {
  const htmlContent = header + '\n' + converter.makeHtml(fs.readFileSync(sourceFile, 'utf8')) + '\n' + footer
  fs.writeFileSync(destFile, htmlContent)
})

http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream(destFile)
      .pipe(res)
  })
  .listen(process.argv[2] || 3000, () => {
    console.log('Listening on', process.argv[2] || 3000)
  })
