import tplFooter from "../template/tplFooter";
import tplHeader from "../template/tplHeader";
import tplMain from "../template/tplMain";
import loadingPage from "../modules/loadingPage";
import properties from "../../properties/properties";

var prepareHTML = {
  init: (callback) => {
    const txt = properties.get();
    prepareHTML.inner("#appHeader", tplHeader(txt), "header");
    prepareHTML.inner("#appMain", tplMain(txt), "main");
    prepareHTML.inner("#appFooter", tplFooter(txt), "footer");
    loadingPage.init();
    callback();
  },
  inner: function (selectorName, tpl, cssClassSelector) {
    let selector = document.querySelector(selectorName);
    if (cssClassSelector !== undefined) {
      selector.classList.add(cssClassSelector);
    }
    selector.innerHTML = tpl;
  },
};

export default prepareHTML;
