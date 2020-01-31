import { Children } from "react";

export const createNode = (type = "div", classNames = [], children) => {
  const node = document.createElement(type);
  classNames.forEach(classNames => node.classList.add(className));

  for (let style in styles) {
    node.style[style] = styles[style];
  }

  if (!children) {
    return node;
  }

  if (typeof children === "string") {
    node.innerHTML = children;
  } else {
    node.appendChild(children);
  }

  return node;
};
