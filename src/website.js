import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadContactPage from "./contact";

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
    loadHomePage();
  });

  menuTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuTab);
    loadMenuPage();
  });

  contactTab.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactTab);
    loadContactPage();
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
  loadHomePage();
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

export default initializeWebsite;
