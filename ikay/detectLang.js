/**
 * Detect Language by navigator.language
 * @return {string} // support es || en || ar
 */
var detectLang = {
  init: function () {
    const arrayLang = detectLang.arrayLang;
    let lang = "en";
    arrayLang.forEach(function (item) {
      if (navigator.language.toLocaleLowerCase().indexOf(item) !== -1) {
        lang = item;
      }
    });
    return lang;
  },
  arrayLang: ["es", "en", "ar"],
};

export default detectLang;
