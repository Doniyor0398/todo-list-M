const fs = require("fs");

function deleteNotes(num, noteFile, allNotes) {
    const index = num - 1;
    if (index >= 0 && index < allNotes.length) {
        allNotes.splice(index, 1);

        fs.writeFileSync(
            `./note/${noteFile}`,
            `${allNotes.join("\n")}`,
            "utf-8"
        );

        console.log("Good");
    } else {
        console.log("Error!");
    }
}
module.exports = deleteNotes;
