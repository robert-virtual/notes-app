import { showNotes } from "./showNotes.js";
import { getNotes, setCurrentNote } from "./storage.js";

const currentTitle = document.getElementById("current-title");
const currentContent = document.getElementById("current-content");

export function editNote() {
  showNotes();
  const notes = getNotes();
  let note = notes[this.id];
  console.log(note);
  setCurrentNote(this.id);
  currentTitle.value = note.title;
  currentContent.value = note.content;
}
