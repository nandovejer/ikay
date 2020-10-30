var tplHeader = function (properties) {
  let txt = properties.header;

  const tplChoiceLang = `
<!--CHOICE LANG -->
<aside class="nav__lang js-choiceLang">
  <button id="" class="nav__lang__btn js-choiceLang-es" data-name="Epañol">ES</button>
  <button id="" class="nav__lang__btn js-choiceLang-en" data-name="English">EN</button>
  <button id="" class="nav__lang__btn js-choiceLang-ar" data-name="العربية">AR</button>
</aside>
    `;

  const tplNav = `
<nav class="nav js-navMenu">
  <button class="nav__btnMenuClose js-bntMenuClose">
    <span class="iconbg iconbg-close"></span>
  </button>

  ${tplChoiceLang}

  <ul class="nav__list">
    <li class="nav__list__item">
      <a href="#areaLocation" class="link js-navMenu-link">
        <span class="nav__icon iconbg iconbg-location"></span>
        <span class="text">${txt.location}</span>
      </a>
    </li>
    <li class="nav__list__item">
      <a href="#areaInfo" class="link js-navMenu-link">
        <span class="nav__icon iconbg iconbg-info"></span>
        <span class="text">${txt.info}</span>
      </a>
    </li>
    <li class="nav__list__item">
      <a href="#areaSoftware" class="link js-navMenu-link">
        <span class="nav__icon iconbg iconbg-os"></span>
        <span class="text">${txt.software}</span>
      </a>
    </li>
    <li class="nav__list__item">
      <a href="#areaHardware" class="link js-navMenu-link">
        <span class="nav__icon iconbg iconbg-hardware"></span>
        <span class="text">${txt.hardware}</span>
      </a>
    </li>
    <li class="nav__list__item">
      <a href="#areaConnection" class="link js-navMenu-link">
        <span class="nav__icon iconbg iconbg-connection"></span>
        <span class="text">${txt.connection}</span>
      </a>
    </li>
    <li class="nav__list__item">
      <a href="#areaBattery" class="link js-navMenu-link">
        <span class="nav__icon iconbg iconbg-battery"></span>
        <span class="text">${txt.battery}</span>
      </a>
    </li>
  </ul>
  <ul class="nav__list">
    <li class="nav__list__item">
      <a href="#areaAbout" class="link js-navMenu-link">
        <span class="nav__icon iconbg iconbg-project"></span>
        <span class="text">${txt.aboutme}</span>
      </a>
    </li>
    <li class="nav__list__item">
      <a href="#" class="link js-share-native">
        <span class="nav__icon iconbg iconbg-share"></span>
        <span class="text">${txt.share}</span>
      </a>
    </li>
  </ul>
</nav>
    `;

  // INNER HEADER'S HTML
  const template = `
      <a class="header__linkHome" href="#">
        <span class="header__logo iconbg iconbg-logo"></span>
        <div class="header__info">
          <h1 class="header__h1">${txt.h1}</h1>
          <p class="header__description">${txt.description}</p>
        </div>
      </a>
      <button class="header__btnMenu js-bntMenu" data-label="Menu">
        <span class="iconbg iconbg-menu"></span>
      </button>
      ${tplNav}
    `;
  return template;
};
export default tplHeader;
