import Pizza from "./pizza.jpg";
import { loadNav } from "./nav";
import { clear } from "./clear";

function loadHome() {
  clear();
  loadNav();
  const container = document.querySelector("#content");
  const element = document.createElement("div");
  const myPizza = new Image();
  myPizza.src = Pizza;
  element.innerHTML = "Pizza Restaurant";
  element.classList.add("home");
  element.appendChild(myPizza);
  container.appendChild(element);
  console.log("helo");
  return element;
}

export { loadHome };
