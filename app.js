const fs = require("fs");
const readline = require("readline");

const readNote = require("./readNotes");
const showMenu = require("./showMenu");

const notesFile = "note.txt";

if (!fs.existsSync("./note")) {
    fs.mkdirSync("./note");
    console.log("Папка создана");
} else {
    console.log("Папка уже существует");
}

if (!fs.existsSync(`./note/${notesFile}`)) {
    fs.writeFileSync(`./note/${notesFile}`, "", "utf-8");
    console.log("Файл создан");
} else {
    console.log("Файл уже существует");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

showMenu(rl, readNote(notesFile), notesFile);
