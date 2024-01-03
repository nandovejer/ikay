import ikayBrowser from "./ikay/ikayBrowser.js";
import ikayGPU from "./ikay/ikayGPU.js";
import ikayLang from "./ikay/ikayLang.js";
import ikayOrientation from "./ikay/ikayOrientation.js";
import ikayPlugins from "./ikay/ikayPlugins.js";
import ikayRam from "./ikay/ikayRam.js";
import ikayCPU from "./ikay/ikayCPU.js";
import ikayOnline from "./ikay/ikayOnline.js";
import ikayTracking from "./ikay/ikayTracking.js";
import ikayIsTouchDevice from "./ikay/ikayIsTouchDevice.js";
import ikayResolution from "./ikay/ikayResolution.js";
import ikayTime from "./ikay/ikayTime.js";
import ikaySpeed from "./ikay/ikaySpeed.js";
import ikayOs from "./ikay/ikayOs.js";
import ikayParser from "./ikay/ikayParser.js";
import ikayBattery from "./ikay/ikayBattery.js";
import ikayByIp from "./ikay/ikayByIp.js";


function domReady() {
  // CLIENT
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
  console.log("** ikayIsTouchDevice ****");
  console.table(ikayIsTouchDevice());
  console.log("** ikayResolution ****");
  console.table(ikayResolution());
  console.log("** ikayTime ****");
  console.table(ikayTime());
  console.log("** ikayOs ****");
  console.table(ikayOs());



  // PROMISES
  console.log("** ikaySpeed ****");
  console.table(ikaySpeed());
  console.log("** ikayBattery ****");
  ikayBattery(
    isCharging => console.log(`Is Charging: ${isCharging ? "Yes" : "No"}`),
    level => console.log(`Battery Level Changed: ${level * 100}%`),
    chargingTime => console.log(`Time left to charge: ${chargingTime} seconds`),
    dischargingTime => console.log(`Time left on battery: ${dischargingTime} seconds`)
  );


  // DEPENDENCES
  console.log("** ikayParser ****");
  console.table(ikayParser());
  console.log("** ikayByIp ****");
  ikayByIp()
  .then(data => {
      console.log("Datos de IP:", data);
  })
  .catch(error => {
      console.error("Error al obtener datos de IP:", error);
  });

  


}
document.addEventListener("DOMContentLoaded", domReady);
