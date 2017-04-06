'use strict'

const fs = require('fs')
const path = require('path')
const markdown = require('markdown').markdown

const appDirectory = fs.realpathSync(process.cwd())

fs.writeFileSync(
  path.resolve(appDirectory, 'corsoNode.html'),
  markdown.toHTML(
    fs.readFileSync(
      path.resolve(appDirectory, 'src', 'corsoNode.md')
    ).toString()
  )
)
