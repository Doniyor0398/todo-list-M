const fs = require("fs");
const addNotes = require("./addNotes");
const readNotes = require("./readNotes");
const deleteNotes = require("./deleteNotes");
const { defaultMaxListeners } = require("events");

function showMenu(rl, noteFile) {
    console.log(`
\nДобро пожаловать todo-list\n
1. Добавить заметку
2. Посмотреть заметку
3. Удалить заметку
4. Выход -->
`);
    rl.question("Введите опцию: ", (option) => {
        if (!option) {
            console.log("Что то пошло не так попробуйте сново");
            return showMenu(rl, noteFile);
        } else {
            switch (option) {
                case "1":
                    rl.question("Введите заметку: ", (note) => {
                        addNotes(noteFile, note);
                        showMenu(rl, noteFile);
                    });
                    break;
                case "2":
                    console.log("Все заметки👇\n");
                    readNotes(noteFile);
                    showMenu(rl, noteFile);
                    break;
                case "3":
                    const allNotes = fs
                        .readFileSync(`./note/${noteFile}`, "utf-8")
                        .trim()
                        .split("\n");
                    allNotes.forEach((note, i) => {
                        const index = i + 1;
                        if (note) {
                            console.log(index, `${note}`);
                        } else {
                            console.log(
                                "\nДля удаление, сначала добавьте заметки\n"
                            );
                            return false;
                        }
                    });

                    rl.question("Какую строку хотите удалить? ", (num) => {
                        deleteNotes(num, noteFile, allNotes);
                        showMenu(rl, noteFile);
                    });
                    break;
                case "4":
                    console.log("Выход-->");
                    rl.close();
                    break;
                default:
                    console.log(option, "=>такая опция не существует");

                    showMenu(rl, noteFile);
                    break;
            }
        }
    });
}
module.exports = showMenu;
