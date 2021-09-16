// Need isTouchDevice module
import isTouchDevice from "./isTouchDevice";
import properties from "../../properties/properties";
import detectDevice from "./detectDevice";
var detectOrientation = {
  init: function () {
    let result = undefined;
    const txt = properties.get().orientation.type;
    const isTouch = isTouchDevice();
    const uDevice = detectDevice.init();
    let isPortrait =
      window.matchMedia("screen and (orientation: portrait)").matches &&
      isTouch;
    let isLandscape =
      window.matchMedia("screen and (orientation: landscape)").matches &&
      isTouch;

    if (isPortrait) {
      result = txt.portrait;
    } else if (isLandscape) {
      result = txt.landscape;
    } else {
      result = properties.set(txt.undefined, uDevice);
    }
    return result;
  },
};

export default detectOrientation;
