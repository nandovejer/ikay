// VANILLA JS
import detectRam from "./api/detectRam.js";

async function getApis() {
  const noSupport = "noSupport";
  let fingerprint = {
    ram: await detectRam() || noSupport
  };
  console.log(fingerprint);
};



document.addEventListener("DOMContentLoaded", () => {
  console.log("init");
  getApis();
});