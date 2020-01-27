function Car(mountPoint, title, speed, x, y) {
    this.title = title;
    this.mountPoint = mountPoint;
    this.speed = speed;
    this.x = x;
    this.y = y;
}

Car.prototype.render = function () {

    this.element = document.createElement('div');
    this.element.textContent = this.title;
    this.element.style.backgroundColor = 'red';
    this.element.style.border = '1px solid green';
    this.element.style.position = 'absolute';
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
    this.element.style.minWidth = '50px';
    this.element.style.height = '50px';
    this.mountPoint.appendChild(this.element);
};

Car.prototype.move = function () {
    setInterval(() => {
        this.element.style.left = parseInt(this.element.style.left) + 10 + "px";
    }, this.speed);
};


export {
    Car
};