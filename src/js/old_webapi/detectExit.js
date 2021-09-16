import properties from "../../properties/properties";
import date from "../modules/date";
import saveStorage from "../modules/saveStorege";
var detectExit = {
  init: function () {
    let result = "";
    let arrayTime = detectExit.checkAndSave();
    if (arrayTime !== undefined) {
      arrayTime.forEach((item) => {
        result = `${result}<li>${item}</li>`;
      });
    } else {
      console.error("Date is " + undefined);
    }

    return result;
  },
  updateTitle: function (status) {
    const firsttime = properties.get().exit.firsttime;
    const severaltimes = properties.get().exit.severaltimes;
    let result = status === "first" ? firsttime : severaltimes;
    let selector = document.querySelectorAll(".js-apiValue-exitTitle");
    selector.forEach((item) => {
      item.innerHTML = result;
    });
  },
  checkAndSave: function () {
    let arrayTime = [];
    // const strTimeStorage = saveStorage.get("visited");  // TODO Bug only works the native window.localStorage.getItem(...
    const strTimeStorage = window.localStorage.getItem("ikay-visited");
    const strTimeNow = detectExit.takeDateTime() || "undefined";
    if (strTimeStorage === null) {
      arrayTime = [strTimeNow + ","];
      //detectExit.updateTitle("first");
    } else {
      let _array = strTimeStorage.split(",");
      arrayTime = detectExit.updateArray(_array, strTimeNow);
      //detectExit.updateTitle();
    }
    saveStorage.set("visited", arrayTime);
    return arrayTime;
  },
  takeDateTime: function () {
    const day = date.today();
    const hour = new Date().toLocaleTimeString();
    return `${day} - ${hour}`;
  },

  updateArray: function (array, value) {
    array.push(value);
    let _array = array;
    return _array;
  },
};

export default detectExit;
