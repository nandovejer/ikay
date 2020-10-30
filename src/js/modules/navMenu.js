import choiceLang from "./choiceLang";
var navMenu = {
  init: function () {
    const btnMenu = document.querySelector(".js-bntMenu");
    const navScope = document.querySelector(".js-navMenu");
    const btnMenuClose = navScope.querySelector(".js-bntMenuClose");
    const navLink = document.querySelectorAll(".js-navMenu-link");
    const html = document.querySelector("html");
    let headerHeight = document.querySelector("#appHeader").offsetHeight + 20;
    const className = {
      openMenu: "openMenu",
      closeMenu: "closeMenu",
    };

    // refactor this
    const showMenu = () => {
      navScope.classList.add(className.openMenu);
      btnMenu.classList.add(className.openMenu);
    };
    const closeMenu = () => {
      navScope.classList.remove(className.openMenu);
      btnMenu.classList.remove(className.openMenu);
    };

    // Events
    choiceLang.init();
    btnMenu.addEventListener("click", showMenu);
    btnMenuClose.addEventListener("click", closeMenu);
    navLink.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        // let anchor = window.location.hash;
        let anchor = item.getAttribute("href");
        let selectorAnchor = document.querySelector(anchor);
        selectorAnchor.focus();
        html.scrollTo({
          top: selectorAnchor.offsetTop - headerHeight,
          behavior: "smooth",
        });
        closeMenu();
      });
    });
  },
};

export default navMenu;
