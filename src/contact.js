export function loadContact(div_content){
  // first remove the index div_content
  while (div_content.firstChild) {
    div_content.removeChild(div_content.firstChild);
  }
}
