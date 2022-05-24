import { loadHome } from "./home";

function loadNav() {
  const container = document.querySelector("#content");
  const element = document.createElement("div");
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  element.classList.add("nav");
  homeBtn.classList.add("homeBtn");
  menuBtn.classList.add("menuBtn");
  contactBtn.classList.add("contactBtn");

  homeBtn.innerHTML = "HOME";
  menuBtn.innerHTML = "MENU";
  contactBtn.innerHTML = "CONTACT";

  element.appendChild(homeBtn);
  element.appendChild(menuBtn);
  element.appendChild(contactBtn);

  container.appendChild(element);

  return element;
}

export { loadNav };
