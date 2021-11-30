import { showNotes } from "./showNotes.js";
import { getNotes, saveNotes } from "./storage.js";

export function deleteNota(e) {
  e.preventDefault();
  let borrar = confirm("Desea Eliminar la nota");
  if (borrar) {
    let listaNotas = getNotes();
    console.log(this.id); // es string

    listaNotas = listaNotas.filter((note, i) => i != this.id); // i = number
    saveNotes(listaNotas);
    console.log("eliminar");
    // volver a mostrar las notas actuales
    showNotes();
  }
}
