const fs = require("fs");

function readNotes(notesFile) {
    return fs.readFileSync(`./note/${notesFile}`, "utf-8").split("\n");
}

module.exports = readNotes;
