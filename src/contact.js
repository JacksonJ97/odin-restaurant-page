const createContactCard = () => {
  const contactCard = document.createElement("div");
  const telephone = document.createElement("p");
  const address = document.createElement("p");
  const map = document.createElement("img");

  contactCard.classList.add("contact-card");

  telephone.textContent = "123-456-789";
  address.textContent = "123 Hollywood Blvd";

  map.src = "images/map.jpg";
  map.alt = "Map";

  contactCard.append(telephone);
  contactCard.append(address);
  contactCard.append(map);

  return contactCard;
};

const createContactSection = () => {
  const contactSection = document.createElement("section");
  const contactCard = createContactCard();

  contactSection.classList.add("contact-section");

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
