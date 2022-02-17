const mobileMenu = (function () {
  const mobileMenuBtn = document.querySelector("#mobile-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  let state = closed;

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

  menuAnimation.goToAndStop(4, true);
  menuAnimation.setSpeed(3);
  mobileMenuBtn.addEventListener("click", showMenu);
  mobileMenuBtn.addEventListener("click", animateMenu);
})();

const secondaryDropdownNavs = (function () {
  const secondaryDropdownBtns = document.querySelectorAll(".secondary-dropdown-button");
  const toBeShiftedRightEls = document.querySelectorAll(".to-be-shifted");
  let secondaryDropdownOpen = false;
  let openSecondaryId = null;

  const recycleShiftedUpMenus = () => {
    if (document.querySelector(".shifted-up")) {
      console.log("firing");
      const elToRecycle = document.querySelector(".shifted-up");
      elToRecycle.classList.remove("shifted-up");
      elToRecycle.classList.remove("visible");
    }
  };

  const showDropdown = (e) => {
    recycleShiftedUpMenus();
    console.log(openSecondaryId);
    console.log(e.target.getAttribute("data-i") == openSecondaryId);
    if (e.target.getAttribute("data-i") == openSecondaryId) {
      const id = Number(e.target.getAttribute("data-i"));
      document.querySelector(".secondary-dropdown.visible").classList.remove("visible");
      document.querySelector(`.secondary-dropdown-button[data-i="${id}"] i`).classList.toggle("rotated");
      toBeShiftedRightEls.forEach((el) => {
        el.classList.remove("shifted-right");
      });
      secondaryDropdownOpen = false;
      openSecondaryId = null;
    } else if (secondaryDropdownOpen) {
      document.querySelector(".rotated").classList.toggle("rotated");
      document.querySelector(".secondary-dropdown.visible").classList.add("shifted-up");
      const id = Number(e.target.getAttribute("data-i"));
      document.querySelector(`#dropdown-${id}`).classList.add("visible");
      document.querySelector(`.secondary-dropdown-button[data-i="${id}"] i`).classList.add("rotated");
      openSecondaryId = id;
    } else {
      const id = Number(e.target.getAttribute("data-i"));
      document.querySelector(`#dropdown-${id}`).classList.add("visible");
      toBeShiftedRightEls.forEach((el) => {
        el.classList.add("shifted-right");
      });
      document.querySelector(`.secondary-dropdown-button[data-i="${id}"] i`).classList.toggle("rotated");
      secondaryDropdownOpen = true;
      openSecondaryId = id;
    }
  };

  secondaryDropdownBtns.forEach((el) => el.addEventListener("click", showDropdown));
})();
