//********** My Solution **********

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

//********** Second Solution **********

// document.body.addEventListener("click", (event) => {
//   console.log(event.clientX, event.clientY);
//   const color = getColor(event);
//   document.body.style.backgroundColor = color;
// });

// const getColor = (e) => {
//   if (e.clientX % 2 === 0) {
//     if (e.clientY % 2 === 0) {
//       return "red";
//     } else {
//       return "green";
//     }
//   } else {
//     if (e.clientY % 2 === 0) {
//       return "green";
//     } else {
//       return "blue";
//     }
//   }
// };
