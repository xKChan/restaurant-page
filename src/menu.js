let itemNum = 1;

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "MENU";

  menu.appendChild(menuTitle);

  const appitizers = document.createElement("div");
  appitizers.classList.add("appitizers");

  const appitizersTitle = document.createElement("h3");
  appitizersTitle.textContent = "Appitizers";

  appitizers.appendChild(appitizersTitle);
  appitizers.appendChild(
    createMenuItem(
      "YYC Tators",
      "Homemade tator tots deep fried in duck fat served with sour cream, green onions, bacon, and tomatoes",
      "$12.99"
    )
  );
  appitizers.appendChild(
    createMenuItem(
      "Steak Bites",
      "AAA Albeta Beef cooked to perfection over an open fire.  Served with homemade steak sauce",
      "$14.99"
    )
  );

  menu.appendChild(appitizers);

  return menu;
}

function createMenuItem(name, description, price) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu" + itemNum);

  const foodTitle = document.createElement("h4");
  foodTitle.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodPrice = document.createElement("p");
  foodPrice.textContent = price;

  menuItem.appendChild(foodTitle);
  menuItem.appendChild(foodDescription);
  menuItem.appendChild(foodPrice);

  itemNum++;

  return menuItem;
}

export default function loadMenu() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createMenu());
}
