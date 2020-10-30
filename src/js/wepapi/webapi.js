// ## JS - WEBAPI
import locationAPI from "./locationAPI";
import nativeObj from "./nativeObj";
import batteryAPI from "./batteryAPI";
import speedAPI from "./speedAPI";

var webapi = {
  init: function () {
    //locationAPI.init();
    webapi.setNativeObj(nativeObj);
    batteryAPI.get((battery) => {
      batteryAPI.set(battery);
    });
    speedAPI.get(speedAPI.showSpeed, speedAPI.showType);
  },
  setApiValues: function (selectorList, config) {
    Object.keys(selectorList).forEach((key) => {
      selectorList[key].forEach((item) => {
        item.innerHTML = config[key];
      });
    });
  },
  setNativeObj: function (data) {
    const selector = {
      device: document.querySelectorAll(".js-apiValue-device"),
      screen: document.querySelectorAll(".js-apiValue-screen"),
      orientation: document.querySelectorAll(".js-apiValue-orientation"),
      darkmode: document.querySelectorAll(".js-apiValue-darkmode"),
      lang: document.querySelectorAll(".js-apiValue-lang"),
      exit: document.querySelectorAll(".js-apiValue-exit"),
      os: document.querySelectorAll(".js-apiValue-os"),
      browser: document.querySelectorAll(".js-apiValue-browser"),
      ram: document.querySelectorAll(".js-apiValue-ram"),
      cpu: document.querySelectorAll(".js-apiValue-cpu"),
      gpu: document.querySelectorAll(".js-apiValue-gpu"),
    };
    webapi.setApiValues(selector, data);
  },
};

export default webapi;
