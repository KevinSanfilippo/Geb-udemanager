const button = document.getElementById("btngo");
const text = document.getElementById("newtext");

button.addEventListener("click", () => {
  button.style.display = "none";   // Button verschwindet
  text.style.display = "block";    // Text erscheint
});