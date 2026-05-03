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

  const menu = document.createElement("div");
  menu.classList.add("glass_card", "menu-card");

  const menu_grid = document.createElement("div");
  menu_grid.classList.add("menu-grid");

  const title = document.createElement("h1");
  title.textContent = "Our Menu";

  div_content.appendChild(menu);
  menu.appendChild(title);
  menu.appendChild(menu_grid);

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
  menu_grid.appendChild(div);
  });

}
