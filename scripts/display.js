const accordion = document.querySelector(".header__more-accordion");
const nav = document.querySelector(".header__header-menu");
const xButton = document.querySelector(".header__x-button");
const chevron = document.querySelector(".header__menu-chev");
const hamsvg = document.querySelector(".header__hamburger-icon");
const xsvg = document.querySelector(".header__x-icon");

function accordionOnClick() {
  if (accordion.style.display == "none") {
    accordion.style.display = "block";
    chevron.style.transform = "rotate(180deg)";
  } else {
    accordion.style.display = "none";
    chevron.style.transform = "none";
  }
}

function hamburgerOnClick() {
  if (hamsvg.style.display != "none") {
    hamsvg.style.display = "none";
    nav.style.display = "flex";
    xsvg.style.display = "block";
    xsvg.style.left = "unset";
    nav.style.left = "0";
  } else if (xsvg.style.display === "block") {
    nav.style.left = "100%";
    xsvg.style.left = "100%";
    hamsvg.style.display = "block";
  }
}
