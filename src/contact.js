const createContactLinks = () => {
  const addressLink = document.createElement("div");
  const address = document.createElement("p");
  const addressIcon = document.createElement("img");
  const telephoneLink = document.createElement("div");
  const telephone = document.createElement("p");
  const telephoneIcon = document.createElement("img");
  const openHoursLink = document.createElement("div");
  const openHours = document.createElement("p");
  const clockIcon = document.createElement("img");

  addressLink.classList.add("contact-link");

  address.textContent = "163 King St E \r\n";
  address.textContent += "Toronto, ON M5A 1J4";

  addressIcon.src = "images/location-icon.png";

  addressLink.append(addressIcon);
  addressLink.append(address);

  openHoursLink.classList.add("contact-link");

  openHours.textContent = "Mon - Thurs: 11am - 9pm \r\n";
  openHours.textContent += "Fri - Sun: 11am - 8pm";

  clockIcon.src = "images/clock-icon.png";

  openHoursLink.append(clockIcon);
  openHoursLink.append(openHours);

  telephoneLink.classList.add("contact-link");

  telephone.textContent = "(123)-456-789";

  telephoneIcon.src = "images/telephone-icon.png";

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

export default loadContactPage;
