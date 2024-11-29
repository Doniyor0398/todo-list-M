const fs = require("fs");

const addNotes = require("./addNotes");
const readNotes = require("./readNotes");
const deleteNotes = require("./deleteNotes");

function showMenu(rl, notes, notesFile) {
    console.log(`
	\nДобро пожаловать в приложение для заметок!
	1. Добавить заметку
	2. Просмотреть все заметки
	3. Удалить заметку
	4. Выйти
	`);

    rl.question("Введите опцию: ", (option) => {
        switch (option) {
            case "1":
                rl.question("Введите вашу заметку: ", (note) => {
                    addNotes(notesFile, note);
                    const updatedNotes = readNotes(notesFile);
                    showMenu(rl, updatedNotes, notesFile);
                });
                break;
            case "2":
                console.log("\nВсе заметки:");
                const allNotes = readNotes(notesFile);
																
                const filteredNotes = allNotes.filter(
                    (note) => note.trim() !== ""
                );

                filteredNotes.forEach((note, index) => {
                    console.log(`${index + 1}: ${note}`);
                });

                showMenu(rl, filteredNotes, notesFile);
                break;
            case "3":
                rl.question(
                    "Введите номер заметки для удаления: ",
                    (noteIndex) => {
                        const updatedNotes = readNotes(notesFile);
                        deleteNotes(Number(noteIndex), updatedNotes, notesFile);
                        showMenu(rl, notesFile);
                    }
                );
                break;
            case "4":
                console.log("Выход ->");
                rl.close();
                break;
            default:
                console.log("Неверный выбор, попробуйте снова");
                showMenu(rl, notes, notesFile);
        }
    });
}

module.exports = showMenu;
