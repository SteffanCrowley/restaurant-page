import "./style.css";
import { loadHome } from "./modules/home";
import { loadNav } from "./modules/nav";
import { loadContact } from "./modules/contact";
import { loadMenu } from "./modules/menu";

init();

function init() {
  loadNav();
  loadHome();
}

document.addEventListener("click", (e) => {
  const target = e.target.innerText;

  if (target === "HOME") loadHome();
  if (target === "MENU") loadMenu();
  if (target === "CONTACT") loadContact();
});
