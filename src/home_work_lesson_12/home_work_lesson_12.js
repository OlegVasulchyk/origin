import "./home_work_lesson_12.scss";

const trafficLighterRoot = document.querySelector(".traffic-lighter");
const lights = trafficLighterRoot.querySelectorAll(".traffic-lighter__light");
const togglerBtn = trafficLighterRoot.querySelector(
  ".traffic-lighter__toggler"
);
const isEnabled = false;
const toggleOff = () => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].classList.remove("active__red");
    lights[i].classList.remove("active__orange");
    lights[i].classList.remove("active__green");
  }
};

const toggleOn = () => {
  for (let i = 0; i < lights.length; i++) {
    lights[0].classList.add("active__red");
    console.log(lights[0]);
    lights[1].classList.add("active__orange");
    lights[2].classList.add("active__green");
  }
};

for (let i = 0; i < lights.length; i++) {
  lights[i].onclick = () => {
    toggleOff();
    toggleOn();
  };
}
