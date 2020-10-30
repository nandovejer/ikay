// INSPIRATION IN THE WORK OF https://webkay.robinlinus.com/
import properties from "../../properties/properties";
var speedAPI = {
  get: function (callbackSpeed, callbackType) {
    // VARIABLES
    const imageTarget =
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_%285mb%29.jpg";
    const imageTargetSize = 5245329; //bytes

    // FUNCTIONS
    const initiateSpeedDetection = function () {
      window.setTimeout(measureConnectionSpeed, 1);
    };

    const showSpeedResults = function (endTime, startTime) {
      var duration = (endTime - startTime) / 1000;
      var bitsLoaded = imageTargetSize * 8;
      var speedBps = (bitsLoaded / duration).toFixed(2);
      var speedKbps = (speedBps / 1024).toFixed(2);
      var speedMbps = (speedKbps / 1024).toFixed(2);
      callbackSpeed(speedMbps, speedKbps);
    };

    const measureConnectionSpeed = function () {
      var startTime, endTime;
      var download = new Image();
      download.onload = function () {
        endTime = new Date().getTime();
        showSpeedResults(endTime, startTime);
      };

      download.onerror = function (err, msg) {
        ShowProgressMessage("Invalid image, or error downloading");
      };

      startTime = new Date().getTime();
      var cacheBuster = "?nnn=" + startTime;
      download.src = imageTarget + cacheBuster;
    };

    const connectionType = function () {
      if (navigator.connection && navigator.connection.effectiveType) {
        var connectionSpeed;
        const txt = properties.get().connection.type;
        switch (navigator.connection.effectiveType.toUpperCase()) {
          case "SLOW-2G":
            connectionSpeed = txt.lower2g;
            break;
          case "2G":
            connectionSpeed = txt.low2g;
            break;
          case "3G":
            connectionSpeed = txt.normal3g;
            break;
          case "4G":
            connectionSpeed = txt.faster4g;
            break;
          default:
            // WIFI, ETHERNET, UNKNOWN
            connectionSpeed = "...";
        }

        callbackType(connectionSpeed);
      }
    };

    // INIT
    const init = function () {
      if (window.addEventListener) {
        window.addEventListener("load", initiateSpeedDetection, false);
      } else if (window.attachEvent) {
        window.attachEvent("onload", initiateSpeedDetection);
      }
      measureConnectionSpeed();
      connectionType();
    };
    init();
  },
  showSpeed: (speedMbps, speedKbps) => {
    const element = document.querySelectorAll(".js-apiValue-connection-mbps");
    element.forEach((item) => {
      item.innerHTML =
        speedMbps + " Mbps <small>(" + speedKbps + " kbps)</small>";
    });
  },
  showType: (typeValue) => {
    const element = document.querySelectorAll(".js-apiValue-connection-type");
    element.forEach((item) => {
      item.innerHTML = typeValue;
    });
  },
};

/*
  document.addEventListener("DOMContentLoaded", () => {
	const showSpeed = speedAPI.showSpeed;
	const showType = speedAPI.showType;
	speedAPI.get(showSpeed, showType);
  });
  */

export default speedAPI;
