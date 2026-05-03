export function loadContact(div_content){
  // first remove the index div_content
  while (div_content.firstChild) {
    div_content.removeChild(div_content.firstChild);
  }

  const contact = document.createElement("div");
  contact.classList.add("glass_card", "contact-card");

  const title = document.createElement("h1");
  title.textContent = "Contact us";

 // Adresse
  const adresse = document.createElement("p");
  adresse.textContent = "📍 12 rue du Samouraï, 75001 Paris";

  // Téléphone
  const tel = document.createElement("p");
  tel.textContent = "📞 +33 1 23 45 67 89";

  // Email
  const email = document.createElement("p");
  email.textContent = "✉️ contact@saenchai.fr";
  // Horaires
  const horaires_title = document.createElement("h2");
  horaires_title.textContent = "Opening hours";

  const horaires = document.createElement("p");
  horaires.textContent = "Mon - Fri : 12h00 - 14h30 | 19h00 - 22h30";

  const horaires_we = document.createElement("p");
  horaires_we.textContent = "Sat - Sun : 12h00 - 23h00";

  contact.appendChild(title);
  contact.appendChild(adresse);
  contact.appendChild(tel);
  contact.appendChild(email);
  contact.appendChild(horaires_title);
  contact.appendChild(horaires);
  contact.appendChild(horaires_we);

  div_content.appendChild(contact);
}
