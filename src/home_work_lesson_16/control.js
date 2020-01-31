import "./control.scss";
function Control(root, title, onClick) {
  this.root = root;
  this.title = title;
  this.clickHandler = onClick;
  this.render();
}

Control.prototype.render = function() {
  this.control = document.createElement("button");
  this.control.classList("control");
  this.control.innerHTML = `<span>${this.title}</span>`;
  if (this.clickHandler) {
    this.control.addEventListener("click", e => this.clickHandler(e));
  }
  this.root.appendChild(this.control);
};
export { Control };
