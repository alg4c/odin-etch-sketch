let color = "black";
let click = false;

function populateBoard(size) {
  const board = document.querySelector(".board");
  const squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    const square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    board.appendChild(square);
  }
}

populateBoard(50);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    alert("Size invalid. Select size 2-100.");
  }
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  const board = document.querySelector(".board");
  const squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector(".board").addEventListener("click", () => {
  click = !click;
  if (click) {
    document.querySelector(".mode").textContent = "Mode: Drawing";
  } else {
    document.querySelector(".mode").textContent = "Mode: Not Drawing";
  }
});
