function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  return home;
}

export default function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createHome());
}
