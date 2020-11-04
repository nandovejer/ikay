/**
 * Support: Edge | Chrome | Opera | Android Browser | Samsung Internet
 */
var detectRam = {
  init: function () {
    const ram = navigator.deviceMemory;
    const notSupport = () => {
      document.querySelector(".js-card-ram").classList.add("noSupport");
    };

    // return ram ? ram + "GB" : notSupport();
    return ram ? ram + "GB" : undefined;
  },
};
export default detectRam;
