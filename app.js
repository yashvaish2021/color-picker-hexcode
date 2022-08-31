const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "aliceblue",
  "cadetblue",
  "beige",
  "chocolate",
  "#00ffff",
  "rgba(127, 255, 0, 1)",
  "blanchedalmond",
  "rgba(0,255,0,1)",
  "rgba(255, 127, 80, 1)",
  "rgba(255,255,0,1)",
  "#8a2be2",
];

const button = window.document.querySelector(".btn");
const color = window.document.querySelector(".color");

button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  color.innerHTML = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
