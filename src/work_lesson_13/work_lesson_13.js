import "./work_lesson_13.scss";
import { trafficLighter } from "../common/traffic-lighter/traffic-lighter";

// trafficLighter(".first-lighter");
// trafficLighter(".second-lighter");
// trafficLighter(".third-lighter");
const trafficLighterRoot = document.querySelector(".traffic-lighter");
const lights = trafficLighterRoot.querySelectorAll(".traffic-lighter__light");
const togglerBtn = trafficLighterRoot.querySelector(
  ".traffic-lighter__toggler"
);
// let isEnabled = false;
// Вариант 1
// const toggleOfAll = () => {
//   for (let i = 0; i < lights.length; i++) {
//     lights[i].classList.remove("active");
//   }
// };

// for (let i = 0; i < lights.length; i++) {
//   lights[i].onclick = function() {
//     if (isEnabled) {
//       toggleOfAll();
//       lights[i].classList.add("active");
//     }
//   };
// }

// const toggleOfAllLighter = () => {
//   isEnabled = false;
//   toggleOfAll();
// };

// const toggleOnLighter = () => {
//   isEnabled = true;
//   lights[0].classList.add("active");
// };

// const togglerClickHandler = () => {
//   if (isEnabled) {
//     toggleOfAllLighter();
//   } else {
//     toggleOnLighter();
//   }
// };

// togglerBtn.onclick = togglerClickHandler;

// метод 1
// togglerBtn.onclick = () => {
//   isEnabled = !isEnabled;
// };

// Варіант 2

let isEnabled = false;
let activeIndex = 0;
let intervalId = 0;

const toggleOfAll = () => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].classList.remove("active");
  }
};

const activateLight = () => {
  lights[activeIndex].classList.add("active");
};

for (let i = 0; i < lights.length; i++) {
  lights[i].onclick = function() {
    if (isEnabled) {
      clearInterval(intervalId);
      toggleOfAll();
      activeIndex = i;
      activateLight();
      startAutoChange();
    }
  };
}

const changeIndex = () => {
  if (activeIndex + 1 < lights.length) {
    activeIndex += 1;
  } else {
    activeIndex = 0;
  }
};

const toggleOfAllLighter = () => {
  isEnabled = false;
  toggleOfAll();
  activeIndex = 0;
  clearInterval(intervalId);
};

const startAutoChange = () => {
  intervalId = setInterval(() => {
    toggleOfAll();
    changeIndex();
    activateLight();
  }, 1000);
};

const toggleOnLighter = () => {
  isEnabled = true;
  activateLight();
  startAutoChange();
};

const togglerClickHandler = () => {
  if (isEnabled) {
    toggleOfAllLighter();
  } else {
    toggleOnLighter();
  }
};

togglerBtn.onclick = togglerClickHandler;
