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

export default loadHomePage;
