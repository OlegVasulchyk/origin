import "./work_lesson_16.scss";

import { Feed } from "./feeds";

const body = document.querySelector("body");
const feed = new Feed(body);
feed.init();
