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

  menuSection.classList.add("menu-section");
  menuSection.append(menuCard);

  return menuSection;
};

const loadMenuPage = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  const menuSection = createMenuSection();

  main.append(menuSection);
};

export default loadMenuPage;
