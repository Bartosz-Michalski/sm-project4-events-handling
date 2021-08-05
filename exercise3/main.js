const square = document.querySelector("div");

let squareX = 150;
let squareY = 50;

square.style.left = `${squareX}px`;
square.style.top = `${squareY}px`;

let insideSquareX;
let insideSquareY;

let dragAndDrop = false;

square.addEventListener("mousedown", (e) => {
  square.style.backgroundColor = "grey";
  dragAndDrop = !dragAndDrop;
  // dragAndDrop = true;

  insideSquareX = e.offsetX;
  insideSquareY = e.offsetY;
});

square.addEventListener("mousemove", (e) => {
  if (dragAndDrop) {
    squareX = e.clientX - insideSquareX;
    squareY = e.clientY - insideSquareY;

    square.style.left = `${squareX}px`;
    square.style.top = `${squareY}px`;
  }
});

square.addEventListener("mouseup", () => {
  square.style.backgroundColor = "black";
  dragAndDrop = !dragAndDrop;
  // dragAndDrop = false;
});
