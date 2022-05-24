import "./style.css";
import { loadContact } from "./modules/contact";
import { loadHome } from "./modules/home";

// document.body.appendChild(loadContact());

const btn = document.querySelector("#btn");

btn.addEventListener("click", loadHome);
