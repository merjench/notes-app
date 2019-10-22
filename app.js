// nodejs.org for documentation + npmjs.com for packages
const validator = require('validator') // require installed package name
const chalk = require('chalk')
const getNotes = require('./notes.js')  // can be named anything you would like

const msg = getNotes()
console.log(msg)

// console.log(validator.isURL('https//google.com'))
console.log(chalk.green('Success'))
