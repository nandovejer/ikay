import getJson from "../modules/getJson";
var locationAPI = {
  init: function () {
    locationAPI.set();
  },
  mapIframe: function (lat, lon) {
    const map = document.querySelector(".js-card-map");
    const mapURL = `https://maps.google.com/maps?q=${lat},${lon}&hl=es&z=14&amp;output=embed`;
    const tplMap = `<iframe class="card__map" src="${mapURL}" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
    map.innerHTML = tplMap;
  },
  set: function () {
    locationAPI.getByIp((data) => {
      const config = {
        ip: data.ip,
        lat: data.latitude,
        lon: data.longitude,
        city: data.country_capital,
        country: data.country_name,
        telco: data.org,
      };
      const selector = {
        city: document.querySelectorAll(".js-apiValue-city"),
        country: document.querySelectorAll(".js-apiValue-country"),
        ip: document.querySelectorAll(".js-apiValue-ip"),
        telco: document.querySelectorAll(".js-apiValue-telco"),
      };
      const updateDomValues = () => {
        Object.keys(selector).forEach((key) => {
          console.log(key); // returns the keys in an object
          console.log(selector[key]); // returns the appropriate value
          selector[key].forEach((item) => {
            item.innerHTML = config[key];
          });
        });
      };

      locationAPI.mapIframe(config.lat, config.lon);
      updateDomValues();
    });
  },
  getByIp: (callback) => {
    const urlAPi = "https://ipapi.co/json/";

    /**
     * Success request of urlAPI
     * @param {obj} data
     */
    const successAPI = function (data) {
      callback(data);
    };
    /**
     * Error request of urlAPI
     */
    const errorAPI = function () {
      console.log("Error APi:", urlAPi);
      locationAPI.support(false);
    };

    // INIT API
    getJson(
      urlAPi,
      (data) => {
        successAPI(data);
      },
      (data) => {
        errorAPI(data);
      }
    );
  },
  getByNative: () => {},

  // TODO - recfactor in a module js this funcction
  support: function (status) {
    const cardLocation = document.querySelector(".js-card-location");
    const cardIp = document.querySelector(".js-card-ip");
    const cardTelco = document.querySelector(".js-card-telco");
    if (!status) {
      cardLocation.classList.add("noSupport");
      cardIp.classList.add("noSupport");
      cardTelco.classList.add("noSupport");
    }
  },
};

export default locationAPI;
