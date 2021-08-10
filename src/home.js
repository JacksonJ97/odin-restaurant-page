const createMainDiv = () => {
  const main = document.createElement("main");
  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const img = document.createElement("img");

  container.classList.add("container");
  img.src = "images/tea.jpg";
  img.alt = "Cup of tea";

  h1.textContent = "Tea Shop";
  p.textContent = "Crafted with wholesome organic ingredients. No artificial colouring or flavours.";

  container.append(h1);
  container.append(p);
  main.append(img);
  main.append(container);

  return main;
};

const loadHomePage = () => {
  const contentDiv = document.getElementById("content");
  const main = createMainDiv();

  contentDiv.append(main);
};

export default loadHomePage;
