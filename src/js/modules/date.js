var date = {
  time: (el) => {
    let myTimer = () => {
      var d = new Date();
      el.innerHTML = d.toLocaleTimeString();
    };
    setInterval(myTimer, 1000);
  },
  today: (type) => {
    let pattern = {};
    const lang = navigator.language.toLowerCase();
    const date = new Date();
    switch (type) {
      case "day":
        // Viernes
        pattern = { weekday: "long" };
        break;
      case "month":
        // octubre
        pattern = { month: "long" };
        break;
      case "year":
        // 2020
        pattern = { year: "numeric" };
        break;
      case "longDate":
        //  "viernes, 9 de octubre de 2020"
        pattern = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        break;
      default:
        // "9/10/2020"
        break;
    }
    return new Intl.DateTimeFormat(lang, pattern).format(date);
  },
};

export default date;
