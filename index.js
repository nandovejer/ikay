import ikayBrowser from "./ikay/ikayBrowser.js";
import ikayGPU from "./ikay/ikayGPU.js";

function domReady() {
  console.log("*** ikayBrowser ***");
  console.table(ikayBrowser());
  console.log("** ikayGPU ****");
  console.table(ikayGPU());
}
document.addEventListener("DOMContentLoaded", domReady);
