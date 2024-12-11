const fs = require("fs");

function readNotes(noteFile) {
    const allNotes = fs.readFileSync(`./note/${noteFile}`, "utf-8").trim();

    const countNotes = allNotes.split("\n").length;

    if (allNotes === "") {
        console.log("Заметки - ", countNotes - 1);
    } else {
        console.log("Количество заметки ", "(->", countNotes, "<-)");
    }

    return console.log(allNotes);
}
module.exports = readNotes;
