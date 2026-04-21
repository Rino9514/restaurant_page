import {loadHome} from "./home.js"
import "./styles.css"

const index = (function(){
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const div_content = document.querySelector("div#content");

  const button_menu = document.createElement("button");
  button_menu.textContent = "Menu";
  button_menu.dataset.page = "menu";
  const button_home = document.createElement("button");
  button_home.textContent = "Home";
  button_home.dataset.page = "home";
  const button_contact = document.createElement("button");
  button_contact.textContent = "Contact";
  button_contact.dataset.page = "contact";


  nav.appendChild(button_menu);
  nav.appendChild(button_home);
  nav.appendChild(button_contact);

})();

