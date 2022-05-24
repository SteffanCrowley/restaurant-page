import { loadNav } from "./nav";
import { clear } from "./clear";
import Supreme from "./supreme.png";

function loadMenu() {
  clear();
  loadNav();

  const container = document.querySelector("#content");
  const item = document.createElement("div");
  const element = document.createElement("div");
  const left = document.createElement("div");
  const desc = document.createElement("p");
  const title = document.createElement("h3");

  const mySupreme = new Image();
  mySupreme.src = Supreme;

  desc.textContent =
    "Supreme pizzas are traditionally topped with pepperoni, sausage, bell peppers, olives, and onions making them a cacophony of different tastes all on one";
  title.textContent = "Supreme Pizza";

  element.innerHTML = "Menu";
  element.classList.add("menu");
  left.classList.add("left");
  mySupreme.classList.add("right");
  item.classList.add("item");

  left.appendChild(title);
  left.appendChild(desc);
  item.appendChild(left);
  item.appendChild(mySupreme);
  element.appendChild(item);
  container.appendChild(element);

  return element;
}

export { loadMenu };
