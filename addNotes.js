const fs = require("fs");

function addNotes(notesFile, note) {
    if (note) {
        fs.appendFileSync(`./note/${notesFile}`, `${note}\n`, "utf-8");
        console.log("Заметка добавлена!");
    } else {
        console.log("Заметка не может быть пустой!");
    }
}

module.exports = addNotes;
