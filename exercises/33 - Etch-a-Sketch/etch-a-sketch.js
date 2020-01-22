// select the elements on the page -
// canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".shake");
let MOVE_AMOUNT = 10;

const turnBlackButton = document.querySelector(".turn-black");
const makeLineBiggerButton = document.querySelector(".make-line-bigger");
// setup our canvas for drawing
// make a variable called height and width
// from the same properties on our canvas
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// create random x and y starting point
// on the canvas

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
let lightness = "50%";
ctx.strokeStyle = `hsl(${hue}, 100%, ${lightness})`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  // increment the hue
  hue += 1;
  ctx.strokeStyle = `hsl(${hue}, 100%, ${lightness})`;
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values
  // depending on what the user did

  if (key === "ArrowUp") {
    y -= MOVE_AMOUNT;
  } else if (key === "ArrowDown") {
    y += MOVE_AMOUNT;
  } else if (key === "ArrowRight") {
    x += MOVE_AMOUNT;
  } else if (key === "ArrowLeft") {
    x -= MOVE_AMOUNT;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}
// write a handler for the keys
function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
// clear / shake function
function clearCanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    function() {
      canvas.classList.remove("shake");
    },
    { once: true }
  );
}
// listen for arrow keys
window.addEventListener("keydown", handleKey);
shakeButton.addEventListener("click", clearCanvas);

// MY OWN ADDONS
// turn the line black button

function toggleLineColor() {
  if (lightness === "50%") {
    lightness = "0%";
    ctx.strokeStyle = `hsl(${hue}, 100%, ${lightness})`;
    turnBlackButton.textContent = "Rainbow Color";
  } else if (lightness === "0%") {
    lightness = "50%";
    ctx.strokeStyle = `hsl(${hue}, 100%, ${lightness})`;
    turnBlackButton.textContent = "Black Color";
  }
}

function toggleLineSize() {
  if (MOVE_AMOUNT === 10) {
    MOVE_AMOUNT = 20;
    ctx.lineWidth = MOVE_AMOUNT;
    makeLineBiggerButton.textContent = "Turn line thinner";
  } else if (MOVE_AMOUNT === 20) {
    MOVE_AMOUNT = 10;
    ctx.lineWidth = MOVE_AMOUNT;
    makeLineBiggerButton.textContent = "Turn line thicker";
  }
}

turnBlackButton.addEventListener("click", toggleLineColor);
makeLineBiggerButton.addEventListener("click", toggleLineSize);
