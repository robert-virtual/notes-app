const notesContainer = document.querySelector(".notes-container");

document.addEventListener("click", ({ target }) => {
  if (target.id == "add-note") {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
            <span class="note-title">Nueva nota</span>
            <span class="note-content">contenido de la nota...</span>
            <span class="note-date">fecha de la nota</span>
        `;

    notesContainer.append(note);
  }
});
