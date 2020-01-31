import "./slide.scss";
const ACTIVE_CLASS_NAME = "active";

function Slide(root, slideData, style = {}, isActive = false) {
  this.root = root;
  this.slideData = slideData;
  this._styles = styles;
  this.isActive = isActive;
  this.render();
}

Slide.prototype.render = function() {
  this.renderContainer();
  this.renderImg();
  this.root.appendChild(this._container);
};

Slide.prototype._renderContainer = function() {
  this.container = document.createElement("li");
  this.container.classList.add("slide");
  if (this.isActive) {
    this.setActive();
  }
  this.setStyles();
};

Slide.prototype._renderImg = function() {
  const img = document.createElement("img");
  img.classList.add("slide__img");
  img.src = this.slideData.preview.high;
  this.container.appendChild(img);
};
Slide.prototype._setStyles = function() {
  for (let style in this.styles) {
    this.container.style[style] = styles[style];
  }
};

Slide.prototype.setActive = function() {
  this.container.classList.add(ACTIVE_CLASS_NAME);
};

Slide.prototype.removeActive = function() {
  this.container.classList.remove(ACTIVE_CLASS_NAME);
};

export { Slide };
