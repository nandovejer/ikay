import detectLang from "../wepapi/detectLang";
import saveStorage from "./saveStorege";
var choiceLang = {
  init: function () {
    let array = detectLang.arrayLang;
    document
      .querySelector(".js-choiceLang-es")
      .addEventListener("click", () => {
        choiceLang.changeLang("es");
      });
    document
      .querySelector(".js-choiceLang-en")
      .addEventListener("click", () => {
        choiceLang.changeLang("en");
        html.setAttribute("lang", "en");
      });
    document
      .querySelector(".js-choiceLang-ar")
      .addEventListener("click", () => {
        choiceLang.changeLang("ar");
        html.setAttribute("lang", "ar");
      });

    choiceLang.htmlLang();
  },
  changeLang: function (strLang) {
    saveStorage.set("sessionLang", strLang);
    location.reload();
  },
  htmlLang: function () {
    //document.addEventListener("DOMContentLoaded", () => {
    let html = document.querySelector("html");
    let strLang = window.localStorage.getItem("ikay-sessionLang"); // TODO Bug only works the native window.localStorage.getItem(...
    html.setAttribute("lang", strLang);
    //});
  },
};
export default choiceLang;
