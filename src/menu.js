function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("home");
  menu.textContent = "Menu Page";

  return home;
}

export default function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createMenu());
}
