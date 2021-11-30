import { updateNote } from "./storage.js";

const currentTitle = document.getElementById("current-title");
const currentContent = document.getElementById("current-content");

currentTitle.addEventListener("keyup", saveNote);
currentContent.addEventListener("keyup", saveNote);
function saveNote(e) {
  updateNote({
    title: currentTitle.value,
    content: currentContent.value,
    date: Date.now(),
  });
}
