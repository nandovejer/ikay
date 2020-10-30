var tplMain = function (properties) {
  const txt = properties;

  const tplIntro = `
<!-- INTRO -->
<section class="area area--full">
  <article class="area__article">
    <h2 class="article__title">${txt.main.intro.heading}</h2>
    ${txt.main.intro.content1}
    ${txt.main.intro.content2}
    ${txt.main.intro.content3}
  </article>
</section>
    `;

  const tplAboutme = `
<!-- ABOUT ME -->
<section class="area area--full area--typeinfo">
  <article class="area__article">
    <h2 id="areaAbout" class="aboutme__title">${txt.aboutme.heading}</h2>
    ${txt.aboutme.content1}
    ${txt.aboutme.content2}
  </article>
</section>
    `;

  const cardLocation = `
<!-- CARD LOCATION -->
<article class="js-card js-card-location card card--vertical card--location">
  <div class="card__map js-card-map"></div>
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <div class="card__info">
    <span class="card__info__type js-apiValue-country">...</span>
    <h3 class="card__info__title js-apiValue-city">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.location.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardDevice = `
<!-- CARD DEVICE -->
<article class="js-card js-card-device card card--device">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.device.title}</span>
    <h3 class="card__info__title js-apiValue-device">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.device.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
  <div id="modalCardDevice"></div>
</article>
    `;

  const cardScreen = `
<!-- CARD SCREEN-->
<article class="js-card js-card-screen card card--screen">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-resolution"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.screen.title}</span>
    <h3 class="card__info__title js-apiValue-screen">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.screen.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;
  const cardOrientation = `
<!-- CARD ORIENTATION -->
<article class="js-card js-card-orientation card card--orientation">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-orientation"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.orientation.title}</span>
    <h3 class="card__info__title js-apiValue-orientation">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.orientation.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardDarkmode = `
<!-- CARD DARKMODE -->
<article class="js-card js-card-darkmode card card--darkmode">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-darkmode"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.darkmode.title}</span>
    <h3 class="card__info__title js-apiValue-darkmode">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.darkmode.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardLang = `
<!-- CARD LANG -->
<article class="js-card js-card-lang card card--lang">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-lang"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.lang.title}</span>
    <h3 class="card__info__title js-apiValue-lang">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.lang.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardExit = `
<!-- CARD EXIT -->
<article class="js-card js-card-exit card card--exit">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-exit"></span>
  <div class="card__info">
    <span class="card__info__type js-apiValue-exitTitle">${txt.exit.severaltimes}</span>
    <ul class="card__info__list js-apiValue-exit"></ul>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.exit.severaltimes}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardOs = `
<!-- CARD OS -->
<article class="js-card js-card-os card card--os">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.os.title}</span>
    <h3 class="card__info__title js-apiValue-os">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.os.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
  `;

  const cardBrowser = `
<!-- CARD BROWSER -->
<article class="js-card js-card-browser card card--browser">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.browser.title}</span>
    <h3 class="card__info__title js-apiValue-browser">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.browser.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardConnection = `
    <!-- CARD CONNECTION -->
<article  class="js-card js-card-connection card card--vertical card--connection">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-connection"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.connection.title}</span>
    <h3 class="card__info__title js-apiValue-connection-mbps">...</h3>
    <p class="card__info__description js-apiValue-connection-type">
      ...
    </p>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.header.connection}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardTelco = `
<!-- CARD TELCO -->
<article class="js-card js-card-telco card card--telco">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-telco"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.telco.title}</span>
    <h3 class="card__info__title js-apiValue-telco">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.telco.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardIp = `
<!-- CARD IP -->
<article class="js-card js-card-ip card card--ip">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-ip"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.ip.title}</span>
    <h3 class="card__info__title js-apiValue-ip">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.ip.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardRam = `
<!-- CARD RAM -->
<article class="js-card js-card-ram card card--ram">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-ram"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.ram.title}</span>
    <h3 class="card__info__title js-apiValue-ram">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.ram.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardCpu = `
<!-- CARD CPU -->
<article class="js-card js-card-cpu card card--cpu">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-cpu"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.cpu.title}</span>
    <h3 class="card__info__title js-apiValue-cpu">...</h3>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.cpu.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardGpu = `
<!-- CARD GPU -->
<article class="js-card js-card-gpu card card--gpu">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-gpu"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.gpu.title}</span>
    <h3 class="card__info__title js-apiValue-gpu">...</h3>
  </div>
  <canvas id="glcanvas" width="1" height="1"></canvas>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.gpu.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  const cardBattery = `
<!-- CARD  BATTERY -->
<article class="js-card js-card-battery card card--vertical card--battery">
  <button title="${txt.cardmore}"  class="card__more js-card-more"></button>
  <span class="card__icon icon iconbg-battery"></span>
  <div class="card__info">
    <span class="card__info__type">${txt.battery.title}</span>
    <!-- WIDGET BATTERY -->
    <div class="battery">
      <div class="battery__icon" data-level="0%"></div>
      <aside class="battery__info">
        <ul class="battery__info__list">
          <li class="battery__info__item">
            <span class="battery__info__title">${txt.battery.type.mode}</span>
            <span class="battery__info__value battery__info__value--mode js-battery-mode">-</span
            >
          </li>
          <li class="battery__info__item">
            <span class="battery__info__title">${txt.battery.type.level}</span>
            <span class="battery__info__value js-battery-level">-</span>
          </li>

          <li class="battery__info__item">
            <span class="battery__info__title">${txt.battery.type.charged}</span>
            <span class="battery__info__value js-battery-chargedtimme">-</span>
          </li>

          <li class="battery__info__item">
            <span class="battery__info__title">${txt.battery.type.remaining}</span>
            <span class="battery__info__value js-battery-dischargingtime">-</span>
          </li>
        </ul>
      </aside>
    </div>
  </div>
  <div class="card__noSupport">
    <span class="card__noSupport__type">${txt.battery.title}</span>
    <p class="card__noSupport__description">${txt.main.noSupport}</p>
  </div>
</article>
    `;

  // INNER HEADER'S HTML
  const template = `
      ${tplIntro}

      <section class="area area--location">
        <h3 id="areaLocation" class="area__title">${txt.location.title}</h3>
        ${cardLocation}
      </section>

      <section class="area area--info">
        <h3 id="areaInfo" class="area__title">${txt.header.info}</h3>
        ${cardDevice}
        ${cardScreen}
        ${cardOrientation}
        ${cardDarkmode}
        ${cardLang}
        ${cardExit}
      </section>

      <section class="area area--software">
        <h3 id="areaSoftware" class="area__title">${txt.header.software}</h3>
        ${cardOs}
        ${cardBrowser}
      </section>

      <section class="area area--connection">
        <h3 id="areaConnection" class="area__title">${txt.connection.title}</h3>
        ${cardConnection}
        ${cardTelco}
        ${cardIp}
      </section>

      <section class="area area--hardware">
        <h3 id="areaHardware" class="area__title">${txt.header.hardware}</h3>
        ${cardRam}
        ${cardCpu}
        ${cardGpu}
      </section>

      <section class="area area--foo">
        <h3 id="areaBattery" class="area__title">${txt.battery.title}</h3>
        ${cardBattery}
      </section>

      ${tplAboutme}
    `;

  return template;
};
export default tplMain;
