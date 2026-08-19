var saveStorege = {
  types: ["sessionLang", "visited"],
  get: function (type) {
    if (saveStorege.types.indexOf(type) === -1) {
      console.error("The type " + type + " is not valid");
      return null;
    }
    return window.localStorage.getItem("ikay-" + type);
  },
  set: function (type, value) {
    saveStorege.types.indexOf(type) !== -1
      ? window.localStorage.setItem("ikay-" + type, value)
      : console.error("The type " + type + " is not valid");
  },
};

export default saveStorege;
