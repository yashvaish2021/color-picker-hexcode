const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = window.document.querySelector(".btn");
const color = window.document.querySelector(".color");

button.addEventListener("click", function () {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    const randomColor = findRandomNumber();
    hexCode = hexCode + hex[randomColor];
  }

  document.body.style.backgroundColor = hexCode;
  color.textContent = hexCode;
});
function findRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
