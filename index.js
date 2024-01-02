import ikayBrowser from "./ikay/ikayBrowser.js";

function domReady() {
  console.log("domReady");

  console.table(  ikayBrowser() );
}
document.addEventListener("DOMContentLoaded", domReady);
