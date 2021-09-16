import properties from "../../properties/properties";
var detectDarkMode = {
  init: function () {
    const txt = properties.get().darkmode.type;
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    return isDarkMode === true ? txt.enable : txt.disable;
  },
};
export default detectDarkMode;
