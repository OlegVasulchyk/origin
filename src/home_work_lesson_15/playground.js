import { Car } from "./car";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function Playground(mp = document.querySelector("body")) {
  this.mountPoint = mp;
  this.cars = [];
}

Playground.prototype.render = function() {
  this.el = document.createElement("div");
  this.el.style.border = "1px solid red";
  this.el.style.padding = "10px 0";
  this.el.style.minHeight = "500px";
  this.el.style.position = "relative";

  this.mountPoint.appendChild(this.el);
};

Playground.prototype.addCar = function(index) {
  const carName = prompt("Enter car name");
  const carSpeed = getRandomArbitrary(200, 1500);
  const finishLineCoord = 450;
  const x = 0;
  const y = 50 * index;
  const finisheCallback = params => {
    console.log("FINISHED", params);
    this.cars.forEach(car => {
      car.stop();
    });
  };
  const car = new Car(
    this.el,
    carName,
    carSpeed,
    x,
    y,
    finishLineCoord,
    finisheCallback
  );
  car.render();
  car.move();
  this.cars.push(car);
};

Playground.prototype.startGame = function(carsCount = 2) {
  for (let i = 0; i < carsCount; i++) {
    this.addCar(i);
  }
};

export { Playground };
