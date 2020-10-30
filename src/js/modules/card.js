import caimodal from "../modules/caimodal";
import properties from "../../properties/properties";
var card = {
  init: function () {
    const arrayCardType = [
      "location",
      "device",
      "screen",
      "orientation",
      "darkmode",
      "lang",
      "exit",
      "os",
      "browser",
      "connection",
      "telco",
      "ip",
      "ram",
      "cpu",
      "gpu",
      "battery",
    ];
    card.setModalInfoType(arrayCardType);
  },
  getModalInfoType: function (arrayCardType, strType) {
    const originalProperties = properties.get();
    let modalInfoType;
    arrayCardType.forEach((type) => {
      if (strType === type) {
        modalInfoType = originalProperties[type].modalinfo;
      }
    });
    return modalInfoType;
  },
  setModalInfoType: function (arrayCardType) {
    arrayCardType.forEach((type) => {
      let modalinfo = card.getModalInfoType(arrayCardType, type);
      caimodal.init({
        scopeOpen: document.querySelector(`.js-card-${type} .js-card-more`),
        tplHeader: `<h3 class="caimodalBox__header__title">${modalinfo.title}</h3>`,
        tplMain: `<p>${modalinfo.description}</p>`,
        tplFooter: `${modalinfo.moreinfo}`,
      });
    });
  },
};
export default card;
