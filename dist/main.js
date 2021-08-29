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
      if (ul.classList.contains("show")) {
        ul.classList.remove("show");
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEcvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2RTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHTTtBQUNBO0FBQ007QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFZO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQVk7QUFDaEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBZTtBQUNuQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOENBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7OztVQ3RJakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQztBQUMxQztBQUNBLGlEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVDb250YWN0TGlua3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkcmVzc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBhZGRyZXNzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gIGNvbnN0IG9wZW5Ib3Vyc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGNsb2NrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gIGNvbnN0IHRlbGVwaG9uZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRlbGVwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IHRlbGVwaG9uZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuXHJcbiAgYWRkcmVzc0xpbmsuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbGlua1wiKTtcclxuXHJcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTYzIEtpbmcgU3QgRSBcXHJcXG5cIjtcclxuICBhZGRyZXNzLnRleHRDb250ZW50ICs9IFwiVG9yb250bywgT04gTTVBIDFKNFwiO1xyXG5cclxuICBhZGRyZXNzSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIpO1xyXG4gIGFkZHJlc3NJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1tYXAtbWFya2VyLWFsdFwiKTtcclxuXHJcbiAgYWRkcmVzc0xpbmsuYXBwZW5kKGFkZHJlc3NJY29uKTtcclxuICBhZGRyZXNzTGluay5hcHBlbmQoYWRkcmVzcyk7XHJcblxyXG4gIG9wZW5Ib3Vyc0xpbmsuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbGlua1wiKTtcclxuXHJcbiAgb3BlbkhvdXJzLnRleHRDb250ZW50ID0gXCJNb24gLSBUaHVyczogMTFhbSAtIDlwbSBcXHJcXG5cIjtcclxuICBvcGVuSG91cnMudGV4dENvbnRlbnQgKz0gXCJGcmkgLSBTdW46IDExYW0gLSA4cG1cIjtcclxuXHJcbiAgY2xvY2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIik7XHJcbiAgY2xvY2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1jbG9ja1wiKTtcclxuXHJcbiAgb3BlbkhvdXJzTGluay5hcHBlbmQoY2xvY2tJY29uKTtcclxuICBvcGVuSG91cnNMaW5rLmFwcGVuZChvcGVuSG91cnMpO1xyXG5cclxuICB0ZWxlcGhvbmVMaW5rLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWxpbmtcIik7XHJcblxyXG4gIHRlbGVwaG9uZS50ZXh0Q29udGVudCA9IFwiKDEyMyktNDU2LTc4OVwiO1xyXG5cclxuICB0ZWxlcGhvbmVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIik7XHJcbiAgdGVsZXBob25lSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtcGhvbmUtYWx0XCIpO1xyXG5cclxuICB0ZWxlcGhvbmVMaW5rLmFwcGVuZCh0ZWxlcGhvbmVJY29uKTtcclxuICB0ZWxlcGhvbmVMaW5rLmFwcGVuZCh0ZWxlcGhvbmUpO1xyXG5cclxuICByZXR1cm4gW2FkZHJlc3NMaW5rLCBvcGVuSG91cnNMaW5rLCB0ZWxlcGhvbmVMaW5rXTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRhY3RUZXh0RGl2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhY3RUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb250YWN0TGlua3MgPSBjcmVhdGVDb250YWN0TGlua3MoKTtcclxuXHJcbiAgY29udGFjdFRleHREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtdGV4dC1jb250YWluZXJcIik7XHJcblxyXG4gIGNvbnRhY3RUZXh0RGl2LmFwcGVuZChjb250YWN0TGlua3NbMF0pO1xyXG4gIGNvbnRhY3RUZXh0RGl2LmFwcGVuZChjb250YWN0TGlua3NbMV0pO1xyXG4gIGNvbnRhY3RUZXh0RGl2LmFwcGVuZChjb250YWN0TGlua3NbMl0pO1xyXG5cclxuICByZXR1cm4gY29udGFjdFRleHREaXY7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVDb250YWN0Q2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29udGFjdFRleHREaXYgPSBjcmVhdGVDb250YWN0VGV4dERpdigpO1xyXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcblxyXG4gIGNvbnRhY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNhcmRcIik7XHJcbiAgbWFwLmNsYXNzTGlzdC5hZGQoXCJtYXBcIik7XHJcblxyXG4gIG1hcC5zcmMgPVxyXG4gICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxMTU0OC43ODQxODEwODA5MTUhMmQtNzkuMzgyNzc5NDcyNzYyNyEzZDQzLjY0NDA4OTM4MTc5NjQyITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4OWQ0Y2JjYWJjYzMwMzMxJTNBMHhhMWFhNDBhMGRjYjQ3ZWQhMnNDaGF0aW1lITVlMCEzbTIhMXNlbiEyc2NhITR2MTYzMDE0NTU5ODgyMiE1bTIhMXNlbiEyc2NhXCI7XHJcbiAgbWFwLndpZHRoID0gXCI2MDBcIjtcclxuICBtYXAuaGVpZ2h0ID0gXCI0NTBcIjtcclxuICBtYXAudGFiSW5kZXggPSBcIjBcIjtcclxuXHJcbiAgY29udGFjdENhcmQuYXBwZW5kKGNvbnRhY3RUZXh0RGl2KTtcclxuICBjb250YWN0Q2FyZC5hcHBlbmQobWFwKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3RDYXJkO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlQ29udGFjdFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBjb25zdCBjb250YWN0Q2FyZCA9IGNyZWF0ZUNvbnRhY3RDYXJkKCk7XHJcbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG5cclxuICBjb250YWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1zZWN0aW9uXCIpO1xyXG5cclxuICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcclxuXHJcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kKGNvbnRhY3RUaXRsZSk7XHJcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kKGNvbnRhY3RDYXJkKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgbG9hZENvbnRhY3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBjcmVhdGVDb250YWN0U2VjdGlvbigpO1xyXG5cclxuICBtYWluLmFwcGVuZChjb250YWN0U2VjdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdFBhZ2U7XHJcbiIsImNvbnN0IGNyZWF0ZUNvbnRhY3RJbmZvID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhY3RJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBhZGRyZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgYWRkcmVzc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICBjb25zdCBvcGVuSG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG9wZW5Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGNsb2NrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xyXG4gIGNvbnRhY3RJbmZvRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm8tY29udGFpbmVyXCIpO1xyXG4gIGFkZHJlc3NEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbGlua1wiKTtcclxuXHJcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTYzIEtpbmcgU3QgRSBcXHJcXG5cIjtcclxuICBhZGRyZXNzLnRleHRDb250ZW50ICs9IFwiVG9yb250bywgT04gTTVBIDFKNFwiO1xyXG5cclxuICBhZGRyZXNzSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIpO1xyXG4gIGFkZHJlc3NJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1tYXAtbWFya2VyLWFsdFwiKTtcclxuXHJcbiAgYWRkcmVzc0Rpdi5hcHBlbmQoYWRkcmVzc0ljb24pO1xyXG4gIGFkZHJlc3NEaXYuYXBwZW5kKGFkZHJlc3MpO1xyXG5cclxuICBvcGVuSG91cnNEaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbGlua1wiKTtcclxuXHJcbiAgb3BlbkhvdXJzLnRleHRDb250ZW50ID0gXCJNb24gLSBUaHVyczogMTFhbSAtIDlwbSBcXHJcXG5cIjtcclxuICBvcGVuSG91cnMudGV4dENvbnRlbnQgKz0gXCJGcmkgLSBTdW46IDExYW0gLSA4cG1cIjtcclxuXHJcbiAgY2xvY2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYXNcIik7XHJcbiAgY2xvY2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1jbG9ja1wiKTtcclxuXHJcbiAgb3BlbkhvdXJzRGl2LmFwcGVuZChjbG9ja0ljb24pO1xyXG4gIG9wZW5Ib3Vyc0Rpdi5hcHBlbmQob3BlbkhvdXJzKTtcclxuXHJcbiAgd3JhcHBlci5hcHBlbmQoYWRkcmVzc0Rpdik7XHJcbiAgd3JhcHBlci5hcHBlbmQob3BlbkhvdXJzRGl2KTtcclxuICBjb250YWN0SW5mb0Rpdi5hcHBlbmQod3JhcHBlcik7XHJcblxyXG4gIHJldHVybiBjb250YWN0SW5mb0RpdjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUhvbWVTZWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgY29uc3QgY29udGFjdEluZm8gPSBjcmVhdGVDb250YWN0SW5mbygpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuICBob21lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1zZWN0aW9uXCIpO1xyXG4gIHAuY2xhc3NMaXN0LmFkZChcInN1YnRpdGxlXCIpO1xyXG5cclxuICBoMS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBvdXIgY2FmZSFcIjtcclxuICBwLnRleHRDb250ZW50ID0gXCJEcmlua3MgY3JhZnRlZCB3aXRoIG9yZ2FuaWMgaW5ncmVkaWVudHMuIE5vIGFydGlmaWNpYWwgY29sb3VyaW5nIG9yIGZsYXZvdXJzLlwiO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGgxKTtcclxuICBjb250YWluZXIuYXBwZW5kKHApO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQoY29udGFjdEluZm8pO1xyXG4gIGhvbWVTZWN0aW9uLmFwcGVuZChjb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gaG9tZVNlY3Rpb247XHJcbn07XHJcblxyXG5jb25zdCBsb2FkSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBjb25zdCBob21lU2VjdGlvbiA9IGNyZWF0ZUhvbWVTZWN0aW9uKCk7XHJcblxyXG4gIG1haW4uYXBwZW5kKGhvbWVTZWN0aW9uKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lUGFnZTtcclxuIiwiY29uc3QgY3JlYXRlTWVudUl0ZW1zID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdyZWVuVGVhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBibGFja1RlYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZWFybEdyZXlUZWFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG1pbGtUZWFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBncmVlblRlYURpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gIGJsYWNrVGVhRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgZWFybEdyZXlUZWFEaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuICBtaWxrVGVhRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcblxyXG4gIGNvbnN0IGdyZWVuVGVhSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBibGFja1RlYUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgZWFybEdyZXlUZWFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IG1pbGtUZWFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICBncmVlblRlYUltZy5zcmMgPSBcImltYWdlcy9ncmVlbi10ZWEuanBnXCI7XHJcbiAgZ3JlZW5UZWFJbWcuYWx0ID0gXCJHcmVlbiBUZWFcIjtcclxuICBibGFja1RlYUltZy5zcmMgPSBcImltYWdlcy9ibGFjay10ZWEuanBnXCI7XHJcbiAgYmxhY2tUZWFJbWcuYWx0ID0gXCJCbGFjayBUZWFcIjtcclxuICBlYXJsR3JleVRlYUltZy5zcmMgPSBcImltYWdlcy9lYXJsLWdyZXktdGVhLmpwZ1wiO1xyXG4gIGVhcmxHcmV5VGVhSW1nLmFsdCA9IFwiRWFybCBHcmV5IFRlYVwiO1xyXG4gIG1pbGtUZWFJbWcuc3JjID0gXCJpbWFnZXMvbWlsay10ZWEuanBnXCI7XHJcbiAgbWlsa1RlYUltZy5hbHQgPSBcIk1pbGsgVGVhXCI7XHJcblxyXG4gIGNvbnN0IGdyZWVuVGVhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBibGFja1RlYVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgZWFybEdyZXlUZWFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IG1pbGtUZWFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICBncmVlblRlYVRpdGxlLnRleHRDb250ZW50ID0gXCJHcmVlbiBUZWFcIjtcclxuICBibGFja1RlYVRpdGxlLnRleHRDb250ZW50ID0gXCJCbGFjayBUZWFcIjtcclxuICBlYXJsR3JleVRlYVRpdGxlLnRleHRDb250ZW50ID0gXCJFYXJsIEdyZXkgVGVhXCI7XHJcbiAgbWlsa1RlYVRpdGxlLnRleHRDb250ZW50ID0gXCJNaWxrIFRlYVwiO1xyXG5cclxuICBjb25zdCBncmVlblRlYVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgYmxhY2tUZWFQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGVhcmxHcmV5VGVhUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBtaWxrVGVhUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgZ3JlZW5UZWFQcmljZS50ZXh0Q29udGVudCA9IFwiJDEwXCI7XHJcbiAgYmxhY2tUZWFQcmljZS50ZXh0Q29udGVudCA9IFwiJDEwXCI7XHJcbiAgZWFybEdyZXlUZWFQcmljZS50ZXh0Q29udGVudCA9IFwiJDEwXCI7XHJcbiAgbWlsa1RlYVByaWNlLnRleHRDb250ZW50ID0gXCIkMTBcIjtcclxuXHJcbiAgZ3JlZW5UZWFEaXYuYXBwZW5kKGdyZWVuVGVhSW1nKTtcclxuICBncmVlblRlYURpdi5hcHBlbmQoZ3JlZW5UZWFUaXRsZSk7XHJcbiAgZ3JlZW5UZWFEaXYuYXBwZW5kKGdyZWVuVGVhUHJpY2UpO1xyXG5cclxuICBibGFja1RlYURpdi5hcHBlbmQoYmxhY2tUZWFJbWcpO1xyXG4gIGJsYWNrVGVhRGl2LmFwcGVuZChibGFja1RlYVRpdGxlKTtcclxuICBibGFja1RlYURpdi5hcHBlbmQoYmxhY2tUZWFQcmljZSk7XHJcblxyXG4gIGVhcmxHcmV5VGVhRGl2LmFwcGVuZChlYXJsR3JleVRlYUltZyk7XHJcbiAgZWFybEdyZXlUZWFEaXYuYXBwZW5kKGVhcmxHcmV5VGVhVGl0bGUpO1xyXG4gIGVhcmxHcmV5VGVhRGl2LmFwcGVuZChlYXJsR3JleVRlYVByaWNlKTtcclxuXHJcbiAgbWlsa1RlYURpdi5hcHBlbmQobWlsa1RlYUltZyk7XHJcbiAgbWlsa1RlYURpdi5hcHBlbmQobWlsa1RlYVRpdGxlKTtcclxuICBtaWxrVGVhRGl2LmFwcGVuZChtaWxrVGVhUHJpY2UpO1xyXG5cclxuICByZXR1cm4gW2dyZWVuVGVhRGl2LCBibGFja1RlYURpdiwgZWFybEdyZXlUZWFEaXYsIG1pbGtUZWFEaXZdO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTWVudUNhcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVudUNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGNyZWF0ZU1lbnVJdGVtcygpO1xyXG5cclxuICBtZW51Q2FyZERpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXJkXCIpO1xyXG5cclxuICBtZW51Q2FyZERpdi5hcHBlbmQobWVudUl0ZW1zWzBdKTtcclxuICBtZW51Q2FyZERpdi5hcHBlbmQobWVudUl0ZW1zWzFdKTtcclxuICBtZW51Q2FyZERpdi5hcHBlbmQobWVudUl0ZW1zWzJdKTtcclxuICBtZW51Q2FyZERpdi5hcHBlbmQobWVudUl0ZW1zWzNdKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVDYXJkRGl2O1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTWVudVNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBjb25zdCBtZW51Q2FyZCA9IGNyZWF0ZU1lbnVDYXJkKCk7XHJcbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG5cclxuICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWN0aW9uXCIpO1xyXG5cclxuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuXHJcbiAgbWVudVNlY3Rpb24uYXBwZW5kKG1lbnVUaXRsZSk7XHJcbiAgbWVudVNlY3Rpb24uYXBwZW5kKG1lbnVDYXJkKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVTZWN0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgbG9hZE1lbnVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgY29uc3QgbWVudVNlY3Rpb24gPSBjcmVhdGVNZW51U2VjdGlvbigpO1xyXG5cclxuICBtYWluLmFwcGVuZChtZW51U2VjdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudVBhZ2U7XHJcbiIsImltcG9ydCBsb2FkSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG5jb25zdCBjcmVhdGVIYW1idXJnZXJNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhhbWJ1cmdlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGFtYnVyZ2VyQnRuLmNsYXNzTGlzdC5hZGQoXCJidXJnZXItYnRuXCIpO1xyXG4gIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZChcImJ1cmdlci1tZW51XCIpO1xyXG5cclxuICBoYW1idXJnZXJCdG4uYXBwZW5kKGhhbWJ1cmdlck1lbnUpO1xyXG5cclxuICByZXR1cm4gaGFtYnVyZ2VyQnRuO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgY29uc3QgY29tcGFueUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNvbXBhbnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgY29tcGFueVNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGhhbWJ1cmdlck1lbnUgPSBjcmVhdGVIYW1idXJnZXJNZW51KCk7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gIGNvbXBhbnlUZXh0LnRleHRDb250ZW50ID0gXCJKYWNrJ3MgQ2FmZVwiO1xyXG4gIGNvbXBhbnlTbG9nYW4udGV4dENvbnRlbnQgPSBcIk9uZSBzaXAgYXQgYSB0aW1lXCI7XHJcbiAgaG9tZVRhYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gIG1lbnVUYWIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gIGNvbXBhbnlMb2dvLmNsYXNzTGlzdC5hZGQoXCJjb21wYW55LWxvZ29cIik7XHJcbiAgY29tcGFueVRleHQuY2xhc3NMaXN0LmFkZChcImNvbXBhbnktdGV4dFwiKTtcclxuICBjb21wYW55U2xvZ2FuLmNsYXNzTGlzdC5hZGQoXCJjb21wYW55LXNsb2dhblwiKTtcclxuICBob21lVGFiLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xyXG4gIG1lbnVUYWIuY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XHJcbiAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvblwiKTtcclxuXHJcbiAgbGV0IG1lbnVPcGVuID0gZmFsc2U7XHJcblxyXG4gIGhhbWJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICghbWVudU9wZW4pIHtcclxuICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgdWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgIG1lbnVPcGVuID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICBtZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+IDc4MCkge1xyXG4gICAgICBpZiAodWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSkge1xyXG4gICAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCA4MDApIHtcclxuICAgICAgaWYgKGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkge1xyXG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XHJcbiAgICBzZXRBY3RpdmVCdXR0b24oaG9tZVRhYik7XHJcbiAgICBsb2FkSG9tZVBhZ2UoKTtcclxuICB9KTtcclxuXHJcbiAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51VGFiKTtcclxuICAgIGxvYWRNZW51UGFnZSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RUYWIpO1xyXG4gICAgbG9hZENvbnRhY3RQYWdlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbXBhbnlMb2dvLmFwcGVuZChjb21wYW55VGV4dCk7XHJcbiAgY29tcGFueUxvZ28uYXBwZW5kKGNvbXBhbnlTbG9nYW4pO1xyXG4gIHVsLmFwcGVuZChob21lVGFiKTtcclxuICB1bC5hcHBlbmQobWVudVRhYik7XHJcbiAgdWwuYXBwZW5kKGNvbnRhY3RUYWIpO1xyXG4gIG5hdi5hcHBlbmQoY29tcGFueUxvZ28pO1xyXG4gIG5hdi5hcHBlbmQoaGFtYnVyZ2VyTWVudSk7XHJcbiAgbmF2LmFwcGVuZCh1bCk7XHJcblxyXG4gIHJldHVybiBuYXY7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG5hdiA9IGNyZWF0ZU5hdigpO1xyXG5cclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChuYXYpO1xyXG4gIGhlYWRlci5hcHBlbmQoY29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxpemVXZWJzaXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG4gIG1haW4uaWQgPSBcIm1haW5cIjtcclxuXHJcbiAgY29udGVudERpdi5hcHBlbmQoaGVhZGVyKTtcclxuICBjb250ZW50RGl2LmFwcGVuZChtYWluKTtcclxuICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYnV0dG9uXCIpKTtcclxuICBsb2FkSG9tZVBhZ2UoKTtcclxufTtcclxuXHJcbmNvbnN0IHNldEFjdGl2ZUJ1dHRvbiA9IChidXR0b24pID0+IHtcclxuICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnV0dG9uXCIpO1xyXG5cclxuICBuYXZCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGVcIjtcclxuXHJcbmluaXRpYWxpemVXZWJzaXRlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==