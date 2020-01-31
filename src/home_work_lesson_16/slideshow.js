import { Slide } from "./Slide.js";
import { Control } from ".control.js";
import "./slideshow.scss";

function SlideShow(root = document.querySelector("body")) {
  this.root = root;
  this.activeSlide = 0; //acumulytor
  this.data = [];
  this.slides = [];
}
SlideShow.prototype.init = function() {
  this.renderContainer();
  this.getSlides();
  this.renderSlides();
  this.renderControl();
};

SlideShow.prototype.renderSlides = function() {
  const fragment = document.createDocumentFragment();
  this.slides = this.data.map((item, i) => {
    const slide = new Slide(
      fragment,
      item,
      {
        transform: `translateX (-${100 * i}%)`
      },
      i === this.activeSlide
    );
    return;
  });
  this.container.appendChild(
    createNode("ul", ["slideshow__slides"], undefined, fragment)
  );
};

SlideShow.prototype.renderContainer = function() {
  this.container = document.createElement("div");
  this.container.classList.add("slideshow");
  this.root.appendChild(this.container);
};

SlideShow.prototype.renderControl = function() {
  controlsWrapper = document.createElement("div");
  controlsWrapper.classList.add("slideshow__controls");
  const controls = [
    {
      title: "<<<",
      onClick: () => console.log("To first")
    },
    {
      title: "<",
      onClick: () => console.log("Prev")
    },
    {
      title: ">",
      onClick: () => console.log("Next")
    },
    {
      title: ">>>",
      onClick: () => console.log("To last")
    }
  ];
  controls.forEach(
    ({ title, onClick }) => new Control(controlsWrapper, title, onClick)
  );
  this.container.appendChild(controlsWrapper);
};

SlideShow.prototype.getSlides = function() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/movies");
  xhr.send();
  xhr.onload = () => {
    const { list } = JSON.parse(xhr.response);
    this.data = list;
  };
};

export { SlideShow };
