const createHeader = () => {
  const header = document.createElement("header");
  const container = document.createElement("div");
  const nav = createNav();

  container.classList.add("container");

  container.append(nav);
  header.append(container);

  return header;
};

const createNav = () => {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const homeTab = document.createElement("li");
  const menuTab = document.createElement("li");
  const contactTab = document.createElement("li");

  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";
  contactTab.textContent = "Contact";

  ul.append(homeTab);
  ul.append(menuTab);
  ul.append(contactTab);
  nav.append(ul);

  return nav;
};

const loadHeader = () => {
  const contentDiv = document.getElementById("content");
  const header = createHeader();
  contentDiv.append(header);
};

export default loadHeader;
