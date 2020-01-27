import "./home_work_lesson_15.scss";
import { Playground } from "./playground";
// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// Person.prototype.get = function() {
//   console.log(this.name + " " + this.surname);
// };
// const user1 = new Person("Oleg", "vasulchyk");
// const user2 = new Person("Dima", "Kostuk");
// user1.get();
// user2.get();
// console.log(user1);

// const body = document.querySelector("body");
// const ferrari = new Car(body, "ferrari", 300, 20, 20);
// const oldDadCar = new Car(body, "Old-old car", 200, 20, 100);

const game = new Playground();

game.render();
game.startGame(6);

// document.onclick = () => {
//   ferrari.move();
//   oldDadCar.move();
// };
