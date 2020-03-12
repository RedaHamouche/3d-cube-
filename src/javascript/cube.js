const cube = document.querySelector(".cube");

const arrowUp = document.querySelector(".up");
const arrowDown = document.querySelector(".down");
const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");

const imgs = document.querySelectorAll(".cube img");
console.log(imgs);

let x = 0;
let y = 0;

addEventListener("mousemove", () => {
  cube.style.animation = "none";
});
addEventListener("click", () => {
  cube.style.animation = "none";
});

arrowUp.addEventListener("click", () => {
  x += 90;
  y = 0;

  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
arrowDown.addEventListener("click", () => {
  x -= 90;
  y = 0;
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
arrowLeft.addEventListener("click", () => {
  y += 90;
  x = 0;

  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
arrowRight.addEventListener("click", () => {
  y -= 90;
  x = 0;
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
