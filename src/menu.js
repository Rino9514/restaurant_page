import misoImg from "../assets/miso.jpg";
import ramenImg from "../assets/ramen.jpg";
import pouletImg from "../assets/poulet.jpg";
import sushiImg from "../assets/sushi.jpg";

export function loadMenu(div_content){
  // first remove the index div_content
  while (div_content.firstChild) {
    div_content.removeChild(div_content.firstChild);
  }

  const plats = [
    { nom: "Miso", prix: "12€", image: misoImg },
    { nom: "Ramen", prix: "10€", image: ramenImg },
    { nom: "Poulet", prix: "8€", image: pouletImg },
    { nom: "Sushi", prix: "5€", image: sushiImg },
  ];


  // add the main div
  const div_menu = document.createElement("div");
  div_menu.classList.add("menu-grid");

  div_content.appendChild(div_menu);

  // add sub div for plate
  plats.forEach((plat) => {
    const div = document.createElement("div");
    div.classList.add("plat-card");

    const img = document.createElement("img");
    img.src = plat.image;
    img.classList.add("plat-img");

    const titre = document.createElement("h2");
    titre.textContent = plat.nom;
    const prix = document.createElement("h3");
    prix.textContent = plat.prix;

  div.appendChild(img);
  div.appendChild(titre);
  div.appendChild(prix);
  div_menu.appendChild(div);
  });

}
