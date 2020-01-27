import "./work_lesson_12.css";

const myBtn = document.querySelector(".btn");
const span = document.querySelector(".span");
const btns = document.querySelectorAll(".btn");

const getRandom = max => {
  return Math.floor(Math.random() * max);
};

const getRandomColors = () => {
  return `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
};

// myBtn.onclick = function() {
//   if (myBtn.style.backgroundColor == "red") {
//     myBtn.style.backgroundColor = "green";
//   } else {
//     myBtn.style.backgroundColor = "red";
//   }
// };
// let coordinate = 0;
// myBtn.onclick = function() {
//   myBtn.style.backgroundColor = getRandomColors();
//   coordinate += 10;
//   span.style.transform = "translateX(" + coordinate + "px)";
// };

// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");
// const btn4 = document.querySelector(".btn4");

// const toggleOff = () => {
//   btn1.style.backgroundColor = "";
//   btn2.style.backgroundColor = "";
//   btn3.style.backgroundColor = "";
//   btn4.style.backgroundColor = "";
// };

// btn1.onclick = function() {
//   toggleOff();
//   btn1.style.backgroundColor = getRandomColors();
// };

// btn2.onclick = function() {
//   toggleOff();
//   btn2.style.backgroundColor = getRandomColors();
// };
// btn3.onclick = function() {
//   toggleOff();
//   btn3.style.backgroundColor = getRandomColors();
// };
// btn4.onclick = function() {
//   toggleOff();
//   btn4.style.backgroundColor = getRandomColors();
// };

// const toggleOff = () => {
//   for (let i = 0; i < btns.length; i++) {
//     btns[i].style.backgroundColor = "";
//   }
// };

// for (let i = 0; i < btns.length; i++) {
//   btns[i].onclick = () => {
//     toggleOff();
//     btns[i].style.backgroundColor = getRandomColors();
//   };
// }

// Рішеня номер 1

// const toggleOff = () => {
//     for (let i = 0; i < btns.length; i++) {
//       btns[i].style.backgroundColor = "";
//     }
//   };

// const toggleOn = () => {
//   for (let i = 0; i < btns.length; i++) {
//     btns[i].style.backgroundColor = "";
//   }
// };

// for (let i = 0; i < btns.length; i++) {
//     btns[i].onclick = () => {
//       toggleOff();
//       btns[i].style.backgroundColor = getRandomColors();
//     };
//   }

// Варіант 2

const toggleOff = () => {
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("toggled");
    btns[i].style.backgroundColor = "";
  }
};

const toggleOn = btn => {
  btn.classList.add("toggled");
  btn.style.backgroundColor = getRandomColors();
};

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = () => {
    toggleOff();
    toggleOn(btns[i]);
  };
}
