import "./home_work_lesson_14.scss";
// let Car = function(x, y) {
//   this.x = x;
//   this.y = y;
// };
// Car.prototype.draw = function() {
//   const carHtml = '<img src="./image/car.png">';
//   this.carElement = $(carHtml);
//   this.carElement.css({
//     position: "absolute",
//     left: this.x,
//     top: this.y
//   });

//   $("body").append(this.carElement);
// };

// Car.prototype.moveRight = function() {
//   this.x += 5;

//   this.carElement.css({
//     left: this.x,
//     top: this.y
//   });
// };

// const tesla = new Car(20, 20);
// const nissan = new Car(100, 200);

// tesla.draw();
// nissan.draw();
// const tesslaFinish = () => {
//   for (let i = 20; i < nissan.x; i = i + 5) {
//     console.log(i);
//     if (tesla.x < nissan.x) {
//       tesla.moveRight();
//     }
//   }
// };
// tesslaFinish();
// intervalId = setInterval(() => {});

// let leftOffset = 0;
// const moveHeading = () => {
//   $("#heading").offset({ left: leftOffset });
//   leftOffset++;

//   if (leftOffset > 200) {
//     leftOffset = 0;
//   }
// };

// setInterval(moveHeading, 15);

// const clickHandler = event => {
//   console.log("Click! " + event.pageX + " " + event.pageY);
// };
// $("h1").click(clickHandler);
// $("html").mousemove(function(event) {
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY
//   });
// });

// $("html").click(function(event) {
//   $("#heading").offset({
//     left: event.pageX,
//     top: event.pageY
//   });
// });
// let leftOffset = 0;
// const getRandomNumber =  (max) => {
//     return Math.floor(Math.random() * max)
// }
// const moveHeading = () => {
//     $('#heading').offset({left: leftOffset});
//     leftOffset++;
//     if(left)
// }

// setInterval((), getRandomNumber(1000))

// const user = {
//     name: 'Oleg',
//     greet: function (){
//         console.log("hello John");
//     }
// }

// const user2 = {
//     name: 'Oleg',
//     greet: function (){
//         console.log("hello John");
//     }
// }

// user.greet();
// user2.greet();
// typeof(this)
const containerRoot = document.querySelector(".container");
const blocks = containerRoot.querySelectorAll(".container__block");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let activeIndex = 0;
const toggleOff = () => {
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].classList.remove("active");
  }
};
const activeBlock = () => {
  blocks[activeIndex].classList.add("active");
};
const changeIndexRight = () => {
  if (activeIndex + 1 < blocks.length) {
    activeIndex += 1;
  } else {
    activeIndex = 0;
  }
};
const changeIndexLeft = () => {
  if (activeIndex - 1 > -1) {
    activeIndex -= 1;
  } else {
    activeIndex = 3;
  }
};
const toggleClickRight = () => {
  toggleOff();
  console.log("NEXT");
  changeIndexRight();
  activeBlock(0);
};
const toggleClickLeft = () => {
  toggleOff();
  console.log("PREV");
  changeIndexLeft();
  activeBlock(0);
};
nextButton.onclick = toggleClickRight;
prevButton.onclick = toggleClickLeft;
