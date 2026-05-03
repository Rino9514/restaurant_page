export function loadHome(div_content){
  // first remove the index div_content
  while (div_content.firstChild) {
    div_content.removeChild(div_content.firstChild);
  }
  const home = document.createElement("div");
  home.classList.add("glass_card", "home-card");

  const title = document.createElement("h1");
  title.textContent = "Welcome at the SAENCHAI JAP RESTAURANT";

  const subtitle = document.createElement("p");
  subtitle.textContent = "Authentic Japanese cuisine in the heart of the city";

  home.appendChild(title);
  home.appendChild(subtitle);
  div_content.appendChild(home);
}
