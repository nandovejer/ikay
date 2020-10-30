var fullscreen = {
  init: (el) => {
    el.addEventListener("click", () => {
      document.querySelector("body").requestFullscreen();
    });
  },
  exit: (el) => {
    el.addEventListener("click", () => {
      document.exitFullscreen();
    });
  },
};

export default fullscreen;
