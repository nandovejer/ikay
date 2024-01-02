import ikayBrowser from "./ikay/ikayBrowser.js";
import ikayGPU from "./ikay/ikayGPU.js";
import ikayLang from "./ikay/ikayLang.js";

function domReady() {
  console.log("*** ikayBrowser ***");
  console.table(ikayBrowser());
  console.log("** ikayGPU ****");
  console.table(ikayGPU());
  console.log("** ikayLang ****");
  console.table(ikayLang());
  
}
document.addEventListener("DOMContentLoaded", domReady);
