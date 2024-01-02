/**
 * Detect Device by user agent, platform and touch device
 * mobileAndroid || tabletAndroid || ipad || iphone || laptopWin || laptopmac || tv
 *
 */
import isTouchDevice from "./isTouchDevice";
import properties from "../../properties/properties";
import UAParser from "ua-parser-js";
const detectDevice = {
  init: function () {
    const parser = new UAParser().getDevice();
    let result;
    if (parser.model !== undefined) {
      result = detectDevice.byUaparser(parser);
    } else {
      result = detectDevice.byUserAgent();
    }
    return result;
  },
  byUaparser: function (parser) {
    const usaparserDevice = `${parser.model} <small>(${parser.type}|${parser.vendor})</small>`;
    return usaparserDevice;
  },
  byUserAgent: function () {
    const isTouch = isTouchDevice();
    const txt = properties.get().device.type;
    const userAgent = navigator.userAgent.toLocaleLowerCase();
    const os = navigator.platform.toLocaleLowerCase();
    const isAndroid = userAgent.indexOf("android") !== -1;
    const isMobile = userAgent.indexOf("mobile") !== -1;
    let device;

    switch (true) {
      case isAndroid && isMobile:
        device = txt.mobileAndroid;
        break;
      case isAndroid && !isMobile && isTouch:
        device = txt.tabletAndroid;
        break;
      case userAgent.indexOf("ipad") !== -1:
        device = txt.ipad;
        break;
      case userAgent.indexOf("iphone") !== -1:
        device = txt.iphone;
        break;
      case !isTouch && os.indexOf("win") !== -1:
        device = txt.laptopWin;
        break;
      case !isTouch && os.indexOf("mac") !== -1:
        device = txt.laptopMac;
        break;
      case os.indexOf("tv") !== -1:
        device = txt.tv;
        break;
      default:
        device = txt.unknownDevice;
        break;
    }
    return device;
  },
};

export default detectDevice;
