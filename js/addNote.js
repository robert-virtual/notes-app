import { showNotes } from "./showNotes.js";
import { addNote, setCurrentNote } from "./storage.js";
const currentContent = document.getElementById("current-content");
const currentTitle = document.getElementById("current-title");
document.addEventListener("click", ({ target }) => {
  if (target.id == "add-note") {
    let note = { title: "Nueva Nota", content: "Contenido", date: Date.now() };
    addNote(note);
    showNotes();
    setCurrentNote(0);
    currentTitle.value = note.title;
    currentContent.value = note.content;
    currentTitle.focus();
  }
});
