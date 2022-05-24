import { loadNav } from "./nav";
import { clear } from "./clear";

function loadMenu() {
  clear();
  loadNav();
  const container = document.querySelector("#content");
  const element = document.createElement("div");
  element.innerHTML = "Menu";
  element.classList.add("Menu");
  container.appendChild(element);

  return element;
}

export { loadMenu };
