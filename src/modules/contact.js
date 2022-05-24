import { loadNav } from "./nav";
import { clear } from "./clear";

function loadContact() {
  clear();
  loadNav();
  const container = document.querySelector("#content");
  const element = document.createElement("div");
  element.innerHTML = "contact";
  element.classList.add("CONTACT");
  container.appendChild(element);

  return element;
}

export { loadContact };
