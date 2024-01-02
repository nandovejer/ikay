import ikayBrowser from "./ikay/ikayBrowser.js";
import ikayGPU from "./ikay/ikayGPU.js";
import ikayLang from "./ikay/ikayLang.js";
import ikayOrientation from "./ikay/ikayOrientation.js";
import ikayPlugins from "./ikay/ikayPlugins.js";
import ikayRam from "./ikay/ikayRam.js";
import ikayCPU from "./ikay/ikayCPU.js";
import ikayOnline from "./ikay/ikayOnline.js";
import ikayTracking from "./ikay/ikayTracking.js";


function domReady() {
  console.log("*** ikayBrowser ***");
  console.table(ikayBrowser());
  console.log("** ikayGPU ****");
  console.table(ikayGPU());
  console.log("** ikayLang ****");
  console.table(ikayLang());
  console.log("** ikayOrientation ****");
  console.table(ikayOrientation());
  console.log("** ikayPlugins ****");
  console.table(ikayPlugins());
  console.log("** ikayRam ****");
  console.table(ikayRam());
  console.log("** ikayCPU ****");
  console.table(ikayCPU());
  console.log("** ikayOnline ****");
  console.table(ikayOnline());
  console.log("** ikayTracking ****");
  console.table(ikayTracking());
  
  
}
document.addEventListener("DOMContentLoaded", domReady);
