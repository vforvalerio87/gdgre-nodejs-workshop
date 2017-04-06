'use strict'

const fs = require('fs')
const markdown = require('markdown').markdown

fs.writeFileSync(
  './corsoNode.html',
  markdown.toHTML(
    fs.readFileSync('./corsoNode.md')
      .toString()
  )
)
