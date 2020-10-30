///// TESTING FOO ////
var testing = function () {
  // CSS testing no support
  const card = document.querySelectorAll(".card");
  card.forEach((item) => {
    item.classList.add("noSupport");
  });
};

export default testing;
