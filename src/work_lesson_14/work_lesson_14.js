import "./work_lesson_14.scss";

import { trafficLighter } from "../common/traffic-lighter/traffic-lighter";
import { commentForm } from "./comment-form";
import { garland } from "./garland";

garland(300);

// const template = `
// <article>
//     <h1>Hello</h1>
//     <p>TEST</p>
// </article>
// `;
// const header = document.createElement("h1");
// const article = document.createElement("article");
// const p = document.createElement("p");

// article.appendChild(header);
// article.appendChild(p);

// const body = document.querySelector("body");
// body.innerHTML = template;

// header.innerHTML = "hello word";
// header.classList.add("header");
// console.log(header);

// body.appendChild(article);

commentForm();
