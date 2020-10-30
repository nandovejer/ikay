// batteryAPI.get((battery) => {
//   batteryAPI.set(battery);
// });

var batteryAPI = {
  get: (callback) => {
    if (navigator.getBattery !== undefined) {
      navigator.getBattery().then((result) => {
        callback(result);
      });
    } else {
      const notSupport = () => {
        document.querySelector(".js-card-battery").classList.add("noSupport");
      };
      return notSupport();
    }
  },
  set: (data) => {
    //// VARS
    const emoji = {
      energy: "⚡",
      hight: "🤩",
      medium: "🙃",
      low: "😥",
      empty: "😱",
      charging: "🔌",
    };
    const scope = document.querySelector(".battery");

    ///// UDAPTE DOM
    let updateStatusCSS = (status) => {
      const selector = document.querySelector(".battery");
      const prefix = "battery--";
      const array = ["hight", "medium", "low", "empty"];
      array.forEach((item) => {
        if (status == item) {
          selector.classList.add(prefix + status);
        } else {
          selector.classList.remove(prefix + item);
        }
      });
    };

    let updateLevel = (symbol, level, status) => {
      let icon = scope.querySelector(".battery__icon");
      let selectorLevel = scope.querySelector(".js-battery-level");
      const tpl = `${symbol} ${level}%`;
      icon.setAttribute("data-level", tpl);
      icon.style.backgroundSize = level + "%";
      selectorLevel.innerHTML = level + "%";
      updateStatusCSS(status);
    };

    //
    let updateLevelDOM = (level) => {
      if (level !== undefined) {
        switch (true) {
          case level >= 75:
            updateLevel(emoji.hight, level, "hight");
            break;
          case level <= 74 && level >= 45:
            updateLevel(emoji.medium, level, "medium");
            break;
          case level <= 44 && level >= 16:
            updateLevel(emoji.low, level, "low");
            break;
          case level <= 15:
            updateLevel(emoji.empty, level, "empty");
            break;
          default:
            updateLevel(emoji.empty, level, "empty");
        }
      }
    };

    let updateModeDOM = (isCharging) => {
      let icon = scope.querySelector(".battery__icon");
      let selector = scope.querySelector(".js-battery-mode");
      const mode = isCharging ? "Charging" : "Battery";
      isCharging
        ? scope.classList.add("battery--charging")
        : scope.classList.remove("battery--charging");
      selector.innerHTML = mode;
    };

    const dischargingTime = (data) => {
      let selector = scope.querySelector(".js-battery-dischargingtime");
      let result = "-";
      if (!data.charging) {
        data.dischargingTime === Infinity
          ? (result = "Infinity")
          : (result =
              Math.round((100 * data.dischargingTime) / 3600) / 100 + "h");
      }
      selector.innerHTML = result;
    };

    const chargingTime = (data) => {
      let selector = scope.querySelector(".js-battery-chargedtimme");
      let result = "-";
      if (data.charging) {
        data.chargingTime === Infinity
          ? (result = "Infinity")
          : (result = Math.round((100 * data.chargingTime) / 3600) / 100 + "h");
      }
      selector.innerHTML = result;
    };

    //// INIT
    let init = () => {
      // FIRST INIT
      updateLevelDOM(Math.round(data.level * 10000) / 100);
      updateModeDOM(data.charging);
      dischargingTime(data);
      chargingTime(data);

      /// EVENTS
      data.onchargingchange = () => {
        updateModeDOM(data.charging);
      };

      data.onlevelchange = () => {
        updateLevelDOM(Math.round(data.level * 10000) / 100);
      };

      data.ondischargingtimechange = () => {
        dischargingTime(data);
      };
      data.chargingtimechange = () => {
        chargingTime(data);
      };
    };

    init();
  },
};

export default batteryAPI;
