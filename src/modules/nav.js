function loadNav() {
  const container = document.querySelector("#content");
  const element = document.createElement("div");
  const btn = document.createElement("button");
  element.classList.add("nav");

  btn.innerHTML = "Home";

  element.appendChild(btn);
  container.appendChild(element);
  return element;
}

export { loadNav };
