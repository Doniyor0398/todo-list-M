const fs = require("fs");

function addNotes(noteFile, note) {
    if (note) {
        fs.appendFileSync(`./note/${noteFile}`, `${note}\n`, "utf-8");

        console.log("---Заметка успешно добавлено---> ", note);
    } else {
        console.log("---Что то пошло не так попробуйте сново---> ");
    }
}
module.exports = addNotes;
