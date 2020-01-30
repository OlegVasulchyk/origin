function Slide(root, slideData) {
  this.root = root;
  this.slideData = slideData;
}

Slide.prototype.render = function() {
  const container = document.createElement("li");
  container.classList.add("slide");
  const img = document.createElement("img");
  img.classList.add("slide__img");
  img.src = this.slideData.preview.high;

  container.appendChild(img);
  this.root.appendChild(container);
};

function SlideShow(root = document.querySelector("body")) {
  this.root = root;
  this.activeSlide = 0; //acumulytor
  this.data = [];
  this.slides = [];
}
SlideShow.prototype.init = function() {
  this.getSlides();
  this.renderSlides();
};

SlideShow.prototype.renderSlides = function() {
  const ul = document.createElement("ul");
  this.slides = this.data.map(item => {
    const slide = new Slide(ul, item);
    slide.render();
  });
  this.root.appendChild(ul);
};

SlideShow.prototype.getSlides = function() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/movies");
  xhr.send();
  xhr.onload = () => {
    const { list } = JSON.parse(xhr.response);
    this.data = list;
    console.log(this.data);
  };
};

export { SlideShow };
