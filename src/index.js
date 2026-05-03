import {loadHome} from "./home.js"
import {loadMenu} from "./menu.js"
import {loadContact} from "./contact.js"
import "./styles.css"

const index = (function(){
  const nav = document.querySelector("nav");
  const div_content = document.querySelector("div#content");

  const pages = {
    home: loadHome,
    menu: loadMenu,
    contact: loadContact,
  };

  ["menu", "home", "contact"].forEach((page) => {
    const btn = document.createElement("button")
    btn.textContent = page.charAt(0).toUpperCase() + page.slice(1);;
    btn.dataset.page = page;
    nav.appendChild(btn);
  });

  nav.addEventListener("click", (e)=> {
    const page = e.target.dataset.page;
    if (pages[page]) {
      pages[page](div_content);
    }
  })
  pages["home"](div_content);
})();

