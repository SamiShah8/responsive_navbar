const crossBtn = document.getElementById("x-button");
const showBtn = document.getElementById("hamburger-button");
const mobileNav = document.getElementById("mb_nav");

const crossClickHandler = function () {
  mobileNav.style.transform = "translateX(100%)";
};

const showClickHandler = function () {
  mobileNav.style.transform = "translateX(0)";
};

showBtn.addEventListener("click", showClickHandler);
crossBtn.addEventListener("click", crossClickHandler);
