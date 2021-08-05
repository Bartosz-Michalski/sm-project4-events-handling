let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;

const changeColor = (e) => {
  //********** Conditional statement - if **********

  //   if (e.keyCode === 40) {
  //     red -= 2;
  //     green -= 2;
  //     blue -= 2;
  //     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
  //   } else if (e.keyCode === 38) {
  //     red += 2;
  //     green += 2;
  //     blue += 2;
  //     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
  //   }

  //********** Conditional statement - switch **********

  switch (e.keyCode) {
    case 40:
      red -= 2;
      green -= 2;
      blue -= 2;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
      break;
    case 38:
      red += 2;
      green += 2;
      blue += 2;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
      break;
  }
};

window.addEventListener("keydown", changeColor);
