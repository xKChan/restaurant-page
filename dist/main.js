/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contactContainer");
  const contactUs = document.createElement("div");
  contactUs.classList.add("contactUs");
  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "CONTACT US";

  const contactusInfo = document.createElement("div");
  contactusInfo.classList.add("contactusInfo");

  contactusInfo.appendChild(createInfo("Phone Number: ", "123-456-7890"));
  contactusInfo.appendChild(
    createInfo("Email Address: ", "YYCsmokehouse@gmail.com")
  );
  contactusInfo.appendChild(
    createInfo("Address: ", "225 6 St SW, Calgary, AB T2P 3S1")
  );

  contactUs.appendChild(contactTitle);
  contactUs.appendChild(contactusInfo);

  const hours = document.createElement("div");
  hours.classList.add("hours");
  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "HOURS";

  hours.appendChild(hoursTitle);

  const dates = document.createElement("div");
  dates.classList.add("dates");

  const locationContainer = document.createElement("div");
  locationContainer.classList.add("locationContainer");

  const location = document.createElement("img");
  location.classList.add("location");
  location.src = "../src/imgs/location.png";

  dates.appendChild(dayHours("Monday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Tuesday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Wednesday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Thursday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Friday", "1:00PM", "1:00AM"));
  dates.appendChild(dayHours("Saturday", "10:00AM", "1:00AM"));
  dates.appendChild(dayHours("Sunday", "10:00AM", "10:00PM"));

  hours.appendChild(dates);

  locationContainer.appendChild(location);

  contact.appendChild(contactUs);
  contact.appendChild(locationContainer);
  contact.appendChild(hours);

  // Fix Whitespace Error
  // contact.appendChild(
  //   createInfo("Address: ", "123 Main Street Queens New York")
  // );

  return contact;
}

function dayHours(day, open, close) {
  const days = document.createElement("p");
  days.textContent = `${day}          ${open} - ${close}`;

  return days;
}

function createInfo(label, text) {
  const createP = document.createElement("p");
  createP.textContent = label + text;

  return createP;
}

function loadContact() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createContact());
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
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

function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createHome());
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
let itemNum = 1;

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "MENU";

  menu.appendChild(menuTitle);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");

  const appitizers = document.createElement("div");
  appitizers.classList.add("appitizers");

  const appitizersTitle = document.createElement("h3");
  appitizersTitle.textContent = "Appitizers";

  const appitizersContainer = document.createElement("div");
  appitizersContainer.classList.add("appitizerContainer");

  appitizersContainer.appendChild(
    createMenuItem(
      "YYC Tators",
      "Homemade tator tots deep fried in duck fat served with sour cream, green onions, bacon, and tomatoes",
      "$12.99"
    )
  );
  appitizersContainer.appendChild(
    createMenuItem(
      "Steak Bites",
      "AAA Albeta Beef cooked to perfection over an open fire.  Served with homemade steak sauce",
      "$14.99"
    )
  );
  appitizersContainer.appendChild(
    createMenuItem(
      "Potato Skins",
      "Crispy, golden potato skins fried in duck fat topped with bacon, green onions, and our special house blend of cheese.  Served with sour cream and salsa on the side",
      "$8.99"
    )
  );
  appitizersContainer.appendChild(
    createMenuItem(
      "Death Poppers",
      "Little poppers that will melt your mouth.  These poppers are stuffed with mozzarella and Carolina Reapers.",
      "$14.99"
    )
  );
  appitizersContainer.appendChild(
    createMenuItem(
      "Chicken Wings",
      "10 Flavours to pick from: Honey Garlic, BBQ, Greek, Salt & Pepper, Lemon Pepper, Spicy, Blazin hot, Honey Hot, Smokey, and Original.  Served with a side of ranch and carrots",
      "$14.99"
    )
  );

  appitizers.appendChild(appitizersTitle);
  appitizers.appendChild(appitizersContainer);

  const bbq = document.createElement("div");
  bbq.classList.add("bbq");

  const bbqTitle = document.createElement("h3");
  bbqTitle.textContent = "BBQ";

  bbq.appendChild(bbqTitle);
  bbq.appendChild(
    createMenuItem(
      "Rack of Ribs",
      "Rack of our famous ribs that have been smoked for 5 hours+.  Served with a side of coleslaw and french fries",
      "$39.99"
    )
  );
  bbq.appendChild(
    createMenuItem(
      "Ribeye",
      "Our bone in Ribeye is grilled to perfection, we recommend having it Medium Rare, but can be cooked however you want it.  Served with a baked potato and mixed vegetables",
      "$69.99"
    )
  );
  bbq.appendChild(
    createMenuItem(
      "Free Range Chicken",
      "Our free range chicken are smoked daily for 4+ hours to embrace all the smokey flavours.  Served with french fries and potato salad",
      "$59.99"
    )
  );
  bbq.appendChild(
    createMenuItem(
      "Smoked Brisket",
      "*Customer Favorite* Our famous smoked brisket that has been smoked for 18+ hours.  Served with coleslaw and french fries",
      "$59.99"
    )
  );
  bbq.appendChild(
    createMenuItem(
      "Pulled Pork",
      "Tender pulled pork that just melts in your mouth.  Served with coleslaw and potato salad",
      "$39.99"
    )
  );

  const desserts = document.createElement("div");
  desserts.classList.add("desserts");

  const dessertsTitle = document.createElement("h3");
  dessertsTitle.textContent = "Desserts";

  desserts.appendChild(dessertsTitle);
  desserts.appendChild(
    createMenuItem(
      "Apple Pie",
      "A Large slice of homemade Apple Pie served with a scoop of vanilla ice cream on top.",
      "$12.99"
    )
  );
  desserts.appendChild(
    createMenuItem(
      "Chocolate Cake",
      "A classic slice of chocolate cake with brownie crumbles on top",
      "$9.99"
    )
  );
  desserts.appendChild(
    createMenuItem(
      "Crème Brûlée",
      "An exquisitely rich and elegant dessert",
      "$11.99"
    )
  );

  menuContainer.appendChild(appitizers);
  menuContainer.appendChild(bbq);
  menuContainer.appendChild(desserts);

  menu.appendChild(menuContainer);

  return menu;
}

function createMenuItem(name, description, price) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menuItem");

  const foodInfo = document.createElement("div");
  foodInfo.classList.add("foodInfo");

  const foodTitle = document.createElement("h4");
  foodTitle.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodPrice = document.createElement("p");
  foodPrice.classList.add("price");
  foodPrice.textContent = price;

  foodInfo.appendChild(foodTitle);
  foodInfo.appendChild(foodDescription);
  menuItem.appendChild(foodInfo);
  menuItem.appendChild(foodPrice);

  itemNum++;

  return menuItem;
}

function loadMenu() {
  itemNum = 1;
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createMenu());
}


/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializePage)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




// Create Header section
function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  header.appendChild(createTitle());
  header.appendChild(createNavBar());

  // header.appendChild(createNavBar());

  return header;
}

function createTitle() {
  const title = document.createElement("div");
  title.classList.add("title");

  const mainTitle = document.createElement("h1");
  mainTitle.classList.add("restaurant-name");
  mainTitle.textContent = "YYC SmokeHouse";

  title.appendChild(mainTitle);
  title.appendChild(createSlogan());

  return title;
}

function createSlogan() {
  const slogan = document.createElement("h3");
  slogan.classList.add("slogan");
  slogan.textContent = "Best BBQ in Town";

  return slogan;
}

function createNavBar() {
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");

  // Home Section
  const homeButton = document.createElement("button");
  homeButton.classList.add("homeButton");
  homeButton.textContent = "Home";

  homeButton.addEventListener("click", () => {
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  // Menu Section
  const menuButton = document.createElement("button");
  menuButton.classList.add("menuButton");
  menuButton.textContent = "Menu";

  menuButton.addEventListener("click", () => {
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  // Contact Section
  const contactButton = document.createElement("button");
  contactButton.classList.add("contactButton");
  contactButton.textContent = "Contact";

  contactButton.addEventListener("click", () => {
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });

  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);

  return navBar;
}

// Create Main Section
function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");

  return main;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = "Copyright © 2023";

  footer.appendChild(copyright);

  return footer;
}

function initializePage() {
  const content = document.querySelector(".content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");


(0,_webpage__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxNQUFNOztBQUV4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlLOEI7QUFDQTtBQUNNOztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlEQUFRO0FBQ1osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvREFBVztBQUNmLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxpREFBUTtBQUNWOzs7Ozs7O1VDeEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDLG9EQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGFpbmVyXCIpO1xuICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0VXMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RVc1wiKTtcbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1QgVVNcIjtcblxuICBjb25zdCBjb250YWN0dXNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdHVzSW5mby5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHVzSW5mb1wiKTtcblxuICBjb250YWN0dXNJbmZvLmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oXCJQaG9uZSBOdW1iZXI6IFwiLCBcIjEyMy00NTYtNzg5MFwiKSk7XG4gIGNvbnRhY3R1c0luZm8uYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlSW5mbyhcIkVtYWlsIEFkZHJlc3M6IFwiLCBcIllZQ3Ntb2tlaG91c2VAZ21haWwuY29tXCIpXG4gICk7XG4gIGNvbnRhY3R1c0luZm8uYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlSW5mbyhcIkFkZHJlc3M6IFwiLCBcIjIyNSA2IFN0IFNXLCBDYWxnYXJ5LCBBQiBUMlAgM1MxXCIpXG4gICk7XG5cbiAgY29udGFjdFVzLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gIGNvbnRhY3RVcy5hcHBlbmRDaGlsZChjb250YWN0dXNJbmZvKTtcblxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcbiAgY29uc3QgaG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9IFwiSE9VUlNcIjtcblxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RpdGxlKTtcblxuICBjb25zdCBkYXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVzLmNsYXNzTGlzdC5hZGQoXCJkYXRlc1wiKTtcblxuICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkNvbnRhaW5lclwiKTtcblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgbG9jYXRpb24uc3JjID0gXCIuLi9zcmMvaW1ncy9sb2NhdGlvbi5wbmdcIjtcblxuICBkYXRlcy5hcHBlbmRDaGlsZChkYXlIb3VycyhcIk1vbmRheVwiLCBcIjE6MDBQTVwiLCBcIjEwOjAwUE1cIikpO1xuICBkYXRlcy5hcHBlbmRDaGlsZChkYXlIb3VycyhcIlR1ZXNkYXlcIiwgXCIxOjAwUE1cIiwgXCIxMDowMFBNXCIpKTtcbiAgZGF0ZXMuYXBwZW5kQ2hpbGQoZGF5SG91cnMoXCJXZWRuZXNkYXlcIiwgXCIxOjAwUE1cIiwgXCIxMDowMFBNXCIpKTtcbiAgZGF0ZXMuYXBwZW5kQ2hpbGQoZGF5SG91cnMoXCJUaHVyc2RheVwiLCBcIjE6MDBQTVwiLCBcIjEwOjAwUE1cIikpO1xuICBkYXRlcy5hcHBlbmRDaGlsZChkYXlIb3VycyhcIkZyaWRheVwiLCBcIjE6MDBQTVwiLCBcIjE6MDBBTVwiKSk7XG4gIGRhdGVzLmFwcGVuZENoaWxkKGRheUhvdXJzKFwiU2F0dXJkYXlcIiwgXCIxMDowMEFNXCIsIFwiMTowMEFNXCIpKTtcbiAgZGF0ZXMuYXBwZW5kQ2hpbGQoZGF5SG91cnMoXCJTdW5kYXlcIiwgXCIxMDowMEFNXCIsIFwiMTA6MDBQTVwiKSk7XG5cbiAgaG91cnMuYXBwZW5kQ2hpbGQoZGF0ZXMpO1xuXG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RVcyk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQobG9jYXRpb25Db250YWluZXIpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAvLyBGaXggV2hpdGVzcGFjZSBFcnJvclxuICAvLyBjb250YWN0LmFwcGVuZENoaWxkKFxuICAvLyAgIGNyZWF0ZUluZm8oXCJBZGRyZXNzOiBcIiwgXCIxMjMgTWFpbiBTdHJlZXQgUXVlZW5zIE5ldyBZb3JrXCIpXG4gIC8vICk7XG5cbiAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIGRheUhvdXJzKGRheSwgb3BlbiwgY2xvc2UpIHtcbiAgY29uc3QgZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXlzLnRleHRDb250ZW50ID0gYCR7ZGF5fSAgICAgICAgICAke29wZW59IC0gJHtjbG9zZX1gO1xuXG4gIHJldHVybiBkYXlzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvKGxhYmVsLCB0ZXh0KSB7XG4gIGNvbnN0IGNyZWF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY3JlYXRlUC50ZXh0Q29udGVudCA9IGxhYmVsICsgdGV4dDtcblxuICByZXR1cm4gY3JlYXRlUDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZUNvbnRhaW5lclwiKTtcblxuICBjb25zdCBzbW9rZUhvdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc21va2VIb3VzZS5jbGFzc0xpc3QuYWRkKFwic21va2VIb3VzZVwiKTtcblxuICAvLyBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAvLyBpbWcuc3JjID0gXCIuLi9kaXN0L2ltZ3MvbWVhbC5qcGdcIjtcblxuICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lXCIpO1xuICB3ZWxjb21lLnRleHRDb250ZW50ID0gXCJXRUxDT01FIFRPIFlZQyBTTU9LRUhPVVNFXCI7XG5cbiAgY29uc3QgaG9tZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaG9tZVBhcmEuY2xhc3NMaXN0LmFkZChcImhvbWVQYXJhXCIpO1xuICBob21lUGFyYS50ZXh0Q29udGVudCA9XG4gICAgXCJTdGVwIGludG8gYSB3b3JsZCBvZiBzbW9reSBkZWxpZ2h0cyBhdCBZWUMgU21va2Vob3VzZSEgT3VyIHBhc3Npb24gbGllcyBpbiBjcmFmdGluZyBtb3V0aHdhdGVyaW5nIGRpc2hlcyBpbmZ1c2VkIHdpdGggdGhlIGlycmVzaXN0aWJsZSBmbGF2b3JzIG9mIHRoZSBzbW9rZWhvdXNlLiBGcm9tIHRlbmRlciByaWJzIHRvIHNhdm9yeSBicmlza2V0LCBldmVyeSBiaXRlIGlzIGEgam91cm5leSBpbnRvIGN1bGluYXJ5IGV4Y2VsbGVuY2UuIEpvaW4gdXMgYW5kIGV4cGVyaWVuY2UgdGhlIGFydCBvZiBzbW9reSBnb29kbmVzcyFcIjtcblxuICBzbW9rZUhvdXNlLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuICBzbW9rZUhvdXNlLmFwcGVuZENoaWxkKGhvbWVQYXJhKTtcblxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNtb2tlSG91c2UpO1xuICAvLyBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgaG9tZS5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG4iLCJsZXQgaXRlbU51bSA9IDE7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRhaW5lclwiKTtcblxuICBjb25zdCBhcHBpdGl6ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXBwaXRpemVycy5jbGFzc0xpc3QuYWRkKFwiYXBwaXRpemVyc1wiKTtcblxuICBjb25zdCBhcHBpdGl6ZXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGFwcGl0aXplcnNUaXRsZS50ZXh0Q29udGVudCA9IFwiQXBwaXRpemVyc1wiO1xuXG4gIGNvbnN0IGFwcGl0aXplcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcHBpdGl6ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhcHBpdGl6ZXJDb250YWluZXJcIik7XG5cbiAgYXBwaXRpemVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiWVlDIFRhdG9yc1wiLFxuICAgICAgXCJIb21lbWFkZSB0YXRvciB0b3RzIGRlZXAgZnJpZWQgaW4gZHVjayBmYXQgc2VydmVkIHdpdGggc291ciBjcmVhbSwgZ3JlZW4gb25pb25zLCBiYWNvbiwgYW5kIHRvbWF0b2VzXCIsXG4gICAgICBcIiQxMi45OVwiXG4gICAgKVxuICApO1xuICBhcHBpdGl6ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJTdGVhayBCaXRlc1wiLFxuICAgICAgXCJBQUEgQWxiZXRhIEJlZWYgY29va2VkIHRvIHBlcmZlY3Rpb24gb3ZlciBhbiBvcGVuIGZpcmUuICBTZXJ2ZWQgd2l0aCBob21lbWFkZSBzdGVhayBzYXVjZVwiLFxuICAgICAgXCIkMTQuOTlcIlxuICAgIClcbiAgKTtcbiAgYXBwaXRpemVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUG90YXRvIFNraW5zXCIsXG4gICAgICBcIkNyaXNweSwgZ29sZGVuIHBvdGF0byBza2lucyBmcmllZCBpbiBkdWNrIGZhdCB0b3BwZWQgd2l0aCBiYWNvbiwgZ3JlZW4gb25pb25zLCBhbmQgb3VyIHNwZWNpYWwgaG91c2UgYmxlbmQgb2YgY2hlZXNlLiAgU2VydmVkIHdpdGggc291ciBjcmVhbSBhbmQgc2Fsc2Egb24gdGhlIHNpZGVcIixcbiAgICAgIFwiJDguOTlcIlxuICAgIClcbiAgKTtcbiAgYXBwaXRpemVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiRGVhdGggUG9wcGVyc1wiLFxuICAgICAgXCJMaXR0bGUgcG9wcGVycyB0aGF0IHdpbGwgbWVsdCB5b3VyIG1vdXRoLiAgVGhlc2UgcG9wcGVycyBhcmUgc3R1ZmZlZCB3aXRoIG1venphcmVsbGEgYW5kIENhcm9saW5hIFJlYXBlcnMuXCIsXG4gICAgICBcIiQxNC45OVwiXG4gICAgKVxuICApO1xuICBhcHBpdGl6ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJDaGlja2VuIFdpbmdzXCIsXG4gICAgICBcIjEwIEZsYXZvdXJzIHRvIHBpY2sgZnJvbTogSG9uZXkgR2FybGljLCBCQlEsIEdyZWVrLCBTYWx0ICYgUGVwcGVyLCBMZW1vbiBQZXBwZXIsIFNwaWN5LCBCbGF6aW4gaG90LCBIb25leSBIb3QsIFNtb2tleSwgYW5kIE9yaWdpbmFsLiAgU2VydmVkIHdpdGggYSBzaWRlIG9mIHJhbmNoIGFuZCBjYXJyb3RzXCIsXG4gICAgICBcIiQxNC45OVwiXG4gICAgKVxuICApO1xuXG4gIGFwcGl0aXplcnMuYXBwZW5kQ2hpbGQoYXBwaXRpemVyc1RpdGxlKTtcbiAgYXBwaXRpemVycy5hcHBlbmRDaGlsZChhcHBpdGl6ZXJzQ29udGFpbmVyKTtcblxuICBjb25zdCBiYnEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYnEuY2xhc3NMaXN0LmFkZChcImJicVwiKTtcblxuICBjb25zdCBiYnFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgYmJxVGl0bGUudGV4dENvbnRlbnQgPSBcIkJCUVwiO1xuXG4gIGJicS5hcHBlbmRDaGlsZChiYnFUaXRsZSk7XG4gIGJicS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUmFjayBvZiBSaWJzXCIsXG4gICAgICBcIlJhY2sgb2Ygb3VyIGZhbW91cyByaWJzIHRoYXQgaGF2ZSBiZWVuIHNtb2tlZCBmb3IgNSBob3VycysuICBTZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgY29sZXNsYXcgYW5kIGZyZW5jaCBmcmllc1wiLFxuICAgICAgXCIkMzkuOTlcIlxuICAgIClcbiAgKTtcbiAgYmJxLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJSaWJleWVcIixcbiAgICAgIFwiT3VyIGJvbmUgaW4gUmliZXllIGlzIGdyaWxsZWQgdG8gcGVyZmVjdGlvbiwgd2UgcmVjb21tZW5kIGhhdmluZyBpdCBNZWRpdW0gUmFyZSwgYnV0IGNhbiBiZSBjb29rZWQgaG93ZXZlciB5b3Ugd2FudCBpdC4gIFNlcnZlZCB3aXRoIGEgYmFrZWQgcG90YXRvIGFuZCBtaXhlZCB2ZWdldGFibGVzXCIsXG4gICAgICBcIiQ2OS45OVwiXG4gICAgKVxuICApO1xuICBiYnEuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkZyZWUgUmFuZ2UgQ2hpY2tlblwiLFxuICAgICAgXCJPdXIgZnJlZSByYW5nZSBjaGlja2VuIGFyZSBzbW9rZWQgZGFpbHkgZm9yIDQrIGhvdXJzIHRvIGVtYnJhY2UgYWxsIHRoZSBzbW9rZXkgZmxhdm91cnMuICBTZXJ2ZWQgd2l0aCBmcmVuY2ggZnJpZXMgYW5kIHBvdGF0byBzYWxhZFwiLFxuICAgICAgXCIkNTkuOTlcIlxuICAgIClcbiAgKTtcbiAgYmJxLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJTbW9rZWQgQnJpc2tldFwiLFxuICAgICAgXCIqQ3VzdG9tZXIgRmF2b3JpdGUqIE91ciBmYW1vdXMgc21va2VkIGJyaXNrZXQgdGhhdCBoYXMgYmVlbiBzbW9rZWQgZm9yIDE4KyBob3Vycy4gIFNlcnZlZCB3aXRoIGNvbGVzbGF3IGFuZCBmcmVuY2ggZnJpZXNcIixcbiAgICAgIFwiJDU5Ljk5XCJcbiAgICApXG4gICk7XG4gIGJicS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUHVsbGVkIFBvcmtcIixcbiAgICAgIFwiVGVuZGVyIHB1bGxlZCBwb3JrIHRoYXQganVzdCBtZWx0cyBpbiB5b3VyIG1vdXRoLiAgU2VydmVkIHdpdGggY29sZXNsYXcgYW5kIHBvdGF0byBzYWxhZFwiLFxuICAgICAgXCIkMzkuOTlcIlxuICAgIClcbiAgKTtcblxuICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0c1wiKTtcblxuICBjb25zdCBkZXNzZXJ0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBkZXNzZXJ0c1RpdGxlLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuXG4gIGRlc3NlcnRzLmFwcGVuZENoaWxkKGRlc3NlcnRzVGl0bGUpO1xuICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiQXBwbGUgUGllXCIsXG4gICAgICBcIkEgTGFyZ2Ugc2xpY2Ugb2YgaG9tZW1hZGUgQXBwbGUgUGllIHNlcnZlZCB3aXRoIGEgc2Nvb3Agb2YgdmFuaWxsYSBpY2UgY3JlYW0gb24gdG9wLlwiLFxuICAgICAgXCIkMTIuOTlcIlxuICAgIClcbiAgKTtcbiAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkNob2NvbGF0ZSBDYWtlXCIsXG4gICAgICBcIkEgY2xhc3NpYyBzbGljZSBvZiBjaG9jb2xhdGUgY2FrZSB3aXRoIGJyb3duaWUgY3J1bWJsZXMgb24gdG9wXCIsXG4gICAgICBcIiQ5Ljk5XCJcbiAgICApXG4gICk7XG4gIGRlc3NlcnRzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJDcsOobWUgQnLDu2zDqWVcIixcbiAgICAgIFwiQW4gZXhxdWlzaXRlbHkgcmljaCBhbmQgZWxlZ2FudCBkZXNzZXJ0XCIsXG4gICAgICBcIiQxMS45OVwiXG4gICAgKVxuICApO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwaXRpemVycyk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoYmJxKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0cyk7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XG4gIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuXG4gIGNvbnN0IGZvb2RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vZEluZm8uY2xhc3NMaXN0LmFkZChcImZvb2RJbmZvXCIpO1xuXG4gIGNvbnN0IGZvb2RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgZm9vZFRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCBmb29kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgY29uc3QgZm9vZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb2RQcmljZS5jbGFzc0xpc3QuYWRkKFwicHJpY2VcIik7XG4gIGZvb2RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gIGZvb2RJbmZvLmFwcGVuZENoaWxkKGZvb2RUaXRsZSk7XG4gIGZvb2RJbmZvLmFwcGVuZENoaWxkKGZvb2REZXNjcmlwdGlvbik7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RJbmZvKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZFByaWNlKTtcblxuICBpdGVtTnVtKys7XG5cbiAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgaXRlbU51bSA9IDE7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbi8vIENyZWF0ZSBIZWFkZXIgc2VjdGlvblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoKSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG5cbiAgLy8gaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cbiAgY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBtYWluVGl0bGUuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtbmFtZVwiKTtcbiAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gXCJZWUMgU21va2VIb3VzZVwiO1xuXG4gIHRpdGxlLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKGNyZWF0ZVNsb2dhbigpKTtcblxuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNsb2dhbigpIHtcbiAgY29uc3Qgc2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBzbG9nYW4uY2xhc3NMaXN0LmFkZChcInNsb2dhblwiKTtcbiAgc2xvZ2FuLnRleHRDb250ZW50ID0gXCJCZXN0IEJCUSBpbiBUb3duXCI7XG5cbiAgcmV0dXJuIHNsb2dhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcblxuICAvLyBIb21lIFNlY3Rpb25cbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImhvbWVCdXR0b25cIik7XG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZEhvbWUoKTtcbiAgfSk7XG5cbiAgLy8gTWVudSBTZWN0aW9uXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51QnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIC8vIENvbnRhY3QgU2VjdGlvblxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkQ29udGFjdCgpO1xuICB9KTtcblxuICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gIHJldHVybiBuYXZCYXI7XG59XG5cbi8vIENyZWF0ZSBNYWluIFNlY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIzXCI7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gIGxvYWRIb21lKCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplUGFnZSBmcm9tIFwiLi93ZWJwYWdlXCI7XG5cbmluaXRpYWxpemVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=