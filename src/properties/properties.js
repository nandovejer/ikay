// UPDATE IMPORTS
import { default as en } from "./en.json";
import { default as es } from "./es.json";
import { default as ar } from "./ar.json";
// import saveStorage from "../js/modules/saveStorege";
import detectLang from "../js/wepapi/detectLang";

// UPDATE LANGUAGES
const properties = {
  lang: function () {
    const browserLang = detectLang.init();
    // const sessionLang = saveStorage.get("sessionLang");   // TODO Bug only works the native window.localStorage.getItem(...
    const sessionLang = window.localStorage.getItem("ikay-sessionLang");
    return sessionLang !== null && sessionLang !== undefined
      ? sessionLang
      : browserLang;
  },
  get: () => {
    const lang = properties.lang();
    switch (lang) {
      case "en":
        return en;
        break;
      case "es":
        return es;
        break;
      case "ar":
        return ar;
        break;
      default:
        return en;
        break;
    }
  },
  /**
   * Replace in str the pattern {0} for each item of params
   * @param {string} str
   * @param  {...any} params
   */
  set: (str, ...params) => {
    let result = str;
    params.forEach((item, index) => {
      let rex = "{" + index + "}";
      result = result.replace(rex, item);
    });
    return result;
  },
};

export default properties;
