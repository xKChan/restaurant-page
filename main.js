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
  contactUs.appendChild(contactTitle);
  contactUs.appendChild(createInfo("Phone Number: ", "123-456-7890"));
  contactUs.appendChild(
    createInfo("Email Address: ", "YYCsmokehouse@gmail.com")
  );

  const hours = document.createElement("div");
  hours.classList.add("hours");
  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "HOURS";

  hours.appendChild(hoursTitle);

  const dates = document.createElement("div");
  dates.classList.add("dates");

  dates.appendChild(dayHours("Monday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Tuesday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Wednesday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Thursday", "1:00PM", "10:00PM"));
  dates.appendChild(dayHours("Friday", "1:00PM", "1:00AM"));
  dates.appendChild(dayHours("Saturday", "10:00AM", "1:00AM"));
  dates.appendChild(dayHours("Sunday", "10:00AM", "10:00PM"));

  hours.appendChild(dates);

  contact.appendChild(contactUs);
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
  createP.classList.add(text);
  createP.textContent = `${label} ${text}`;

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
  home.textContent = "Home Page";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QyxvREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdENvbnRhaW5lclwiKTtcbiAgY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdFVzLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0VXNcIik7XG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gXCJDT05UQUNUIFVTXCI7XG4gIGNvbnRhY3RVcy5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbyhcIlBob25lIE51bWJlcjogXCIsIFwiMTIzLTQ1Ni03ODkwXCIpKTtcbiAgY29udGFjdFVzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZUluZm8oXCJFbWFpbCBBZGRyZXNzOiBcIiwgXCJZWUNzbW9rZWhvdXNlQGdtYWlsLmNvbVwiKVxuICApO1xuXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cnMuY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpO1xuICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBob3Vyc1RpdGxlLnRleHRDb250ZW50ID0gXCJIT1VSU1wiO1xuXG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xuXG4gIGNvbnN0IGRhdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF0ZXMuY2xhc3NMaXN0LmFkZChcImRhdGVzXCIpO1xuXG4gIGRhdGVzLmFwcGVuZENoaWxkKGRheUhvdXJzKFwiTW9uZGF5XCIsIFwiMTowMFBNXCIsIFwiMTA6MDBQTVwiKSk7XG4gIGRhdGVzLmFwcGVuZENoaWxkKGRheUhvdXJzKFwiVHVlc2RheVwiLCBcIjE6MDBQTVwiLCBcIjEwOjAwUE1cIikpO1xuICBkYXRlcy5hcHBlbmRDaGlsZChkYXlIb3VycyhcIldlZG5lc2RheVwiLCBcIjE6MDBQTVwiLCBcIjEwOjAwUE1cIikpO1xuICBkYXRlcy5hcHBlbmRDaGlsZChkYXlIb3VycyhcIlRodXJzZGF5XCIsIFwiMTowMFBNXCIsIFwiMTA6MDBQTVwiKSk7XG4gIGRhdGVzLmFwcGVuZENoaWxkKGRheUhvdXJzKFwiRnJpZGF5XCIsIFwiMTowMFBNXCIsIFwiMTowMEFNXCIpKTtcbiAgZGF0ZXMuYXBwZW5kQ2hpbGQoZGF5SG91cnMoXCJTYXR1cmRheVwiLCBcIjEwOjAwQU1cIiwgXCIxOjAwQU1cIikpO1xuICBkYXRlcy5hcHBlbmRDaGlsZChkYXlIb3VycyhcIlN1bmRheVwiLCBcIjEwOjAwQU1cIiwgXCIxMDowMFBNXCIpKTtcblxuICBob3Vycy5hcHBlbmRDaGlsZChkYXRlcyk7XG5cbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VXMpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAvLyBGaXggV2hpdGVzcGFjZSBFcnJvclxuICAvLyBjb250YWN0LmFwcGVuZENoaWxkKFxuICAvLyAgIGNyZWF0ZUluZm8oXCJBZGRyZXNzOiBcIiwgXCIxMjMgTWFpbiBTdHJlZXQgUXVlZW5zIE5ldyBZb3JrXCIpXG4gIC8vICk7XG5cbiAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIGRheUhvdXJzKGRheSwgb3BlbiwgY2xvc2UpIHtcbiAgY29uc3QgZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXlzLnRleHRDb250ZW50ID0gYCR7ZGF5fSAgICAgICAgICAke29wZW59IC0gJHtjbG9zZX1gO1xuXG4gIHJldHVybiBkYXlzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvKGxhYmVsLCB0ZXh0KSB7XG4gIGNvbnN0IGNyZWF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY3JlYXRlUC5jbGFzc0xpc3QuYWRkKHRleHQpO1xuICBjcmVhdGVQLnRleHRDb250ZW50ID0gYCR7bGFiZWx9ICR7dGV4dH1gO1xuXG4gIHJldHVybiBjcmVhdGVQO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn1cbiIsImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICBob21lLnRleHRDb250ZW50ID0gXCJIb21lIFBhZ2VcIjtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG4iLCJsZXQgaXRlbU51bSA9IDE7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRhaW5lclwiKTtcblxuICBjb25zdCBhcHBpdGl6ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXBwaXRpemVycy5jbGFzc0xpc3QuYWRkKFwiYXBwaXRpemVyc1wiKTtcblxuICBjb25zdCBhcHBpdGl6ZXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGFwcGl0aXplcnNUaXRsZS50ZXh0Q29udGVudCA9IFwiQXBwaXRpemVyc1wiO1xuXG4gIGNvbnN0IGFwcGl0aXplcnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcHBpdGl6ZXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhcHBpdGl6ZXJDb250YWluZXJcIik7XG5cbiAgYXBwaXRpemVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiWVlDIFRhdG9yc1wiLFxuICAgICAgXCJIb21lbWFkZSB0YXRvciB0b3RzIGRlZXAgZnJpZWQgaW4gZHVjayBmYXQgc2VydmVkIHdpdGggc291ciBjcmVhbSwgZ3JlZW4gb25pb25zLCBiYWNvbiwgYW5kIHRvbWF0b2VzXCIsXG4gICAgICBcIiQxMi45OVwiXG4gICAgKVxuICApO1xuICBhcHBpdGl6ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJTdGVhayBCaXRlc1wiLFxuICAgICAgXCJBQUEgQWxiZXRhIEJlZWYgY29va2VkIHRvIHBlcmZlY3Rpb24gb3ZlciBhbiBvcGVuIGZpcmUuICBTZXJ2ZWQgd2l0aCBob21lbWFkZSBzdGVhayBzYXVjZVwiLFxuICAgICAgXCIkMTQuOTlcIlxuICAgIClcbiAgKTtcbiAgYXBwaXRpemVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUG90YXRvIFNraW5zXCIsXG4gICAgICBcIkNyaXNweSwgZ29sZGVuIHBvdGF0byBza2lucyBmcmllZCBpbiBkdWNrIGZhdCB0b3BwZWQgd2l0aCBiYWNvbiwgZ3JlZW4gb25pb25zLCBhbmQgb3VyIHNwZWNpYWwgaG91c2UgYmxlbmQgb2YgY2hlZXNlLiAgU2VydmVkIHdpdGggc291ciBjcmVhbSBhbmQgc2Fsc2Egb24gdGhlIHNpZGVcIixcbiAgICAgIFwiJDguOTlcIlxuICAgIClcbiAgKTtcbiAgYXBwaXRpemVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiRGVhdGggUG9wcGVyc1wiLFxuICAgICAgXCJMaXR0bGUgcG9wcGVycyB0aGF0IHdpbGwgbWVsdCB5b3VyIG1vdXRoLiAgVGhlc2UgcG9wcGVycyBhcmUgc3R1ZmZlZCB3aXRoIG1venphcmVhbGxhIGFuZCBDYXJvbGluYSBSZWFwZXJzLlwiLFxuICAgICAgXCIkMTQuOTlcIlxuICAgIClcbiAgKTtcbiAgYXBwaXRpemVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiQ2hpY2tlbiBXaW5nc1wiLFxuICAgICAgXCIxMCBGbGF2b3VycyB0byBwaWNrIGZyb206IEhvbmV5IEdhcmxpYywgQkJRLCBHcmVlaywgU2FsdCAmIFBlcHBlciwgTGVtb24gUGVwcGVyLCBTcGljeSwgQmxhemluIGhvdCwgSG9uZXkgSG90LCBTbW9rZXksIGFuZCBPcmlnaW5hbC4gIFNlcnZlZCB3aXRoIGEgc2lkZSBvZiByYW5jaCBhbmQgY2Fycm90c1wiLFxuICAgICAgXCIkMTQuOTlcIlxuICAgIClcbiAgKTtcblxuICBhcHBpdGl6ZXJzLmFwcGVuZENoaWxkKGFwcGl0aXplcnNUaXRsZSk7XG4gIGFwcGl0aXplcnMuYXBwZW5kQ2hpbGQoYXBwaXRpemVyc0NvbnRhaW5lcik7XG5cbiAgY29uc3QgYmJxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmJxLmNsYXNzTGlzdC5hZGQoXCJiYnFcIik7XG5cbiAgY29uc3QgYmJxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGJicVRpdGxlLnRleHRDb250ZW50ID0gXCJCQlFcIjtcblxuICBiYnEuYXBwZW5kQ2hpbGQoYmJxVGl0bGUpO1xuICBiYnEuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlJhY2sgb2YgUmlic1wiLFxuICAgICAgXCJSYWNrIG9mIG91ciBmYW1vdXMgcmlicyB0aGF0IGhhdmUgYmVlbiBzbW9rZWQgZm9yIDUgaG91cnMrLiAgU2VydmVkIHdpdGggYSBzaWRlIG9mIGNvbGVzbGF3IGFuZCBmcmVuY2ggZnJpZXNcIixcbiAgICAgIFwiJDM5Ljk5XCJcbiAgICApXG4gICk7XG4gIGJicS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUmliZXllXCIsXG4gICAgICBcIk91ciBib25lIGluIFJpYmV5ZSBpcyBncmlsbGVkIHRvIHBlcmZlY3Rpb24sIHdlIHJlY29tbWVuZCBoYXZpbmcgaXQgTWVkaXVtIFJhcmUsIGJ1dCBjYW4gYmUgY29va2VkIGhvd2V2ZXIgeW91IHdhbnQgaXQuICBTZXJ2ZWQgd2l0aCBhIGJha2VkIHBvdGF0byBhbmQgbWl4ZWQgdmVnZXRhYmxlc1wiLFxuICAgICAgXCIkNjkuOTlcIlxuICAgIClcbiAgKTtcbiAgYmJxLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJGcmVlIFJhbmdlIENoaWNrZW5cIixcbiAgICAgIFwiT3VyIGZyZWUgcmFuZ2UgY2hpY2tlbiBhcmUgc21va2VkIGRhaWx5IGZvciA0KyBob3VycyB0byBlbWJyYWNlIGFsbCB0aGUgc21va2V5IGZsYXZvdXJzLiAgU2VydmVkIHdpdGggZnJlbmNoIGZyaWVzIGFuZCBwb3RhdG8gc2FsYWRcIixcbiAgICAgIFwiJDU5Ljk5XCJcbiAgICApXG4gICk7XG4gIGJicS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiU21va2VkIEJyaXNrZXRcIixcbiAgICAgIFwiKkN1c3RvbWVyIEZhdm9yaXRlKiBPdXIgZmFtb3VzIHNtb2tlZCBicmlza2V0IHRoYXQgaGFzIGJlZW4gc21va2VkIGZvciAxOCsgaG91cnMuICBTZXJ2ZWQgd2l0aCBjb2xlc2xhdyBhbmQgZnJlbmNoIGZyaWVzXCIsXG4gICAgICBcIiQ1OS45OVwiXG4gICAgKVxuICApO1xuICBiYnEuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlB1bGxlZCBQb3JrXCIsXG4gICAgICBcIlRlbmRlciBwdWxsZWQgcG9yayB0aGF0IGp1c3QgbWVsdHMgaW4geW91ciBtb3V0aC4gIFNlcnZlZCB3aXRoIGNvbGVzbGF3IGFuZCBwb3RhdG8gc2FsYWRcIixcbiAgICAgIFwiJDM5Ljk5XCJcbiAgICApXG4gICk7XG5cbiAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNzZXJ0cy5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydHNcIik7XG5cbiAgY29uc3QgZGVzc2VydHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZGVzc2VydHNUaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzc2VydHNcIjtcblxuICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChkZXNzZXJ0c1RpdGxlKTtcbiAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkFwcGxlIFBpZVwiLFxuICAgICAgXCJBIExhcmdlIHNsaWNlIG9mIGhvbWVtYWRlIEFwcGxlIFBpZSBzZXJ2ZWQgd2l0aCBhIHNjb29wIG9mIHZhbmlsbGEgaWNlIGNyZWFtIG9uIHRvcC5cIixcbiAgICAgIFwiJDEyLjk5XCJcbiAgICApXG4gICk7XG4gIGRlc3NlcnRzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJDaG9jb2xhdGUgQ2FrZVwiLFxuICAgICAgXCJBIGNsYXNzaWMgc2xpY2Ugb2YgY2hvY29sYXRlIGNha2Ugd2l0aCBicm93bmllIGNydW1ibGVzIG9uIHRvcFwiLFxuICAgICAgXCIkOS45OVwiXG4gICAgKVxuICApO1xuICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiQ3LDqG1lIEJyw7tsw6llXCIsXG4gICAgICBcIkFuIGV4cXVpc2l0ZWx5IHJpY2ggYW5kIGVsZWdhbnQgZGVzc2VydFwiLFxuICAgICAgXCIkMTEuOTlcIlxuICAgIClcbiAgKTtcblxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGl0aXplcnMpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGJicSk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydHMpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcblxuICBjb25zdCBmb29kSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2RJbmZvLmNsYXNzTGlzdC5hZGQoXCJmb29kSW5mb1wiKTtcblxuICBjb25zdCBmb29kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGZvb2RUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3QgZm9vZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb29kUHJpY2UuY2xhc3NMaXN0LmFkZChcInByaWNlXCIpO1xuICBmb29kUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICBmb29kSW5mby5hcHBlbmRDaGlsZChmb29kVGl0bGUpO1xuICBmb29kSW5mby5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kSW5mbyk7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG5cbiAgaXRlbU51bSsrO1xuXG4gIHJldHVybiBtZW51SXRlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGl0ZW1OdW0gPSAxO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG4vLyBDcmVhdGUgSGVhZGVyIHNlY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCkpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuXG4gIC8vIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuXG4gIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IFwiWVlDIFNtb2tlSG91c2VcIjtcblxuICB0aXRsZS5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xuICB0aXRsZS5hcHBlbmRDaGlsZChjcmVhdGVTbG9nYW4oKSk7XG5cbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTbG9nYW4oKSB7XG4gIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgc2xvZ2FuLmNsYXNzTGlzdC5hZGQoXCJzbG9nYW5cIik7XG4gIHNsb2dhbi50ZXh0Q29udGVudCA9IFwiQmVzdCBCQlEgaW4gVG93blwiO1xuXG4gIHJldHVybiBzbG9nYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIik7XG5cbiAgLy8gSG9tZSBTZWN0aW9uXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJob21lQnV0dG9uXCIpO1xuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRIb21lKCk7XG4gIH0pO1xuXG4gIC8vIE1lbnUgU2VjdGlvblxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudUJ1dHRvblwiKTtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkTWVudSgpO1xuICB9KTtcblxuICAvLyBDb250YWN0IFNlY3Rpb25cbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RCdXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgfSk7XG5cbiAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICByZXR1cm4gbmF2QmFyO1xufVxuXG4vLyBDcmVhdGUgTWFpbiBTZWN0aW9uXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgMjAyM1wiO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICBsb2FkSG9tZSgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbGl6ZVBhZ2UgZnJvbSBcIi4vd2VicGFnZVwiO1xuXG5pbml0aWFsaXplUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9