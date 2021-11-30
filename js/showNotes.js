import { deleteNota } from "./deleteNote.js";
import { editNote } from "./editNote.js";
import { getNotes } from "./storage.js";

export function showNotes() {
  const notesContainer = document.querySelector(".notes-container");
  notesContainer.innerHTML = "";
  let notes = getNotes();
  console.log(notes);
  notes.forEach(({ title, content, date }, i) => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.addEventListener("click", editNote);
    note.addEventListener("contextmenu", deleteNota); // al dar click derecho
    note.id = i;
    note.innerHTML = `
            <span class="note-title">${title}</span>
            <span class="note-content">${content.substring(0, 9)}...</span>
            <span class="note-date">${new Date(
              date
            ).toLocaleDateString()}</span>
        `;
    notesContainer.appendChild(note);
  });
  //   notesContainer.append();
}
