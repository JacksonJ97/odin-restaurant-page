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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContactLinks = () => {
  const addressLink = document.createElement("div");
  const address = document.createElement("p");
  const addressIcon = document.createElement("i");
  const openHoursLink = document.createElement("div");
  const openHours = document.createElement("p");
  const clockIcon = document.createElement("i");
  const telephoneLink = document.createElement("div");
  const telephone = document.createElement("p");
  const telephoneIcon = document.createElement("i");

  addressLink.classList.add("contact-link");

  address.textContent = "163 King St E \r\n";
  address.textContent += "Toronto, ON M5A 1J4";

  addressIcon.classList.add("fas");
  addressIcon.classList.add("fa-map-marker-alt");

  addressLink.append(addressIcon);
  addressLink.append(address);

  openHoursLink.classList.add("contact-link");

  openHours.textContent = "Mon - Thurs: 11am - 9pm \r\n";
  openHours.textContent += "Fri - Sun: 11am - 8pm";

  clockIcon.classList.add("fas");
  clockIcon.classList.add("fa-clock");

  openHoursLink.append(clockIcon);
  openHoursLink.append(openHours);

  telephoneLink.classList.add("contact-link");

  telephone.textContent = "(123)-456-789";

  telephoneIcon.classList.add("fas");
  telephoneIcon.classList.add("fa-phone-alt");

  telephoneLink.append(telephoneIcon);
  telephoneLink.append(telephone);

  return [addressLink, openHoursLink, telephoneLink];
};

const createContactTextDiv = () => {
  const contactTextDiv = document.createElement("div");
  const contactLinks = createContactLinks();

  contactTextDiv.classList.add("contact-text-container");

  contactTextDiv.append(contactLinks[0]);
  contactTextDiv.append(contactLinks[1]);
  contactTextDiv.append(contactLinks[2]);

  return contactTextDiv;
};

const createContactCard = () => {
  const contactCard = document.createElement("div");
  const contactTextDiv = createContactTextDiv();
  const map = document.createElement("iframe");

  contactCard.classList.add("contact-card");
  map.classList.add("map");

  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11548.784181080915!2d-79.3827794727627!3d43.64408938179642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cbcabcc30331%3A0xa1aa40a0dcb47ed!2sChatime!5e0!3m2!1sen!2sca!4v1630145598822!5m2!1sen!2sca";
  map.width = "600";
  map.height = "450";
  map.tabIndex = "0";

  contactCard.append(contactTextDiv);
  contactCard.append(map);

  return contactCard;
};

const createContactSection = () => {
  const contactSection = document.createElement("section");
  const contactCard = createContactCard();
  const contactTitle = document.createElement("h2");

  contactSection.classList.add("contact-section");

  contactTitle.textContent = "Contact Us";

  contactSection.append(contactTitle);
  contactSection.append(contactCard);

  return contactSection;
};

const loadContactPage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  const contactSection = createContactSection();

  main.append(contactSection);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContactInfo = () => {
  const contactInfoDiv = document.createElement("div");
  const addressDiv = document.createElement("div");
  const address = document.createElement("p");
  const addressIcon = document.createElement("i");
  const openHoursDiv = document.createElement("div");
  const openHours = document.createElement("p");
  const clockIcon = document.createElement("i");
  const wrapper = document.createElement("div");

  wrapper.classList.add("wrapper");
  contactInfoDiv.classList.add("contact-info-container");
  addressDiv.classList.add("contact-link");

  address.textContent = "163 King St E \r\n";
  address.textContent += "Toronto, ON M5A 1J4";

  addressIcon.classList.add("fas");
  addressIcon.classList.add("fa-map-marker-alt");

  addressDiv.append(addressIcon);
  addressDiv.append(address);

  openHoursDiv.classList.add("contact-link");

  openHours.textContent = "Mon - Thurs: 11am - 9pm \r\n";
  openHours.textContent += "Fri - Sun: 11am - 8pm";

  clockIcon.classList.add("fas");
  clockIcon.classList.add("fa-clock");

  openHoursDiv.append(clockIcon);
  openHoursDiv.append(openHours);

  wrapper.append(addressDiv);
  wrapper.append(openHoursDiv);
  contactInfoDiv.append(wrapper);

  return contactInfoDiv;
};

const createHomeSection = () => {
  const homeSection = document.createElement("section");
  const contactInfo = createContactInfo();
  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  container.classList.add("container");
  homeSection.classList.add("home-section");
  p.classList.add("subtitle");

  h1.textContent = "Welcome to our cafe!";
  p.textContent = "Drinks crafted with organic ingredients. No artificial colouring or flavours.";

  container.append(h1);
  container.append(p);
  container.append(contactInfo);
  homeSection.append(container);

  return homeSection;
};

const loadHomePage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  const homeSection = createHomeSection();

  main.append(homeSection);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createMenuItems = () => {
  const greenTeaDiv = document.createElement("div");
  const blackTeaDiv = document.createElement("div");
  const earlGreyTeaDiv = document.createElement("div");
  const milkTeaDiv = document.createElement("div");

  greenTeaDiv.classList.add("menu-item");
  blackTeaDiv.classList.add("menu-item");
  earlGreyTeaDiv.classList.add("menu-item");
  milkTeaDiv.classList.add("menu-item");

  const greenTeaImg = document.createElement("img");
  const blackTeaImg = document.createElement("img");
  const earlGreyTeaImg = document.createElement("img");
  const milkTeaImg = document.createElement("img");

  greenTeaImg.src = "images/green-tea.jpg";
  greenTeaImg.alt = "Green Tea";
  blackTeaImg.src = "images/black-tea.jpg";
  blackTeaImg.alt = "Black Tea";
  earlGreyTeaImg.src = "images/earl-grey-tea.jpg";
  earlGreyTeaImg.alt = "Earl Grey Tea";
  milkTeaImg.src = "images/milk-tea.jpg";
  milkTeaImg.alt = "Milk Tea";

  const greenTeaTitle = document.createElement("p");
  const blackTeaTitle = document.createElement("p");
  const earlGreyTeaTitle = document.createElement("p");
  const milkTeaTitle = document.createElement("p");

  greenTeaTitle.textContent = "Green Tea";
  blackTeaTitle.textContent = "Black Tea";
  earlGreyTeaTitle.textContent = "Earl Grey Tea";
  milkTeaTitle.textContent = "Milk Tea";

  const greenTeaPrice = document.createElement("p");
  const blackTeaPrice = document.createElement("p");
  const earlGreyTeaPrice = document.createElement("p");
  const milkTeaPrice = document.createElement("p");

  greenTeaPrice.textContent = "$10";
  blackTeaPrice.textContent = "$10";
  earlGreyTeaPrice.textContent = "$10";
  milkTeaPrice.textContent = "$10";

  greenTeaDiv.append(greenTeaImg);
  greenTeaDiv.append(greenTeaTitle);
  greenTeaDiv.append(greenTeaPrice);

  blackTeaDiv.append(blackTeaImg);
  blackTeaDiv.append(blackTeaTitle);
  blackTeaDiv.append(blackTeaPrice);

  earlGreyTeaDiv.append(earlGreyTeaImg);
  earlGreyTeaDiv.append(earlGreyTeaTitle);
  earlGreyTeaDiv.append(earlGreyTeaPrice);

  milkTeaDiv.append(milkTeaImg);
  milkTeaDiv.append(milkTeaTitle);
  milkTeaDiv.append(milkTeaPrice);

  return [greenTeaDiv, blackTeaDiv, earlGreyTeaDiv, milkTeaDiv];
};

const createMenuCard = () => {
  const menuCardDiv = document.createElement("div");
  const menuItems = createMenuItems();

  menuCardDiv.classList.add("menu-card");

  menuCardDiv.append(menuItems[0]);
  menuCardDiv.append(menuItems[1]);
  menuCardDiv.append(menuItems[2]);
  menuCardDiv.append(menuItems[3]);

  return menuCardDiv;
};

const createMenuSection = () => {
  const menuSection = document.createElement("section");
  const menuCard = createMenuCard();
  const menuTitle = document.createElement("h2");

  menuSection.classList.add("menu-section");

  menuTitle.textContent = "Menu";

  menuSection.append(menuTitle);
  menuSection.append(menuCard);

  return menuSection;
};

const loadMenuPage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  const menuSection = createMenuSection();

  main.append(menuSection);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);


/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const createHamburgerMenu = () => {
  const hamburgerBtn = document.createElement("div");
  const hamburgerMenu = document.createElement("div");
  hamburgerBtn.classList.add("burger-btn");
  hamburgerMenu.classList.add("burger-menu");

  hamburgerBtn.append(hamburgerMenu);

  return hamburgerBtn;
};

const createNav = () => {
  const nav = document.createElement("nav");
  const companyLogo = document.createElement("div");
  const companyText = document.createElement("p");
  const companySlogan = document.createElement("p");
  const hamburgerMenu = createHamburgerMenu();
  const ul = document.createElement("ul");
  const homeTab = document.createElement("li");
  const menuTab = document.createElement("li");
  const contactTab = document.createElement("li");

  companyText.textContent = "Jack's Cafe";
  companySlogan.textContent = "One sip at a time";
  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";
  contactTab.textContent = "Contact";

  companyLogo.classList.add("company-logo");
  companyText.classList.add("company-text");
  companySlogan.classList.add("company-slogan");
  homeTab.classList.add("nav-button");
  menuTab.classList.add("nav-button");
  contactTab.classList.add("nav-button");

  let menuOpen = false;

  hamburgerMenu.addEventListener("click", () => {
    if (!menuOpen) {
      hamburgerMenu.classList.add("open");
      ul.classList.add("show");
      menuOpen = true;
    } else {
      hamburgerMenu.classList.remove("open");
      ul.classList.remove("show");
      menuOpen = false;
    }
  });

  window.addEventListener("resize", () => {
    if (document.body.clientWidth > 780) {
      ul.classList.remove("show");
    }

    if (document.body.clientWidth < 800) {
      if (hamburgerMenu.classList.contains("open")) {
        ul.classList.add("show");
      }
    }
  });

  homeTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeTab);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
  });

  menuTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuTab);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();
  });

  contactTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactTab);
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();
  });

  companyLogo.append(companyText);
  companyLogo.append(companySlogan);
  ul.append(homeTab);
  ul.append(menuTab);
  ul.append(contactTab);
  nav.append(companyLogo);
  nav.append(hamburgerMenu);
  nav.append(ul);

  return nav;
};

const createHeader = () => {
  const header = document.createElement("header");
  const container = document.createElement("div");
  const nav = createNav();

  container.classList.add("container");

  container.append(nav);
  header.append(container);

  return header;
};

const initializeWebsite = () => {
  const contentDiv = document.getElementById("content");
  const header = createHeader();
  const main = document.createElement("main");
  main.id = "main";

  contentDiv.append(header);
  contentDiv.append(main);
  setActiveButton(document.querySelector(".nav-button"));
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
};

const setActiveButton = (button) => {
  const navButtons = document.querySelectorAll(".nav-button");

  navButtons.forEach((button) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);


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
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_0__.default)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEcvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2RTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHTTtBQUNBO0FBQ007QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQVk7QUFDaEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBWTtBQUNoQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFlO0FBQ25CLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4Q0FBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7O1VDcElqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQzFDO0FBQ0EsaURBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUNvbnRhY3RMaW5rcyA9ICgpID0+IHtcclxuICBjb25zdCBhZGRyZXNzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGFkZHJlc3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgY29uc3Qgb3BlbkhvdXJzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgb3BlbkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgY2xvY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgY29uc3QgdGVsZXBob25lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGVsZXBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgdGVsZXBob25lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICBhZGRyZXNzTGluay5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1saW5rXCIpO1xyXG5cclxuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIxNjMgS2luZyBTdCBFIFxcclxcblwiO1xyXG4gIGFkZHJlc3MudGV4dENvbnRlbnQgKz0gXCJUb3JvbnRvLCBPTiBNNUEgMUo0XCI7XHJcblxyXG4gIGFkZHJlc3NJY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIik7XHJcbiAgYWRkcmVzc0ljb24uY2xhc3NMaXN0LmFkZChcImZhLW1hcC1tYXJrZXItYWx0XCIpO1xyXG5cclxuICBhZGRyZXNzTGluay5hcHBlbmQoYWRkcmVzc0ljb24pO1xyXG4gIGFkZHJlc3NMaW5rLmFwcGVuZChhZGRyZXNzKTtcclxuXHJcbiAgb3BlbkhvdXJzTGluay5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1saW5rXCIpO1xyXG5cclxuICBvcGVuSG91cnMudGV4dENvbnRlbnQgPSBcIk1vbiAtIFRodXJzOiAxMWFtIC0gOXBtIFxcclxcblwiO1xyXG4gIG9wZW5Ib3Vycy50ZXh0Q29udGVudCArPSBcIkZyaSAtIFN1bjogMTFhbSAtIDhwbVwiO1xyXG5cclxuICBjbG9ja0ljb24uY2xhc3NMaXN0LmFkZChcImZhc1wiKTtcclxuICBjbG9ja0ljb24uY2xhc3NMaXN0LmFkZChcImZhLWNsb2NrXCIpO1xyXG5cclxuICBvcGVuSG91cnNMaW5rLmFwcGVuZChjbG9ja0ljb24pO1xyXG4gIG9wZW5Ib3Vyc0xpbmsuYXBwZW5kKG9wZW5Ib3Vycyk7XHJcblxyXG4gIHRlbGVwaG9uZUxpbmsuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbGlua1wiKTtcclxuXHJcbiAgdGVsZXBob25lLnRleHRDb250ZW50ID0gXCIoMTIzKS00NTYtNzg5XCI7XHJcblxyXG4gIHRlbGVwaG9uZUljb24uY2xhc3NMaXN0LmFkZChcImZhc1wiKTtcclxuICB0ZWxlcGhvbmVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1waG9uZS1hbHRcIik7XHJcblxyXG4gIHRlbGVwaG9uZUxpbmsuYXBwZW5kKHRlbGVwaG9uZUljb24pO1xyXG4gIHRlbGVwaG9uZUxpbmsuYXBwZW5kKHRlbGVwaG9uZSk7XHJcblxyXG4gIHJldHVybiBbYWRkcmVzc0xpbmssIG9wZW5Ib3Vyc0xpbmssIHRlbGVwaG9uZUxpbmtdO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ29udGFjdFRleHREaXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFjdFRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNvbnRhY3RMaW5rcyA9IGNyZWF0ZUNvbnRhY3RMaW5rcygpO1xyXG5cclxuICBjb250YWN0VGV4dERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC10ZXh0LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgY29udGFjdFRleHREaXYuYXBwZW5kKGNvbnRhY3RMaW5rc1swXSk7XHJcbiAgY29udGFjdFRleHREaXYuYXBwZW5kKGNvbnRhY3RMaW5rc1sxXSk7XHJcbiAgY29udGFjdFRleHREaXYuYXBwZW5kKGNvbnRhY3RMaW5rc1syXSk7XHJcblxyXG4gIHJldHVybiBjb250YWN0VGV4dERpdjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRhY3RDYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb250YWN0VGV4dERpdiA9IGNyZWF0ZUNvbnRhY3RUZXh0RGl2KCk7XHJcbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuXHJcbiAgY29udGFjdENhcmQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY2FyZFwiKTtcclxuICBtYXAuY2xhc3NMaXN0LmFkZChcIm1hcFwiKTtcclxuXHJcbiAgbWFwLnNyYyA9XHJcbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDExNTQ4Ljc4NDE4MTA4MDkxNSEyZC03OS4zODI3Nzk0NzI3NjI3ITNkNDMuNjQ0MDg5MzgxNzk2NDIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg5ZDRjYmNhYmNjMzAzMzElM0EweGExYWE0MGEwZGNiNDdlZCEyc0NoYXRpbWUhNWUwITNtMiExc2VuITJzY2EhNHYxNjMwMTQ1NTk4ODIyITVtMiExc2VuITJzY2FcIjtcclxuICBtYXAud2lkdGggPSBcIjYwMFwiO1xyXG4gIG1hcC5oZWlnaHQgPSBcIjQ1MFwiO1xyXG4gIG1hcC50YWJJbmRleCA9IFwiMFwiO1xyXG5cclxuICBjb250YWN0Q2FyZC5hcHBlbmQoY29udGFjdFRleHREaXYpO1xyXG4gIGNvbnRhY3RDYXJkLmFwcGVuZChtYXApO1xyXG5cclxuICByZXR1cm4gY29udGFjdENhcmQ7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVDb250YWN0U2VjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGNvbnN0IGNvbnRhY3RDYXJkID0gY3JlYXRlQ29udGFjdENhcmQoKTtcclxuICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcblxyXG4gIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXNlY3Rpb25cIik7XHJcblxyXG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xyXG5cclxuICBjb250YWN0U2VjdGlvbi5hcHBlbmQoY29udGFjdFRpdGxlKTtcclxuICBjb250YWN0U2VjdGlvbi5hcHBlbmQoY29udGFjdENhcmQpO1xyXG5cclxuICByZXR1cm4gY29udGFjdFNlY3Rpb247XHJcbn07XHJcblxyXG5jb25zdCBsb2FkQ29udGFjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCk7XHJcblxyXG4gIG1haW4uYXBwZW5kKGNvbnRhY3RTZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0UGFnZTtcclxuIiwiY29uc3QgY3JlYXRlQ29udGFjdEluZm8gPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFjdEluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBhZGRyZXNzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gIGNvbnN0IG9wZW5Ib3Vyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3Qgb3BlbkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgY2xvY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XHJcbiAgY29udGFjdEluZm9EaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5mby1jb250YWluZXJcIik7XHJcbiAgYWRkcmVzc0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1saW5rXCIpO1xyXG5cclxuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIxNjMgS2luZyBTdCBFIFxcclxcblwiO1xyXG4gIGFkZHJlc3MudGV4dENvbnRlbnQgKz0gXCJUb3JvbnRvLCBPTiBNNUEgMUo0XCI7XHJcblxyXG4gIGFkZHJlc3NJY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIik7XHJcbiAgYWRkcmVzc0ljb24uY2xhc3NMaXN0LmFkZChcImZhLW1hcC1tYXJrZXItYWx0XCIpO1xyXG5cclxuICBhZGRyZXNzRGl2LmFwcGVuZChhZGRyZXNzSWNvbik7XHJcbiAgYWRkcmVzc0Rpdi5hcHBlbmQoYWRkcmVzcyk7XHJcblxyXG4gIG9wZW5Ib3Vyc0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1saW5rXCIpO1xyXG5cclxuICBvcGVuSG91cnMudGV4dENvbnRlbnQgPSBcIk1vbiAtIFRodXJzOiAxMWFtIC0gOXBtIFxcclxcblwiO1xyXG4gIG9wZW5Ib3Vycy50ZXh0Q29udGVudCArPSBcIkZyaSAtIFN1bjogMTFhbSAtIDhwbVwiO1xyXG5cclxuICBjbG9ja0ljb24uY2xhc3NMaXN0LmFkZChcImZhc1wiKTtcclxuICBjbG9ja0ljb24uY2xhc3NMaXN0LmFkZChcImZhLWNsb2NrXCIpO1xyXG5cclxuICBvcGVuSG91cnNEaXYuYXBwZW5kKGNsb2NrSWNvbik7XHJcbiAgb3BlbkhvdXJzRGl2LmFwcGVuZChvcGVuSG91cnMpO1xyXG5cclxuICB3cmFwcGVyLmFwcGVuZChhZGRyZXNzRGl2KTtcclxuICB3cmFwcGVyLmFwcGVuZChvcGVuSG91cnNEaXYpO1xyXG4gIGNvbnRhY3RJbmZvRGl2LmFwcGVuZCh3cmFwcGVyKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3RJbmZvRGl2O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSG9tZVNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBjb25zdCBjb250YWN0SW5mbyA9IGNyZWF0ZUNvbnRhY3RJbmZvKCk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGhvbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJob21lLXNlY3Rpb25cIik7XHJcbiAgcC5jbGFzc0xpc3QuYWRkKFwic3VidGl0bGVcIik7XHJcblxyXG4gIGgxLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIG91ciBjYWZlIVwiO1xyXG4gIHAudGV4dENvbnRlbnQgPSBcIkRyaW5rcyBjcmFmdGVkIHdpdGggb3JnYW5pYyBpbmdyZWRpZW50cy4gTm8gYXJ0aWZpY2lhbCBjb2xvdXJpbmcgb3IgZmxhdm91cnMuXCI7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQoaDEpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQocCk7XHJcbiAgY29udGFpbmVyLmFwcGVuZChjb250YWN0SW5mbyk7XHJcbiAgaG9tZVNlY3Rpb24uYXBwZW5kKGNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBob21lU2VjdGlvbjtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGNvbnN0IGhvbWVTZWN0aW9uID0gY3JlYXRlSG9tZVNlY3Rpb24oKTtcclxuXHJcbiAgbWFpbi5hcHBlbmQoaG9tZVNlY3Rpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWVQYWdlO1xyXG4iLCJjb25zdCBjcmVhdGVNZW51SXRlbXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ3JlZW5UZWFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGJsYWNrVGVhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBlYXJsR3JleVRlYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbWlsa1RlYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGdyZWVuVGVhRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgYmxhY2tUZWFEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuICBlYXJsR3JleVRlYURpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gIG1pbGtUZWFEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuXHJcbiAgY29uc3QgZ3JlZW5UZWFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGJsYWNrVGVhSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBlYXJsR3JleVRlYUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgbWlsa1RlYUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblxyXG4gIGdyZWVuVGVhSW1nLnNyYyA9IFwiaW1hZ2VzL2dyZWVuLXRlYS5qcGdcIjtcclxuICBncmVlblRlYUltZy5hbHQgPSBcIkdyZWVuIFRlYVwiO1xyXG4gIGJsYWNrVGVhSW1nLnNyYyA9IFwiaW1hZ2VzL2JsYWNrLXRlYS5qcGdcIjtcclxuICBibGFja1RlYUltZy5hbHQgPSBcIkJsYWNrIFRlYVwiO1xyXG4gIGVhcmxHcmV5VGVhSW1nLnNyYyA9IFwiaW1hZ2VzL2VhcmwtZ3JleS10ZWEuanBnXCI7XHJcbiAgZWFybEdyZXlUZWFJbWcuYWx0ID0gXCJFYXJsIEdyZXkgVGVhXCI7XHJcbiAgbWlsa1RlYUltZy5zcmMgPSBcImltYWdlcy9taWxrLXRlYS5qcGdcIjtcclxuICBtaWxrVGVhSW1nLmFsdCA9IFwiTWlsayBUZWFcIjtcclxuXHJcbiAgY29uc3QgZ3JlZW5UZWFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGJsYWNrVGVhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBlYXJsR3JleVRlYVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgbWlsa1RlYVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gIGdyZWVuVGVhVGl0bGUudGV4dENvbnRlbnQgPSBcIkdyZWVuIFRlYVwiO1xyXG4gIGJsYWNrVGVhVGl0bGUudGV4dENvbnRlbnQgPSBcIkJsYWNrIFRlYVwiO1xyXG4gIGVhcmxHcmV5VGVhVGl0bGUudGV4dENvbnRlbnQgPSBcIkVhcmwgR3JleSBUZWFcIjtcclxuICBtaWxrVGVhVGl0bGUudGV4dENvbnRlbnQgPSBcIk1pbGsgVGVhXCI7XHJcblxyXG4gIGNvbnN0IGdyZWVuVGVhUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBibGFja1RlYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgZWFybEdyZXlUZWFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IG1pbGtUZWFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICBncmVlblRlYVByaWNlLnRleHRDb250ZW50ID0gXCIkMTBcIjtcclxuICBibGFja1RlYVByaWNlLnRleHRDb250ZW50ID0gXCIkMTBcIjtcclxuICBlYXJsR3JleVRlYVByaWNlLnRleHRDb250ZW50ID0gXCIkMTBcIjtcclxuICBtaWxrVGVhUHJpY2UudGV4dENvbnRlbnQgPSBcIiQxMFwiO1xyXG5cclxuICBncmVlblRlYURpdi5hcHBlbmQoZ3JlZW5UZWFJbWcpO1xyXG4gIGdyZWVuVGVhRGl2LmFwcGVuZChncmVlblRlYVRpdGxlKTtcclxuICBncmVlblRlYURpdi5hcHBlbmQoZ3JlZW5UZWFQcmljZSk7XHJcblxyXG4gIGJsYWNrVGVhRGl2LmFwcGVuZChibGFja1RlYUltZyk7XHJcbiAgYmxhY2tUZWFEaXYuYXBwZW5kKGJsYWNrVGVhVGl0bGUpO1xyXG4gIGJsYWNrVGVhRGl2LmFwcGVuZChibGFja1RlYVByaWNlKTtcclxuXHJcbiAgZWFybEdyZXlUZWFEaXYuYXBwZW5kKGVhcmxHcmV5VGVhSW1nKTtcclxuICBlYXJsR3JleVRlYURpdi5hcHBlbmQoZWFybEdyZXlUZWFUaXRsZSk7XHJcbiAgZWFybEdyZXlUZWFEaXYuYXBwZW5kKGVhcmxHcmV5VGVhUHJpY2UpO1xyXG5cclxuICBtaWxrVGVhRGl2LmFwcGVuZChtaWxrVGVhSW1nKTtcclxuICBtaWxrVGVhRGl2LmFwcGVuZChtaWxrVGVhVGl0bGUpO1xyXG4gIG1pbGtUZWFEaXYuYXBwZW5kKG1pbGtUZWFQcmljZSk7XHJcblxyXG4gIHJldHVybiBbZ3JlZW5UZWFEaXYsIGJsYWNrVGVhRGl2LCBlYXJsR3JleVRlYURpdiwgbWlsa1RlYURpdl07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNZW51Q2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBtZW51Q2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gY3JlYXRlTWVudUl0ZW1zKCk7XHJcblxyXG4gIG1lbnVDYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XHJcblxyXG4gIG1lbnVDYXJkRGl2LmFwcGVuZChtZW51SXRlbXNbMF0pO1xyXG4gIG1lbnVDYXJkRGl2LmFwcGVuZChtZW51SXRlbXNbMV0pO1xyXG4gIG1lbnVDYXJkRGl2LmFwcGVuZChtZW51SXRlbXNbMl0pO1xyXG4gIG1lbnVDYXJkRGl2LmFwcGVuZChtZW51SXRlbXNbM10pO1xyXG5cclxuICByZXR1cm4gbWVudUNhcmREaXY7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNZW51U2VjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGNvbnN0IG1lbnVDYXJkID0gY3JlYXRlTWVudUNhcmQoKTtcclxuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcblxyXG4gIG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LXNlY3Rpb25cIik7XHJcblxyXG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cclxuICBtZW51U2VjdGlvbi5hcHBlbmQobWVudVRpdGxlKTtcclxuICBtZW51U2VjdGlvbi5hcHBlbmQobWVudUNhcmQpO1xyXG5cclxuICByZXR1cm4gbWVudVNlY3Rpb247XHJcbn07XHJcblxyXG5jb25zdCBsb2FkTWVudVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBjb25zdCBtZW51U2VjdGlvbiA9IGNyZWF0ZU1lbnVTZWN0aW9uKCk7XHJcblxyXG4gIG1haW4uYXBwZW5kKG1lbnVTZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51UGFnZTtcclxuIiwiaW1wb3J0IGxvYWRIb21lUGFnZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBsb2FkTWVudVBhZ2UgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgbG9hZENvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUhhbWJ1cmdlck1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGFtYnVyZ2VyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBoYW1idXJnZXJCdG4uY2xhc3NMaXN0LmFkZChcImJ1cmdlci1idG5cIik7XHJcbiAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyLW1lbnVcIik7XHJcblxyXG4gIGhhbWJ1cmdlckJ0bi5hcHBlbmQoaGFtYnVyZ2VyTWVudSk7XHJcblxyXG4gIHJldHVybiBoYW1idXJnZXJCdG47XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICBjb25zdCBjb21wYW55TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29tcGFueVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBjb21wYW55U2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGNyZWF0ZUhhbWJ1cmdlck1lbnUoKTtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcbiAgY29tcGFueVRleHQudGV4dENvbnRlbnQgPSBcIkphY2sncyBDYWZlXCI7XHJcbiAgY29tcGFueVNsb2dhbi50ZXh0Q29udGVudCA9IFwiT25lIHNpcCBhdCBhIHRpbWVcIjtcclxuICBob21lVGFiLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgbWVudVRhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gIGNvbnRhY3RUYWIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuXHJcbiAgY29tcGFueUxvZ28uY2xhc3NMaXN0LmFkZChcImNvbXBhbnktbG9nb1wiKTtcclxuICBjb21wYW55VGV4dC5jbGFzc0xpc3QuYWRkKFwiY29tcGFueS10ZXh0XCIpO1xyXG4gIGNvbXBhbnlTbG9nYW4uY2xhc3NMaXN0LmFkZChcImNvbXBhbnktc2xvZ2FuXCIpO1xyXG4gIGhvbWVUYWIuY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XHJcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvblwiKTtcclxuICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xyXG5cclxuICBsZXQgbWVudU9wZW4gPSBmYWxzZTtcclxuXHJcbiAgaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCFtZW51T3Blbikge1xyXG4gICAgICBoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICB1bC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgbWVudU9wZW4gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgIG1lbnVPcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoID4gNzgwKSB7XHJcbiAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgODAwKSB7XHJcbiAgICAgIGlmIChoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpIHtcclxuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgc2V0QWN0aXZlQnV0dG9uKGhvbWVUYWIpO1xyXG4gICAgbG9hZEhvbWVQYWdlKCk7XHJcbiAgfSk7XHJcblxyXG4gIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XHJcbiAgICBzZXRBY3RpdmVCdXR0b24obWVudVRhYik7XHJcbiAgICBsb2FkTWVudVBhZ2UoKTtcclxuICB9KTtcclxuXHJcbiAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0VGFiKTtcclxuICAgIGxvYWRDb250YWN0UGFnZSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb21wYW55TG9nby5hcHBlbmQoY29tcGFueVRleHQpO1xyXG4gIGNvbXBhbnlMb2dvLmFwcGVuZChjb21wYW55U2xvZ2FuKTtcclxuICB1bC5hcHBlbmQoaG9tZVRhYik7XHJcbiAgdWwuYXBwZW5kKG1lbnVUYWIpO1xyXG4gIHVsLmFwcGVuZChjb250YWN0VGFiKTtcclxuICBuYXYuYXBwZW5kKGNvbXBhbnlMb2dvKTtcclxuICBuYXYuYXBwZW5kKGhhbWJ1cmdlck1lbnUpO1xyXG4gIG5hdi5hcHBlbmQodWwpO1xyXG5cclxuICByZXR1cm4gbmF2O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuYXYgPSBjcmVhdGVOYXYoKTtcclxuXHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQobmF2KTtcclxuICBoZWFkZXIuYXBwZW5kKGNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsaXplV2Vic2l0ZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuICBtYWluLmlkID0gXCJtYWluXCI7XHJcblxyXG4gIGNvbnRlbnREaXYuYXBwZW5kKGhlYWRlcik7XHJcbiAgY29udGVudERpdi5hcHBlbmQobWFpbik7XHJcbiAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJ1dHRvblwiKSk7XHJcbiAgbG9hZEhvbWVQYWdlKCk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRBY3RpdmVCdXR0b24gPSAoYnV0dG9uKSA9PiB7XHJcbiAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJ1dHRvblwiKTtcclxuXHJcbiAgbmF2QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi93ZWJzaXRlXCI7XHJcblxyXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=