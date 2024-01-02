// Based on https://github.com/fingerprintjs/fingerprintjs/blob/master/src/utils/browser.ts#L154

const byUniqueFeature = (name) => {
  const w = window;
  const n = navigator;
  const c = "connection";
  const s = screen;
  const screenRatio = s.width / s.height;
  const counterConditions = name === "ipad" || name === "android" ? 2 : 4;

  const feature = {
    trident: [
      "MSCSSMatrix" in w,
      "msSetImmediate" in w,
      "msIndexedDB" in w,
      "msMaxTouchPoints" in n,
      "msPointerEnabled" in n,
    ],
    gecko: [
      "buildID" in navigator,
      "MozAppearance" in (document.documentElement?.style ?? {}),
      "onmozfullscreenchange" in w,
      "mozInnerScreenX" in w,
      "CSSMozDocumentRule" in w,
      "CanvasCaptureMediaStream" in w,
    ],
    webkit: [
      "ApplePayError" in w,
      "CSSPrimitiveValue" in w,
      "Counter" in w,
      n.vendor.indexOf("Apple") === 0,
      "getStorageUpdates" in n,
      "WebKitMediaKeys" in w,
    ],
    ipad: [
      "MediaSource" in window, // Since iOS 13
      !!Element.prototype.webkitRequestFullscreen, // Since iOS 12
      screenRatio > 0.65 && screenRatio < 1.53, // iPhone 4S that runs iOS 9 matches this, but it is not supported
    ],
    android: [
      !("SharedWorker" in w),
      // `typechange` is deprecated, but it's still present on Android (tested on Chrome Mobile 117)
      // Removal proposal https://bugs.chromium.org/p/chromium/issues/detail?id=699892
      // Note: this expression returns true on ChromeOS, so additional detectors are required to avoid false-positives
      n[c] && "ontypechange" in n[c],
      !("sinkId" in new window.Audio()),
    ],
  };

  const featuresToCheck = feature[name];
  return featuresToCheck
    ? featuresToCheck.filter(Boolean).length >= counterConditions
    : null;
};

const BROWSER = {
  safari: {
    name: "Safari",
    userAgentTerms: ["safari"],
    renderingEngine: "webkit",
    jsEngine: "JavaScriptCore",
    byFeature: byUniqueFeature("webkit"),
  },
  firefox: {
    name: "Mozilla Firefox",
    userAgentTerms: ["firefox"],
    renderingEngine: "gecko",
    jsEngine: "SpiderMonkey",
    byFeature: byUniqueFeature("gecko"),
  },
  ie: {
    name: "Internet Explorer",
    userAgentTerms: ["msie", "trident"],
    renderingEngine: "trident",
    jsEngine: "chakra",
    byFeature: byUniqueFeature("trident"),
  },
  chrome: {
    name: "Google Chrome",
    userAgentTerms: ["chrome"],
    renderingEngine: "blink",
    jsEngine: "V8",
    byFeature: null,
  },
  edge: {
    name: "Microsoft Edge",
    userAgentTerms: ["edg", "edge"],
    renderingEngine: "blink",
    jsEngine: "V8",
    byFeature: null,
  },
  opera: {
    name: "Opera Browser",
    userAgentTerms: ["opr", "opera"],
    renderingEngine: "blink",
    jsEngine: "V8",
    byFeature: null,
  },

  samsung: {
    name: "Samsung Internet",
    userAgentTerms: ["samsung"],
    renderingEngine: "blink",
    jsEngine: "V8",
    byFeature: null,
  },
  brave: {
    name: "Brave",
    userAgentTerms: ["brave"],
    renderingEngine: "blink",
    jsEngine: "V8",
    byFeature: navigator.brave !== undefined,
  },
  vivaldi: {
    name: "Vivaldi",
    userAgentTerms: ["vivaldi"],
    renderingEngine: "blink",
    jsEngine: "V8",
    byFeature: null,
  },
  ucbrowser: {
    name: "UC Browser",
    userAgentTerms: ["ucbrowser"],
    renderingEngine: "blink",
    jsEngine: "V8",
    byFeature: null,
  },
  unknown: {
    name: "Unknown",
    renderingEngine: null,
    jsEngine: null,
    byFeature: null,
  },
};

function ikayBrowser() {
  const _userAgent = navigator.userAgent?.toLocaleLowerCase();
  const _os = navigator.platform?.toLocaleLowerCase();
  const _appleArray = ["mac", "iphone", "ipad", "ipod"];
  const _allBrowsersArray = [
    "safari",
    "firefox",
    "ie",
    "chrome",
    "edge",
    "opera",
    "samsung",
    "brave",
    "vivaldi",
    "ucbrowser",
  ];

  const getByUserAgent = () => {
    if (!_userAgent) return;

    const chromiumArray = [
      ...BROWSER.ucbrowser.userAgentTerms,
      ...BROWSER.vivaldi.userAgentTerms,
      ...BROWSER.brave.userAgentTerms,
      ...BROWSER.samsung.userAgentTerms,
      ...BROWSER.opera.userAgentTerms,
      ...BROWSER.edge.userAgentTerms,
      ...BROWSER.chrome.userAgentTerms,
    ];

    // const isApple = _appleArray.some((subString) => _os.includes(subString));
    // const isChromium = chromiumArray.some((subString) =>      _userAgent.includes(subString)    );

    for (let currentBrowser of _allBrowsersArray) {
      const isCurrentBrowser = BROWSER[currentBrowser].userAgentTerms.some(
        (subString) => _userAgent.includes(subString)
      );
      if (isCurrentBrowser) {
        const { userAgentTerms,byFeature, ...data } = BROWSER[currentBrowser];
        return data;
      }
    };
    return BROWSER.unknown;
  };
  const getNameByFeature = () => {
    for (let currentBrowser of _allBrowsersArray) {
        const isCurrentBrowser = BROWSER[currentBrowser].byFeature;
        if (isCurrentBrowser) {
          const { userAgentTerms, byFeature, ...data } = BROWSER[currentBrowser];
          return data;
        }
      };
      return BROWSER.unknown;
  };

  return {
    byUserAgent: getByUserAgent(),
    byFeature: getNameByFeature(),
  };
}
export default ikayBrowser;
