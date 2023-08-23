function createContact() {
  const home = document.createElement("div");
  home.classList.add("contact");
  home.textContent = "Contact Page";

  return home;
}

export default function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createContact());
}
