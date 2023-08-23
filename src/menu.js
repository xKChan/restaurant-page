function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.textContent = "Menu Page";

  return menu;
}

export default function loadMenu() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createMenu());
}
