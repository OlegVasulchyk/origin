import {
    Car
} from "./car";

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function Playground(mp = document.querySelector("body")) {
    this.mountPoint = mp;
}
Playground.prototype.render = function () {
    this.el = document.createElement("div");
    this.el.style.border = "1px solid red";
    this.el.style.minHeight = '500px';
    this.el.style.position = 'relative';
    this.mountPoint.appendChild(this.el);
}

Playground.prototype.addCar = function (index) {
    const carName = prompt('Enter car name');
    const carSpeed = getRandomArbitrary(400, 1000);
    const car = new Car(this.el, carName, carSpeed, 0, 50 * index);
    car.render();
    car.move();
};

Playground.prototype.startGame = function (carsCount = 2) {
    for (let i = 0; i < carsCount; i++) {
        this.addCar(i);
    }
};
export {
    Playground
};