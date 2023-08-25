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
  location.src = "../dist/imgs/location.png";

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
      "Little poppers that will melt your mouth.  These poppers are stuffed with mozzarealla and Carolina Reapers.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxNQUFNOztBQUV4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlLOEI7QUFDQTtBQUNNOztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlEQUFRO0FBQ1osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvREFBVztBQUNmLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxpREFBUTtBQUNWOzs7Ozs7O1VDeEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDLG9EQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGFpbmVyXCIpO1xuICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0VXMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RVc1wiKTtcbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1QgVVNcIjtcblxuICBjb25zdCBjb250YWN0dXNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdHVzSW5mby5jbGFzc0xpc3QuYWRkKFwiY29udGFjdHVzSW5mb1wiKTtcblxuICBjb250YWN0dXNJbmZvLmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oXCJQaG9uZSBOdW1iZXI6IFwiLCBcIjEyMy00NTYtNzg5MFwiKSk7XG4gIGNvbnRhY3R1c0luZm8uYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlSW5mbyhcIkVtYWlsIEFkZHJlc3M6IFwiLCBcIllZQ3Ntb2tlaG91c2VAZ21haWwuY29tXCIpXG4gICk7XG4gIGNvbnRhY3R1c0luZm8uYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlSW5mbyhcIkFkZHJlc3M6IFwiLCBcIjIyNSA2IFN0IFNXLCBDYWxnYXJ5LCBBQiBUMlAgM1MxXCIpXG4gICk7XG5cbiAgY29udGFjdFVzLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gIGNvbnRhY3RVcy5hcHBlbmRDaGlsZChjb250YWN0dXNJbmZvKTtcblxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcbiAgY29uc3QgaG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9IFwiSE9VUlNcIjtcblxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RpdGxlKTtcblxuICBjb25zdCBkYXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVzLmNsYXNzTGlzdC5hZGQoXCJkYXRlc1wiKTtcblxuICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkNvbnRhaW5lclwiKTtcblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgbG9jYXRpb24uc3JjID0gXCIuLi9kaXN0L2ltZ3MvbG9jYXRpb24ucG5nXCI7XG5cbiAgZGF0ZXMuYXBwZW5kQ2hpbGQoZGF5SG91cnMoXCJNb25kYXlcIiwgXCIxOjAwUE1cIiwgXCIxMDowMFBNXCIpKTtcbiAgZGF0ZXMuYXBwZW5kQ2hpbGQoZGF5SG91cnMoXCJUdWVzZGF5XCIsIFwiMTowMFBNXCIsIFwiMTA6MDBQTVwiKSk7XG4gIGRhdGVzLmFwcGVuZENoaWxkKGRheUhvdXJzKFwiV2VkbmVzZGF5XCIsIFwiMTowMFBNXCIsIFwiMTA6MDBQTVwiKSk7XG4gIGRhdGVzLmFwcGVuZENoaWxkKGRheUhvdXJzKFwiVGh1cnNkYXlcIiwgXCIxOjAwUE1cIiwgXCIxMDowMFBNXCIpKTtcbiAgZGF0ZXMuYXBwZW5kQ2hpbGQoZGF5SG91cnMoXCJGcmlkYXlcIiwgXCIxOjAwUE1cIiwgXCIxOjAwQU1cIikpO1xuICBkYXRlcy5hcHBlbmRDaGlsZChkYXlIb3VycyhcIlNhdHVyZGF5XCIsIFwiMTA6MDBBTVwiLCBcIjE6MDBBTVwiKSk7XG4gIGRhdGVzLmFwcGVuZENoaWxkKGRheUhvdXJzKFwiU3VuZGF5XCIsIFwiMTA6MDBBTVwiLCBcIjEwOjAwUE1cIikpO1xuXG4gIGhvdXJzLmFwcGVuZENoaWxkKGRhdGVzKTtcblxuICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VXMpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGxvY2F0aW9uQ29udGFpbmVyKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgLy8gRml4IFdoaXRlc3BhY2UgRXJyb3JcbiAgLy8gY29udGFjdC5hcHBlbmRDaGlsZChcbiAgLy8gICBjcmVhdGVJbmZvKFwiQWRkcmVzczogXCIsIFwiMTIzIE1haW4gU3RyZWV0IFF1ZWVucyBOZXcgWW9ya1wiKVxuICAvLyApO1xuXG4gIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBkYXlIb3VycyhkYXksIG9wZW4sIGNsb3NlKSB7XG4gIGNvbnN0IGRheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF5cy50ZXh0Q29udGVudCA9IGAke2RheX0gICAgICAgICAgJHtvcGVufSAtICR7Y2xvc2V9YDtcblxuICByZXR1cm4gZGF5cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbyhsYWJlbCwgdGV4dCkge1xuICBjb25zdCBjcmVhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNyZWF0ZVAudGV4dENvbnRlbnQgPSBsYWJlbCArIHRleHQ7XG5cbiAgcmV0dXJuIGNyZWF0ZVA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufVxuIiwiZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWVDb250YWluZXJcIik7XG5cbiAgY29uc3Qgc21va2VIb3VzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNtb2tlSG91c2UuY2xhc3NMaXN0LmFkZChcInNtb2tlSG91c2VcIik7XG5cbiAgLy8gY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgLy8gaW1nLnNyYyA9IFwiLi4vZGlzdC9pbWdzL21lYWwuanBnXCI7XG5cbiAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgd2VsY29tZS5jbGFzc0xpc3QuYWRkKFwid2VsY29tZVwiKTtcbiAgd2VsY29tZS50ZXh0Q29udGVudCA9IFwiV0VMQ09NRSBUTyBZWUMgU01PS0VIT1VTRVwiO1xuXG4gIGNvbnN0IGhvbWVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGhvbWVQYXJhLmNsYXNzTGlzdC5hZGQoXCJob21lUGFyYVwiKTtcbiAgaG9tZVBhcmEudGV4dENvbnRlbnQgPVxuICAgIFwiU3RlcCBpbnRvIGEgd29ybGQgb2Ygc21va3kgZGVsaWdodHMgYXQgWVlDIFNtb2tlaG91c2UhIE91ciBwYXNzaW9uIGxpZXMgaW4gY3JhZnRpbmcgbW91dGh3YXRlcmluZyBkaXNoZXMgaW5mdXNlZCB3aXRoIHRoZSBpcnJlc2lzdGlibGUgZmxhdm9ycyBvZiB0aGUgc21va2Vob3VzZS4gRnJvbSB0ZW5kZXIgcmlicyB0byBzYXZvcnkgYnJpc2tldCwgZXZlcnkgYml0ZSBpcyBhIGpvdXJuZXkgaW50byBjdWxpbmFyeSBleGNlbGxlbmNlLiBKb2luIHVzIGFuZCBleHBlcmllbmNlIHRoZSBhcnQgb2Ygc21va3kgZ29vZG5lc3MhXCI7XG5cbiAgc21va2VIb3VzZS5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgc21va2VIb3VzZS5hcHBlbmRDaGlsZChob21lUGFyYSk7XG5cbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzbW9rZUhvdXNlKTtcbiAgLy8gaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhvbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuIiwibGV0IGl0ZW1OdW0gPSAxO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcblxuICBtZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG5cbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVDb250YWluZXJcIik7XG5cbiAgY29uc3QgYXBwaXRpemVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFwcGl0aXplcnMuY2xhc3NMaXN0LmFkZChcImFwcGl0aXplcnNcIik7XG5cbiAgY29uc3QgYXBwaXRpemVyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBhcHBpdGl6ZXJzVGl0bGUudGV4dENvbnRlbnQgPSBcIkFwcGl0aXplcnNcIjtcblxuICBjb25zdCBhcHBpdGl6ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXBwaXRpemVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYXBwaXRpemVyQ29udGFpbmVyXCIpO1xuXG4gIGFwcGl0aXplcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIllZQyBUYXRvcnNcIixcbiAgICAgIFwiSG9tZW1hZGUgdGF0b3IgdG90cyBkZWVwIGZyaWVkIGluIGR1Y2sgZmF0IHNlcnZlZCB3aXRoIHNvdXIgY3JlYW0sIGdyZWVuIG9uaW9ucywgYmFjb24sIGFuZCB0b21hdG9lc1wiLFxuICAgICAgXCIkMTIuOTlcIlxuICAgIClcbiAgKTtcbiAgYXBwaXRpemVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiU3RlYWsgQml0ZXNcIixcbiAgICAgIFwiQUFBIEFsYmV0YSBCZWVmIGNvb2tlZCB0byBwZXJmZWN0aW9uIG92ZXIgYW4gb3BlbiBmaXJlLiAgU2VydmVkIHdpdGggaG9tZW1hZGUgc3RlYWsgc2F1Y2VcIixcbiAgICAgIFwiJDE0Ljk5XCJcbiAgICApXG4gICk7XG4gIGFwcGl0aXplcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlBvdGF0byBTa2luc1wiLFxuICAgICAgXCJDcmlzcHksIGdvbGRlbiBwb3RhdG8gc2tpbnMgZnJpZWQgaW4gZHVjayBmYXQgdG9wcGVkIHdpdGggYmFjb24sIGdyZWVuIG9uaW9ucywgYW5kIG91ciBzcGVjaWFsIGhvdXNlIGJsZW5kIG9mIGNoZWVzZS4gIFNlcnZlZCB3aXRoIHNvdXIgY3JlYW0gYW5kIHNhbHNhIG9uIHRoZSBzaWRlXCIsXG4gICAgICBcIiQ4Ljk5XCJcbiAgICApXG4gICk7XG4gIGFwcGl0aXplcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkRlYXRoIFBvcHBlcnNcIixcbiAgICAgIFwiTGl0dGxlIHBvcHBlcnMgdGhhdCB3aWxsIG1lbHQgeW91ciBtb3V0aC4gIFRoZXNlIHBvcHBlcnMgYXJlIHN0dWZmZWQgd2l0aCBtb3p6YXJlYWxsYSBhbmQgQ2Fyb2xpbmEgUmVhcGVycy5cIixcbiAgICAgIFwiJDE0Ljk5XCJcbiAgICApXG4gICk7XG4gIGFwcGl0aXplcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkNoaWNrZW4gV2luZ3NcIixcbiAgICAgIFwiMTAgRmxhdm91cnMgdG8gcGljayBmcm9tOiBIb25leSBHYXJsaWMsIEJCUSwgR3JlZWssIFNhbHQgJiBQZXBwZXIsIExlbW9uIFBlcHBlciwgU3BpY3ksIEJsYXppbiBob3QsIEhvbmV5IEhvdCwgU21va2V5LCBhbmQgT3JpZ2luYWwuICBTZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgcmFuY2ggYW5kIGNhcnJvdHNcIixcbiAgICAgIFwiJDE0Ljk5XCJcbiAgICApXG4gICk7XG5cbiAgYXBwaXRpemVycy5hcHBlbmRDaGlsZChhcHBpdGl6ZXJzVGl0bGUpO1xuICBhcHBpdGl6ZXJzLmFwcGVuZENoaWxkKGFwcGl0aXplcnNDb250YWluZXIpO1xuXG4gIGNvbnN0IGJicSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJicS5jbGFzc0xpc3QuYWRkKFwiYmJxXCIpO1xuXG4gIGNvbnN0IGJicVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBiYnFUaXRsZS50ZXh0Q29udGVudCA9IFwiQkJRXCI7XG5cbiAgYmJxLmFwcGVuZENoaWxkKGJicVRpdGxlKTtcbiAgYmJxLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJSYWNrIG9mIFJpYnNcIixcbiAgICAgIFwiUmFjayBvZiBvdXIgZmFtb3VzIHJpYnMgdGhhdCBoYXZlIGJlZW4gc21va2VkIGZvciA1IGhvdXJzKy4gIFNlcnZlZCB3aXRoIGEgc2lkZSBvZiBjb2xlc2xhdyBhbmQgZnJlbmNoIGZyaWVzXCIsXG4gICAgICBcIiQzOS45OVwiXG4gICAgKVxuICApO1xuICBiYnEuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlJpYmV5ZVwiLFxuICAgICAgXCJPdXIgYm9uZSBpbiBSaWJleWUgaXMgZ3JpbGxlZCB0byBwZXJmZWN0aW9uLCB3ZSByZWNvbW1lbmQgaGF2aW5nIGl0IE1lZGl1bSBSYXJlLCBidXQgY2FuIGJlIGNvb2tlZCBob3dldmVyIHlvdSB3YW50IGl0LiAgU2VydmVkIHdpdGggYSBiYWtlZCBwb3RhdG8gYW5kIG1peGVkIHZlZ2V0YWJsZXNcIixcbiAgICAgIFwiJDY5Ljk5XCJcbiAgICApXG4gICk7XG4gIGJicS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiRnJlZSBSYW5nZSBDaGlja2VuXCIsXG4gICAgICBcIk91ciBmcmVlIHJhbmdlIGNoaWNrZW4gYXJlIHNtb2tlZCBkYWlseSBmb3IgNCsgaG91cnMgdG8gZW1icmFjZSBhbGwgdGhlIHNtb2tleSBmbGF2b3Vycy4gIFNlcnZlZCB3aXRoIGZyZW5jaCBmcmllcyBhbmQgcG90YXRvIHNhbGFkXCIsXG4gICAgICBcIiQ1OS45OVwiXG4gICAgKVxuICApO1xuICBiYnEuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlNtb2tlZCBCcmlza2V0XCIsXG4gICAgICBcIipDdXN0b21lciBGYXZvcml0ZSogT3VyIGZhbW91cyBzbW9rZWQgYnJpc2tldCB0aGF0IGhhcyBiZWVuIHNtb2tlZCBmb3IgMTgrIGhvdXJzLiAgU2VydmVkIHdpdGggY29sZXNsYXcgYW5kIGZyZW5jaCBmcmllc1wiLFxuICAgICAgXCIkNTkuOTlcIlxuICAgIClcbiAgKTtcbiAgYmJxLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJQdWxsZWQgUG9ya1wiLFxuICAgICAgXCJUZW5kZXIgcHVsbGVkIHBvcmsgdGhhdCBqdXN0IG1lbHRzIGluIHlvdXIgbW91dGguICBTZXJ2ZWQgd2l0aCBjb2xlc2xhdyBhbmQgcG90YXRvIHNhbGFkXCIsXG4gICAgICBcIiQzOS45OVwiXG4gICAgKVxuICApO1xuXG4gIGNvbnN0IGRlc3NlcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzc2VydHMuY2xhc3NMaXN0LmFkZChcImRlc3NlcnRzXCIpO1xuXG4gIGNvbnN0IGRlc3NlcnRzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGRlc3NlcnRzVGl0bGUudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCI7XG5cbiAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoZGVzc2VydHNUaXRsZSk7XG4gIGRlc3NlcnRzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJBcHBsZSBQaWVcIixcbiAgICAgIFwiQSBMYXJnZSBzbGljZSBvZiBob21lbWFkZSBBcHBsZSBQaWUgc2VydmVkIHdpdGggYSBzY29vcCBvZiB2YW5pbGxhIGljZSBjcmVhbSBvbiB0b3AuXCIsXG4gICAgICBcIiQxMi45OVwiXG4gICAgKVxuICApO1xuICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiQ2hvY29sYXRlIENha2VcIixcbiAgICAgIFwiQSBjbGFzc2ljIHNsaWNlIG9mIGNob2NvbGF0ZSBjYWtlIHdpdGggYnJvd25pZSBjcnVtYmxlcyBvbiB0b3BcIixcbiAgICAgIFwiJDkuOTlcIlxuICAgIClcbiAgKTtcbiAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkNyw6htZSBCcsO7bMOpZVwiLFxuICAgICAgXCJBbiBleHF1aXNpdGVseSByaWNoIGFuZCBlbGVnYW50IGRlc3NlcnRcIixcbiAgICAgIFwiJDExLjk5XCJcbiAgICApXG4gICk7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBpdGl6ZXJzKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChiYnEpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3NlcnRzKTtcblxuICBtZW51LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG5cbiAgY29uc3QgZm9vZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kSW5mby5jbGFzc0xpc3QuYWRkKFwiZm9vZEluZm9cIik7XG5cbiAgY29uc3QgZm9vZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBmb29kVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICBjb25zdCBmb29kUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vZFByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgZm9vZFByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgZm9vZEluZm8uYXBwZW5kQ2hpbGQoZm9vZFRpdGxlKTtcbiAgZm9vZEluZm8uYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEluZm8pO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xuXG4gIGl0ZW1OdW0rKztcblxuICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBpdGVtTnVtID0gMTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuLy8gQ3JlYXRlIEhlYWRlciBzZWN0aW9uXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSgpKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcblxuICAvLyBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICBjb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIG1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1uYW1lXCIpO1xuICBtYWluVGl0bGUudGV4dENvbnRlbnQgPSBcIllZQyBTbW9rZUhvdXNlXCI7XG5cbiAgdGl0bGUuYXBwZW5kQ2hpbGQobWFpblRpdGxlKTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoY3JlYXRlU2xvZ2FuKCkpO1xuXG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2xvZ2FuKCkge1xuICBjb25zdCBzbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHNsb2dhbi5jbGFzc0xpc3QuYWRkKFwic2xvZ2FuXCIpO1xuICBzbG9nYW4udGV4dENvbnRlbnQgPSBcIkJlc3QgQkJRIGluIFRvd25cIjtcblxuICByZXR1cm4gc2xvZ2FuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuXG4gIC8vIEhvbWUgU2VjdGlvblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZUJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkSG9tZSgpO1xuICB9KTtcblxuICAvLyBNZW51IFNlY3Rpb25cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnVCdXR0b25cIik7XG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSk7XG5cbiAgLy8gQ29udGFjdCBTZWN0aW9uXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0QnV0dG9uXCIpO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRDb250YWN0KCk7XG4gIH0pO1xuXG4gIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgcmV0dXJuIG5hdkJhcjtcbn1cblxuLy8gQ3JlYXRlIE1haW4gU2VjdGlvblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjNcIjtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgbG9hZEhvbWUoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxpemVQYWdlIGZyb20gXCIuL3dlYnBhZ2VcIjtcblxuaW5pdGlhbGl6ZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==