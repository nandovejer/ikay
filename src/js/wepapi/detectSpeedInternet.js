/**
 * Detect internet speed  native
 * Native detect speeed (Don't work IE, Firefox, Safari)
 * https://developer.mozilla.org/en-US/docs/Glossary/Effective_connection_type
 * @return {string} // slow-2g (2000ms-50Kbps) || 2g	(1400ms-70Kbps) || 3g	(270ms-700Kbps) || 4g	(0ms	∞)
 */
var detectSpeedInternet = {
  init: function () {
    let time = undefined;
    if (navigator.connection !== undefined) {
      time = navigator.connection.effectiveType.toLocaleLowerCase();
    }
    return time;
  },
};

export default detectSpeedInternet;
