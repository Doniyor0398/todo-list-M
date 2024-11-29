const fs = require("fs");

function deleteNotes(i, notes, notesFile) {
    if (i < 1 || i > notes.length) {
        console.log("Неверный номер заметки");
        return;
    }
    notes.splice(i - 1, 1);
    fs.writeFileSync(`./note/${notesFile}`, notes.join("\n"), "utf-8");
    console.log("Заметка удалена!");
}

module.exports = deleteNotes;
