import loadHomePage from "./home";
import loadMenuPage from "./menu";

const createNav = () => {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const homeTab = document.createElement("li");
  const menuTab = document.createElement("li");
  const contactTab = document.createElement("li");

  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";
  contactTab.textContent = "Contact";
  homeTab.classList.add("nav-button");
  menuTab.classList.add("nav-button");
  contactTab.classList.add("nav-button");

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
    // loadMenuPage();
  });

  ul.append(homeTab);
  ul.append(menuTab);
  ul.append(contactTab);
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
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
};

export default initializeWebsite;
