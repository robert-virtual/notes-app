import { Note } from "./Note.js";

export function getNotes() {
  let notes = [
    {
      title: "Primer Nota",
      content: "contenido de la primer nota",
      date: Date.now(),
    },
  ];
  let stringNotes = localStorage.getItem("notes");
  if (!stringNotes) {
    console.log("nota por defecto");
    localStorage.setItem("notes", JSON.stringify(notes));
    return notes;
  }
  notes = JSON.parse(stringNotes);
  return notes;
}

export function saveNotes(notes) {
  //recibe todas las notas(lista de nostas)
  localStorage.setItem("notes", JSON.stringify(notes));
}

export function updateNote(note) {
  //recibe una sola nota
  const noteId = getCurrentNote();
  const notes = getNotes();
  notes[noteId] = note;
  localStorage.setItem("notes", JSON.stringify(notes));
}
export function addNote(note = Note) {
  const notes = getNotes();
  notes.unshift(note);
  localStorage.setItem("notes", JSON.stringify(notes));
}

export function setCurrentNote(noteId = 0) {
  localStorage.setItem("noteId", JSON.stringify(noteId));
}
export function getCurrentNote() {
  const noteString = localStorage.getItem("noteId");
  let noteId = 0;
  if (noteString) {
    noteId = JSON.parse(noteString);
  }
  return noteId;
}
