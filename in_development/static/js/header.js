const mobileMenu = (function () {
  const mobileMenuBtn = document.querySelector("#mobile-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  let state = closed;

  /*const checkScrollPos = () => {
    const currentScrollPos = window.pageYOffset;
    if () {
    } else {
    }
  };*/

  const showMenu = function () {
    document.body.classList.toggle("stop-scrolling");
    mobileMenu.classList.toggle("show-menu");
  };

  const menuAnimation = bodymovin.loadAnimation({
    container: document.querySelector("#mobile-menu"),
    path: "../static/animations/menu.json",
    renderer: "svg",
    loop: false,
    autoplay: false,
    name: "menuAnimation",
  });

  const animateMenu = function () {
    if (state === "closed") {
      menuAnimation.playSegments([45, 70], true);
      state = "open";
    } else {
      menuAnimation.playSegments([4, 30], true);
      state = "closed";
    }
  };

  //window.addEventListener("scroll", checkScrollPos);
  menuAnimation.goToAndStop(4, true);
  menuAnimation.setSpeed(3);
  mobileMenuBtn.addEventListener("click", showMenu);
  mobileMenuBtn.addEventListener("click", animateMenu);
})();
