import { currentContent, currentTitle, notesContainer } from "./constants.js";
import { deleteNota } from "./deleteNote.js";
import { editNote } from "./editNote.js";
import { getNotes } from "./storage.js";

export function showNotes() {
  notesContainer.innerHTML = "";
  let notes = getNotes();
  let fragment = document.createDocumentFragment();
  notes.forEach(({ title, content, date }, i) => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.addEventListener("click", editNote);
    note.addEventListener("contextmenu", deleteNota); // al dar click derecho
    note.id = i;
    note.innerHTML = `
            <span class="note-title">${title.substr(0, 20)}...</span>
            <span class="note-content">${content.substring(0, 9)}...</span>
            <span class="note-date">${new Date(
              date
            ).toLocaleDateString()}</span>
        `;
    fragment.append(note);
  });
  notesContainer.appendChild(fragment);
  currentTitle.value = notes[0].title;
  currentContent.value = notes[0].content;
  //   notesContainer.append();
}
