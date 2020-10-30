/**
 * 
 * BASIC MODAL JS
 * How implement it:
caimodal.init({
  scopeOpen: document.querySelector("selectorNameOpen"),
  scopeModal: document.querySelector("selectorNameModal"),
  callbackClose: callback(),
  callbackOpen: callback(),
});
 */
var caimodal = {
  init: function (options) {
    caimodal.innerHTML();
    const config = {
      scopeOpen: document.querySelector("#caimodalOpen"), // TODO - Refactor develop querySelectorAll
      scopeModal: document.querySelector(".js-caimodal"),
      tplHeader: ``,
      tplMain: null,
      tplFooter: ``,
      callbackClose: () => {},
      callbackOpen: () => {},
    };
    Object.assign(config, options);
    if (
      config.scopeOpen !== null ||
      config.scopeModal !== null ||
      config.tplMain !== null
    ) {
      caimodal.updateModal(config);
    }
  },
  innerHTML: function () {
    const selector = document.getElementById("caimodal");
    if (!selector.classList.contains("enable")) {
      selector.classList.add("enable");
      selector.innerHTML = `
        <div class="caimodal js-caimodal">
          <div class="caimodalBox">
            <button
              class="caimodalBox__btnClose iconbg iconbg-close"
              type="button"
              data-caimodal-action="close"
            ></button>
            <header class="caimodalBox__header js-caimodal-header"></header>
            <main class="caimodalBox__main js-caimodal-main"></main>
            <footer class="caimodalBox__footer js-caimodal-footer"></footer>
          </div>
          <div class="caimodalOverlay" data-caimodal-action="close"></div>
        </div>
      `;
    }
  },
  updateModal: function (config) {
    let header = config.scopeModal.querySelector(".js-caimodal-header");
    let main = config.scopeModal.querySelector(".js-caimodal-main");
    let footer = config.scopeModal.querySelector(".js-caimodal-footer");

    header.innerHTML = config.tplHeader;
    main.innerHTML = config.tplMain;
    footer.innerHTML = config.tplFooter;
    caimodal.openEvent(config);
    caimodal.closeEvent(config);
  },
  open: function (config) {
    document.querySelector("body").setAttribute("data-caimodal-status", "open");
    config.scopeModal.setAttribute("data-caimodal-status", "open");
    if (config.callbackOpen !== undefined) {
      config.callbackOpen();
    }
  },
  close: function (config) {
    document.querySelector("body").setAttribute("data-caimodal-status", "");
    config.scopeModal.setAttribute("data-caimodal-status", "");
    if (config.callbackClose !== undefined) {
      config.callbackClose();
    }
  },
  openEvent: function (config) {
    config.scopeOpen.addEventListener("click", () => {
      caimodal.updateModal(config);
      caimodal.open(config);
    });
  },
  closeEvent: function (config) {
    config.scopeModal
      .querySelectorAll("[data-caimodal-action='close']")
      .forEach((item) => {
        item.addEventListener("click", () => {
          caimodal.close(config);
        });
      });
  },
};
export default caimodal;
