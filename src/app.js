/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let alt = a => Math.floor(Math.random() * (a - 0 + 0)) + 0;

  let who = ["The horse", "My uncle", "His chicken", "My sassy"];
  let action = ["ate", "poop", "steep on it", "broke"];
  let what = ["my excercise", "the sheet", "the bus"];
  let when = [
    "before the dinner",
    "right on time",
    "when I was sleep",
    "during my breakfast",
    "while I was laying"
  ];

  let excuse =
    who[alt(who.length - 1)] +
    " " +
    action[alt(action.length - 1)] +
    " " +
    what[alt(what.length - 1)] +
    " " +
    when[alt(when.length - 1)];
  document.querySelector("#excuse").innerHTML = excuse;
  console.log("Hello Rigo from the console!");
};
