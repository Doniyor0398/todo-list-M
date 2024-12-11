const fs = require("fs");
const readline = require("readline");

const showMenu = require("./showMenu");

const noteFile = "text.txt";

if (!fs.existsSync(`./note`)) {
    fs.mkdirSync(`./note`);

    console.log("Папка успешно создано");
} else {
    console.log("Папка уже существует");
}
if (!fs.existsSync(`./note/${noteFile}`)) {
    fs.writeFileSync(`./note/${noteFile}`, "", "utf-8");

    console.log("Файл успешно создано");
} else {
    console.log("Файл уже существует");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

showMenu(rl, noteFile);
