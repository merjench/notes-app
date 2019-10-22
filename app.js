// nodejs.org documentation
const fs = require('fs') // store it in fs varibale, can be called anything you want

// fs.writeFileSync('notes.txt', 'Updated this message second time')

fs.appendFileSync('notes.txt', ' I live in NYC')
