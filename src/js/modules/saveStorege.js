var saveStorege = {
  types: ["sessionLang", "visited"],
  get: function (type) {
    // TODO Bug only works the native window.localStorage.getItem(...
    saveStorege.types.indexOf(type) !== -1
      ? window.localStorage.getItem("ikay-" + type)
      : console.error("The type " + type + " is not valid");
  },
  set: function (type, value) {
    console.log(type);
    saveStorege.types.indexOf(type) !== -1
      ? window.localStorage.setItem("ikay-" + type, value)
      : console.error("The type " + type + " is not valid");
  },
};

export default saveStorege;
