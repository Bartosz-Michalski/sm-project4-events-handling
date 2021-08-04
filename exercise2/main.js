const body = document.body;

body.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  console.log(x, y);

  if (x % 2 === 0 && y % 2 === 0) {
    body.style.backgroundColor = "red";
  } else if (x % 2 === 0 || y % 2 === 0) {
    body.style.backgroundColor = "green";
  } else {
    body.style.backgroundColor = "blue";
  }
});
