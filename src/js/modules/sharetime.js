import caimodal from "../modules/caimodal";
import properties from "../../properties/properties";
const sharetime = {
  init: function () {
    const selector = document.querySelector(".sharetime");
    selector.innerHTML = `<button type="button" title="share this page" class="sharetime__btn js-share-native"></button>`;
    const shareBtn = document.querySelectorAll(".js-share-native");
    navigator.share !== undefined
      ? sharetime.native(shareBtn)
      : sharetime.fallback(shareBtn);
  },
  native: function (btn) {
    btn.forEach((item) => {
      item.addEventListener("click", (event) => {
        navigator
          .share({
            title: document.title,
            url: encodeURIComponent(window.location.href),
          })
          .then(() => {
            console.log("Thanks for sharing!");
          })
          .catch(console.error);
      });
    });
  },
  fallback: function (btn) {
    const propertieShareIn = properties.get().global.shareIn;
    const propertieShare = properties.get().global.share;
    const strMainList = function () {
      let config = {
        socialArray: [
          "facebook",
          "twitter",
          "linkedin",
          "whatsapp",
          "reddit",
          "main",
        ],
        msg: document.title,
        url: encodeURIComponent(window.location.href),
        tplList: ``,
      };
      let socialURLS = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${config.url}`,
        twitter: `http://twitter.com/intent/tweet?text=${config.msg}:%20${config.url}`, // works
        linkedin: `https://www.linkedin.com/shareArticle?url=${config.url}&title=${config.msg}`,
        whatsapp: `whatsapp://send?text=${config.msg}:%20${config.url}`,
        reddit: `http://www.reddit.com/submit?url=${config.url}&title=${config.msg}`,
        pinterest: `http://pinterest.com/pin/create/button/?url=${config.url}&description=${config.msg}`,
        mail: `mailto:?&subject=${config.msg}&body=${config.msg}:%20${config.url}`,
      };
      config.socialArray.forEach((socialNetwork) => {
        let txtShareIn = properties.set(propertieShareIn, socialNetwork);
        let socialIcon = socialNetwork === "main" ? "contact" : socialNetwork;
        // TODO - CHANGE ICON MAIL SVG WITH A EDITOR
        let tplItem = `
        <li class="shareTimeList__item">
          <a class="shareTimeList__item__link iconbg iconbg-${socialIcon} js-sharetime-${socialNetwork}" 
              title="${txtShareIn}" 
              target="blank" 
              href="${socialURLS[socialNetwork]}">
          </a>
        </li>
        `;
        config.tplList = config.tplList + tplItem;
      });
      return config.tplList;
    };

    // init modal
    const caimodalConfig = {
      scopeOpen: btn[0],
      tplHeader: `<h3 class="caimodalBox__header__title">${propertieShare}</h3>`,
      tplMain: `<ul class="shareTimeList">${strMainList()}</ul>`,
    };
    // TODO - REFACTOR
    const caimodalConfig2 = {
      scopeOpen: btn[1],
      tplHeader: caimodalConfig.tplHeader,
      tplMain: caimodalConfig.tplMain,
    };
    caimodal.init(caimodalConfig);
    caimodal.init(caimodalConfig2);
  },
};

export default sharetime;
