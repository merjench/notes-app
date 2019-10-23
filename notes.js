const fs = require('fs')


const getNotes = function () {
  return 'Get your notes'
}

const addNote = function(title, body) {
  const notes = loadNotes()
  // console.log(notes)
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toSrting()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}


module.exports = {
  getNotes: getNotes,
  addNote: addNote
}
