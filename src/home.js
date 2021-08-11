const createHomeSection = () => {
  const homeSection = document.createElement("section");
  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const img = document.createElement("img");

  container.classList.add("container");
  homeSection.classList.add("home-section");
  img.src = "images/tea.jpg";
  img.alt = "Cup of tea";

  h1.textContent = "Tea Shop";
  p.textContent = "Crafted with wholesome organic ingredients. No artificial colouring or flavours.";

  container.append(h1);
  container.append(p);
  homeSection.append(img);
  homeSection.append(container);

  return homeSection;
};

const loadHomePage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  const homeSection = createHomeSection();

  main.append(homeSection);
};

export default loadHomePage;
