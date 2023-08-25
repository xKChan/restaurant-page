import "./style.css";

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");

  const smokeHouse = document.createElement("div");
  smokeHouse.classList.add("smokeHouse");

  // const img = document.createElement("img");
  // img.src = "../dist/imgs/meal.jpg";

  const welcome = document.createElement("h1");
  welcome.classList.add("welcome");
  welcome.textContent = "WELCOME TO YYC SMOKEHOUSE";

  const homePara = document.createElement("p");
  homePara.classList.add("homePara");
  homePara.textContent =
    "Step into a world of smoky delights at YYC Smokehouse! Our passion lies in crafting mouthwatering dishes infused with the irresistible flavors of the smokehouse. From tender ribs to savory brisket, every bite is a journey into culinary excellence. Join us and experience the art of smoky goodness!";

  smokeHouse.appendChild(welcome);
  smokeHouse.appendChild(homePara);

  homeContainer.appendChild(smokeHouse);
  // homeContainer.appendChild(img);

  home.appendChild(homeContainer);

  return home;
}

export default function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createHome());
}
