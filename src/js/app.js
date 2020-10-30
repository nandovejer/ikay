// # CSS
import "../scss/app.scss";

// # JS

// ## JS - Global Modules and Webpai Modules
import navMenu from "./modules/navMenu";
import card from "./modules/card";
import sharetime from "./modules/sharetime";
import webapi from "./wepapi/webapi";
import prepareHTML from "./modules/prepareHTML";

// Init
document.addEventListener("DOMContentLoaded", () => {
  prepareHTML.init(() => {
    document.getElementById("nojs").remove();
    navMenu.init();
    card.init();
    webapi.init();
    sharetime.init();
  });
});
