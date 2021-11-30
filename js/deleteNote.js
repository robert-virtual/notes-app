import { showNotes } from "./showNotes.js";
import { getNotes, saveNotes } from "./storage.js";

export function deleteNota(e) {
  e.preventDefault();
  let borrar = confirm("Desea Eliminar la nota");
  if (borrar) {
    let listaNotas = getNotes();

    listaNotas = listaNotas.filter((note, i) => i != this.id); // i = number
    saveNotes(listaNotas);
    // volver a mostrar las notas actuales
    showNotes();
  }
}
