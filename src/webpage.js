function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  header.appendChild(createTitle());
  header.appendChild(createSlogan());

  // header.appendChild(createNavBar());

  return header;
}

function createTitle() {
  const title = document.createElement("div");
  title.classList.add("title");

  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("restaurant-name");
  mainTitle.textContent = "Lucky Panda House";

  title.appendChild(mainTitle);

  return title;
}

// function createNavBar() {
//   const navBar = document.createElement("div");
//   navBar.classList.add("navbar");

//   return navBar;
// }

function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");

  return main;
}

function createSlogan() {
  const slogan = document.createElement("h3");
  slogan.classList.add("slogan");
  slogan.textContent = "Venture into Authentic Chinese Flavors";

  return slogan;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = "Copyright © 2023";

  footer.appendChild(copyright);

  return footer;
}

export default function initializePage() {
  const content = document.querySelector(".content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}
