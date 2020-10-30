var loadingPage = {
  init: function () {
    let config = {
      body: document.querySelector("body"),
      classNameBody: "loadingEnable",
      time: 3000,
    };

    // INITAL
    let selector = document.getElementById("loadingPage");
    selector.classList.add("loadingPage");
    selector.innerHTML = `<span class="loadingPage__icon" data-title="Loading"></span>`;
    loadingPage.ready(config);
  },
  ready: function (config) {
    if (config.body.classList.contains(config.classNameBody)) {
      loadingPage.close(config);
    }

    // Limit loading in time seconds
    setTimeout(() => {
      loadingPage.close(config);
      console.error("A lot of time waiting the loading");
    }, config.time);
  },
  open: function (config) {
    config.body.classList.add(config.classNameBody);
  },
  close: function (config) {
    config.body.classList.remove(config.classNameBody);
  },
};
export default loadingPage;
