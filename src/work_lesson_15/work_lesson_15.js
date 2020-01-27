import "./work_lesson_15.scss";
import { Playground } from "./game";

const game = new Playground();

game.render();
game.startGame(6);

// const body = document.querySelector('body');
// const ferrari = new Car(body, 'Ferrari', 300, 20, 20);
// const oldDadCar = new Car(body, 'Old-old car', 5000, 20, 100);

// ferrari.render();
// oldDadCar.render();

// document.onclick = () => {
//     ferrari.move();
//     oldDadCar.move();
// }

// function User(firstName, secondName) {
//     this.firstName = firstName;
//     this.secondName = secondName;
// }

// User.prototype.getFullName = function () {
//     console.log(this.firstName + this.secondName);
// }

// const user1 = new User("asd", "sd2");
// const user2 = new User("asd", "ddd");

// console.log(user1);
// console.log(user2);

// function User(name) {
//     this.name = name;
//     this.hello = "world";
// }

// User.prototype.greet = function () {
//     console.log(this.name);
// }

// const user1 = new User("art");
// const user2 = new User("222");
// console.log(user1);
// console.log(user2);

// function User(name) {
//     this.name = name;
//     this.greet = function () {
//         console.log(this.name);
//     };
// }
// const user1 = new User("art");
// const user2 = new User("222");
// console.log(user1);
// console.log(user2);

// function greeting() {
//     console.log('hello ' + this.name);
//     console.log(this);
// }
// const user = {
//     name: "art",
//     greet: greeting
// };

// const user2 = {
//     name: "222",
//     greet: greeting
// };

// user.greet();
// user2.greet();
