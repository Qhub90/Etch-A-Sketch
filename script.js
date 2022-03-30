const grid = document.querySelector(".grid");
const clearBtn = document.querySelector("#clear");
const promptBtn = document.querySelector("#prompt");

const colorChange = (e) => {
  e.target.style.backgroundColor = "green";
};

const createGrid = (x) => {
  let squaredPixel = x * x;

  for (let i = 1; i <= squaredPixel; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", colorChange);
    grid.appendChild(div);
  }

  grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${x}, 1fr)`;
};

const reset = () => {
  const sketchPad = document.querySelectorAll("div.grid > div");
  for (let pixel of sketchPad) {
    pixel.style.backgroundColor = "white";
  }
};

clearBtn.addEventListener("click", reset);

const gridSize = () => {
  let input = prompt("Grid Size");

  if (input > 100) {
    return console.log("Too big");
  } else {
    grid.innerHTML = "";
    createGrid(input);
  }
};

promptBtn.addEventListener("click", gridSize);

createGrid(16);
