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
    createInfo("Email Address: ", "KCSmokehouse@gmail.com")
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
  appitizers.appendChild(
    createMenuItem(
      "Potato Skins",
      "Crispy, golden potato skins fried in duck fat topped with bacon, green onions, and our special house blend of cheese.  Served with sour cream and salsa on the side",
      "$8.99"
    )
  );
  appitizers.appendChild(
    createMenuItem(
      "Death Poppers",
      "Little poppers that will melt your mouth.  These poppers are stuffed with mozzarealla and Carolina Reapers.",
      "$14.99"
    )
  );
  appitizers.appendChild(
    createMenuItem(
      "Chicken Wings",
      "10 Flavours to pick from: Honey Garlic, BBQ, Greek, Salt & Pepper, Lemon Pepper, Spicy, Blazin hot, Honey Hot, Smokey, and Original.  Served with a side of ranch and carrots",
      "$14.99"
    )
  );

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

function loadMenu() {
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
  mainTitle.textContent = "KC SmokeHouse";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDLG9EQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0Q29udGFpbmVyXCIpO1xuICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0VXMuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RVc1wiKTtcbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1QgVVNcIjtcbiAgY29udGFjdFVzLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gIGNvbnRhY3RVcy5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKFwiUGhvbmUgTnVtYmVyOiBcIiwgXCIxMjMtNDU2LTc4OTBcIikpO1xuICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlSW5mbyhcIkVtYWlsIEFkZHJlc3M6IFwiLCBcIktDU21va2Vob3VzZUBnbWFpbC5jb21cIilcbiAgKTtcblxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcbiAgY29uc3QgaG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9IFwiSE9VUlNcIjtcblxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RpdGxlKTtcblxuICBjb25zdCBkYXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVzLmNsYXNzTGlzdC5hZGQoXCJkYXRlc1wiKTtcblxuICBkYXRlcy5hcHBlbmRDaGlsZChkYXlIb3VycyhcIk1vbmRheVwiLCBcIjE6MDBQTVwiLCBcIjEwOjAwUE1cIikpO1xuICBkYXRlcy5hcHBlbmRDaGlsZChkYXlIb3VycyhcIlR1ZXNkYXlcIiwgXCIxOjAwUE1cIiwgXCIxMDowMFBNXCIpKTtcbiAgZGF0ZXMuYXBwZW5kQ2hpbGQoZGF5SG91cnMoXCJXZWRuZXNkYXlcIiwgXCIxOjAwUE1cIiwgXCIxMDowMFBNXCIpKTtcbiAgZGF0ZXMuYXBwZW5kQ2hpbGQoZGF5SG91cnMoXCJUaHVyc2RheVwiLCBcIjE6MDBQTVwiLCBcIjEwOjAwUE1cIikpO1xuICBkYXRlcy5hcHBlbmRDaGlsZChkYXlIb3VycyhcIkZyaWRheVwiLCBcIjE6MDBQTVwiLCBcIjE6MDBBTVwiKSk7XG4gIGRhdGVzLmFwcGVuZENoaWxkKGRheUhvdXJzKFwiU2F0dXJkYXlcIiwgXCIxMDowMEFNXCIsIFwiMTowMEFNXCIpKTtcbiAgZGF0ZXMuYXBwZW5kQ2hpbGQoZGF5SG91cnMoXCJTdW5kYXlcIiwgXCIxMDowMEFNXCIsIFwiMTA6MDBQTVwiKSk7XG5cbiAgaG91cnMuYXBwZW5kQ2hpbGQoZGF0ZXMpO1xuXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFVzKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgLy8gRml4IFdoaXRlc3BhY2UgRXJyb3JcbiAgLy8gY29udGFjdC5hcHBlbmRDaGlsZChcbiAgLy8gICBjcmVhdGVJbmZvKFwiQWRkcmVzczogXCIsIFwiMTIzIE1haW4gU3RyZWV0IFF1ZWVucyBOZXcgWW9ya1wiKVxuICAvLyApO1xuXG4gIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBkYXlIb3VycyhkYXksIG9wZW4sIGNsb3NlKSB7XG4gIGNvbnN0IGRheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF5cy50ZXh0Q29udGVudCA9IGAke2RheX0gICAgICAgICAgJHtvcGVufSAtICR7Y2xvc2V9YDtcblxuICByZXR1cm4gZGF5cztcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbyhsYWJlbCwgdGV4dCkge1xuICBjb25zdCBjcmVhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNyZWF0ZVAuY2xhc3NMaXN0LmFkZCh0ZXh0KTtcbiAgY3JlYXRlUC50ZXh0Q29udGVudCA9IGAke2xhYmVsfSAke3RleHR9YDtcblxuICByZXR1cm4gY3JlYXRlUDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZSBQYWdlXCI7XG5cbiAgcmV0dXJuIGhvbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuIiwibGV0IGl0ZW1OdW0gPSAxO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcblxuICBtZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG5cbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVDb250YWluZXJcIik7XG5cbiAgY29uc3QgYXBwaXRpemVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFwcGl0aXplcnMuY2xhc3NMaXN0LmFkZChcImFwcGl0aXplcnNcIik7XG5cbiAgY29uc3QgYXBwaXRpemVyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBhcHBpdGl6ZXJzVGl0bGUudGV4dENvbnRlbnQgPSBcIkFwcGl0aXplcnNcIjtcblxuICBhcHBpdGl6ZXJzLmFwcGVuZENoaWxkKGFwcGl0aXplcnNUaXRsZSk7XG4gIGFwcGl0aXplcnMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIllZQyBUYXRvcnNcIixcbiAgICAgIFwiSG9tZW1hZGUgdGF0b3IgdG90cyBkZWVwIGZyaWVkIGluIGR1Y2sgZmF0IHNlcnZlZCB3aXRoIHNvdXIgY3JlYW0sIGdyZWVuIG9uaW9ucywgYmFjb24sIGFuZCB0b21hdG9lc1wiLFxuICAgICAgXCIkMTIuOTlcIlxuICAgIClcbiAgKTtcbiAgYXBwaXRpemVycy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiU3RlYWsgQml0ZXNcIixcbiAgICAgIFwiQUFBIEFsYmV0YSBCZWVmIGNvb2tlZCB0byBwZXJmZWN0aW9uIG92ZXIgYW4gb3BlbiBmaXJlLiAgU2VydmVkIHdpdGggaG9tZW1hZGUgc3RlYWsgc2F1Y2VcIixcbiAgICAgIFwiJDE0Ljk5XCJcbiAgICApXG4gICk7XG4gIGFwcGl0aXplcnMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlBvdGF0byBTa2luc1wiLFxuICAgICAgXCJDcmlzcHksIGdvbGRlbiBwb3RhdG8gc2tpbnMgZnJpZWQgaW4gZHVjayBmYXQgdG9wcGVkIHdpdGggYmFjb24sIGdyZWVuIG9uaW9ucywgYW5kIG91ciBzcGVjaWFsIGhvdXNlIGJsZW5kIG9mIGNoZWVzZS4gIFNlcnZlZCB3aXRoIHNvdXIgY3JlYW0gYW5kIHNhbHNhIG9uIHRoZSBzaWRlXCIsXG4gICAgICBcIiQ4Ljk5XCJcbiAgICApXG4gICk7XG4gIGFwcGl0aXplcnMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkRlYXRoIFBvcHBlcnNcIixcbiAgICAgIFwiTGl0dGxlIHBvcHBlcnMgdGhhdCB3aWxsIG1lbHQgeW91ciBtb3V0aC4gIFRoZXNlIHBvcHBlcnMgYXJlIHN0dWZmZWQgd2l0aCBtb3p6YXJlYWxsYSBhbmQgQ2Fyb2xpbmEgUmVhcGVycy5cIixcbiAgICAgIFwiJDE0Ljk5XCJcbiAgICApXG4gICk7XG4gIGFwcGl0aXplcnMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkNoaWNrZW4gV2luZ3NcIixcbiAgICAgIFwiMTAgRmxhdm91cnMgdG8gcGljayBmcm9tOiBIb25leSBHYXJsaWMsIEJCUSwgR3JlZWssIFNhbHQgJiBQZXBwZXIsIExlbW9uIFBlcHBlciwgU3BpY3ksIEJsYXppbiBob3QsIEhvbmV5IEhvdCwgU21va2V5LCBhbmQgT3JpZ2luYWwuICBTZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgcmFuY2ggYW5kIGNhcnJvdHNcIixcbiAgICAgIFwiJDE0Ljk5XCJcbiAgICApXG4gICk7XG5cbiAgY29uc3QgYmJxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmJxLmNsYXNzTGlzdC5hZGQoXCJiYnFcIik7XG5cbiAgY29uc3QgYmJxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGJicVRpdGxlLnRleHRDb250ZW50ID0gXCJCQlFcIjtcblxuICBiYnEuYXBwZW5kQ2hpbGQoYmJxVGl0bGUpO1xuICBiYnEuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlJhY2sgb2YgUmlic1wiLFxuICAgICAgXCJSYWNrIG9mIG91ciBmYW1vdXMgcmlicyB0aGF0IGhhdmUgYmVlbiBzbW9rZWQgZm9yIDUgaG91cnMrLiAgU2VydmVkIHdpdGggYSBzaWRlIG9mIGNvbGVzbGF3IGFuZCBmcmVuY2ggZnJpZXNcIixcbiAgICAgIFwiJDM5Ljk5XCJcbiAgICApXG4gICk7XG4gIGJicS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiUmliZXllXCIsXG4gICAgICBcIk91ciBib25lIGluIFJpYmV5ZSBpcyBncmlsbGVkIHRvIHBlcmZlY3Rpb24sIHdlIHJlY29tbWVuZCBoYXZpbmcgaXQgTWVkaXVtIFJhcmUsIGJ1dCBjYW4gYmUgY29va2VkIGhvd2V2ZXIgeW91IHdhbnQgaXQuICBTZXJ2ZWQgd2l0aCBhIGJha2VkIHBvdGF0byBhbmQgbWl4ZWQgdmVnZXRhYmxlc1wiLFxuICAgICAgXCIkNjkuOTlcIlxuICAgIClcbiAgKTtcbiAgYmJxLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJGcmVlIFJhbmdlIENoaWNrZW5cIixcbiAgICAgIFwiT3VyIGZyZWUgcmFuZ2UgY2hpY2tlbiBhcmUgc21va2VkIGRhaWx5IGZvciA0KyBob3VycyB0byBlbWJyYWNlIGFsbCB0aGUgc21va2V5IGZsYXZvdXJzLiAgU2VydmVkIHdpdGggZnJlbmNoIGZyaWVzIGFuZCBwb3RhdG8gc2FsYWRcIixcbiAgICAgIFwiJDU5Ljk5XCJcbiAgICApXG4gICk7XG4gIGJicS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiU21va2VkIEJyaXNrZXRcIixcbiAgICAgIFwiKkN1c3RvbWVyIEZhdm9yaXRlKiBPdXIgZmFtb3VzIHNtb2tlZCBicmlza2V0IHRoYXQgaGFzIGJlZW4gc21va2VkIGZvciAxOCsgaG91cnMuICBTZXJ2ZWQgd2l0aCBjb2xlc2xhdyBhbmQgZnJlbmNoIGZyaWVzXCIsXG4gICAgICBcIiQ1OS45OVwiXG4gICAgKVxuICApO1xuICBiYnEuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIlB1bGxlZCBQb3JrXCIsXG4gICAgICBcIlRlbmRlciBwdWxsZWQgcG9yayB0aGF0IGp1c3QgbWVsdHMgaW4geW91ciBtb3V0aC4gIFNlcnZlZCB3aXRoIGNvbGVzbGF3IGFuZCBwb3RhdG8gc2FsYWRcIixcbiAgICAgIFwiJDM5Ljk5XCJcbiAgICApXG4gICk7XG5cbiAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNzZXJ0cy5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydHNcIik7XG5cbiAgY29uc3QgZGVzc2VydHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZGVzc2VydHNUaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzc2VydHNcIjtcblxuICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChkZXNzZXJ0c1RpdGxlKTtcbiAgZGVzc2VydHMuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICBcIkFwcGxlIFBpZVwiLFxuICAgICAgXCJBIExhcmdlIHNsaWNlIG9mIGhvbWVtYWRlIEFwcGxlIFBpZSBzZXJ2ZWQgd2l0aCBhIHNjb29wIG9mIHZhbmlsbGEgaWNlIGNyZWFtIG9uIHRvcC5cIixcbiAgICAgIFwiJDEyLjk5XCJcbiAgICApXG4gICk7XG4gIGRlc3NlcnRzLmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJDaG9jb2xhdGUgQ2FrZVwiLFxuICAgICAgXCJBIGNsYXNzaWMgc2xpY2Ugb2YgY2hvY29sYXRlIGNha2Ugd2l0aCBicm93bmllIGNydW1ibGVzIG9uIHRvcFwiLFxuICAgICAgXCIkOS45OVwiXG4gICAgKVxuICApO1xuICBkZXNzZXJ0cy5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiQ3LDqG1lIEJyw7tsw6llXCIsXG4gICAgICBcIkFuIGV4cXVpc2l0ZWx5IHJpY2ggYW5kIGVsZWdhbnQgZGVzc2VydFwiLFxuICAgICAgXCIkMTEuOTlcIlxuICAgIClcbiAgKTtcblxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGl0aXplcnMpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGJicSk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydHMpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIgKyBpdGVtTnVtKTtcblxuICBjb25zdCBmb29kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGZvb2RUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgY29uc3QgZm9vZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb29kUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kVGl0bGUpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xuXG4gIGl0ZW1OdW0rKztcblxuICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG4vLyBDcmVhdGUgSGVhZGVyIHNlY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCkpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuXG4gIC8vIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuXG4gIGNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbWFpblRpdGxlLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gIG1haW5UaXRsZS50ZXh0Q29udGVudCA9IFwiS0MgU21va2VIb3VzZVwiO1xuXG4gIHRpdGxlLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKGNyZWF0ZVNsb2dhbigpKTtcblxuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNsb2dhbigpIHtcbiAgY29uc3Qgc2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBzbG9nYW4uY2xhc3NMaXN0LmFkZChcInNsb2dhblwiKTtcbiAgc2xvZ2FuLnRleHRDb250ZW50ID0gXCJCZXN0IEJCUSBpbiBUb3duXCI7XG5cbiAgcmV0dXJuIHNsb2dhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcblxuICAvLyBIb21lIFNlY3Rpb25cbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImhvbWVCdXR0b25cIik7XG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZEhvbWUoKTtcbiAgfSk7XG5cbiAgLy8gTWVudSBTZWN0aW9uXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51QnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIC8vIENvbnRhY3QgU2VjdGlvblxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuXG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkQ29udGFjdCgpO1xuICB9KTtcblxuICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gIHJldHVybiBuYXZCYXI7XG59XG5cbi8vIENyZWF0ZSBNYWluIFNlY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIzXCI7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gIGxvYWRIb21lKCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplUGFnZSBmcm9tIFwiLi93ZWJwYWdlXCI7XG5cbmluaXRpYWxpemVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=