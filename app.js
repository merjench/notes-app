// nodejs.org for documentation + npmjs.com for packages
// const validator = require('validator') // require installed package name
const chalk = require('chalk')
const getNotes = require('./notes.js')  // can be named anything you would like

const command = process.argv[2]

console.log(process.argv)

if (command === 'add') {
  console.log('Adding Notes!')
} else if (command === 'remove') {
  console.log('Remove Notes!')
}
