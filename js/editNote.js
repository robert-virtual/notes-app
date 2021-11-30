import { currentContent, currentTitle } from "./constants.js";
import { showNotes } from "./showNotes.js";
import { getNotes, setCurrentNote } from "./storage.js";

export function editNote() {
  showNotes();
  const notes = getNotes();
  let note = notes[this.id];
  setCurrentNote(this.id);
  currentTitle.value = note.title;
  currentContent.value = note.content;
}
