/**
 * @return {string}
 */
import UAParser from "ua-parser-js";
const detectBrowser = {
  init: function () {
    const parser = new UAParser().getBrowser();
    let result;
    if (parser) {
      result = detectBrowser.byUserAgent(parser);
    } else {
      result = detectBrowser.byUserAgent();
    }
    return result;
  },
  byUaparser: function (parser) {
    let browser = `${parser.name} ${parser.version}`;
    return browser;
  },
  byUserAgent: function () {
    let result;

    const userAgent = navigator.userAgent.toLocaleLowerCase();
    const os = navigator.platform.toLocaleLowerCase();
    const osApple =
      os.indexOf("mac") !== -1 ||
      os.indexOf("iphone") !== -1 ||
      os.indexOf("ipad") !== -1 ||
      os.indexOf("ipod") !== -1;

    // Discard the most famous browsers based in chromium
    // https://en.wikipedia.org/wiki/Chromium_(web_browser)#Browsers_based_on_Chromium
    const isChrome =
      userAgent.indexOf("chrome").toLowerCase !== -1 &&
      window.chrome != undefined &&
      userAgent.indexOf("edg") == -1 &&
      userAgent.indexOf("edge") == -1 &&
      userAgent.indexOf("opera") == -1 &&
      userAgent.indexOf("opr") == -1 &&
      userAgent.indexOf("samsung") == -1 &&
      userAgent.indexOf("brave") == -1 &&
      userAgent.indexOf("vivaldi") == -1;
    const isSafari = userAgent.indexOf("safari") !== -1 && osApple && !isChrome;

    switch (true) {
      case userAgent.indexOf("firefox") !== -1:
        result = "Firefox";
        break;
      case userAgent.indexOf("edg") !== -1 || userAgent.indexOf("edge") !== -1:
        result = "Microsoft Edge";
        break;
      case userAgent.indexOf("opera") !== -1 || userAgent.indexOf("opr") !== -1:
        result = "Opera";
        break;
      case userAgent.indexOf("msie") !== -1 ||
        userAgent.indexOf("trident") !== -1:
        result = "Internet Explorer";
        break;
      case userAgent.indexOf("ucbrowser") !== -1:
        result = "UC Browser";
        break;
      case userAgent.indexOf("brave") !== -1:
        result = "Brave";
        break;
      case userAgent.indexOf("samsung") !== -1:
        result = "Samsung Internet";
        break;
      case userAgent.indexOf("vivaldi") !== -1:
        result = "Vivaldi";
        break;
      case isChrome:
        result = "Chrome";
        break;
      case isSafari:
        result = "Safari";
        break;
      default:
        result = undefined;
        break;
    }
    return result;
  },
};

export default detectBrowser;
