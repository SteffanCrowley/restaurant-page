import { loadNav } from "./nav";
import { clear } from "./clear";
import Marco from "./marco.jpg";

function loadContact() {
  clear();
  loadNav();
  const container = document.querySelector("#content");
  const element = document.createElement("div");
  const address = document.createElement("p");

  const myMarco = new Image();
  myMarco.src = Marco;

  address.textContent = "45 George Dye Road, New Jersey";

  element.innerHTML = "contact";
  element.classList.add("contact");
  element.appendChild(myMarco);
  element.appendChild(address);
  container.appendChild(element);

  return element;
}

export { loadContact };
