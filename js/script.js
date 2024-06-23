const menuHamburger = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".hmenu");
const body = document.querySelector("body");
const icon = document.querySelector(".menu-icon");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  body.classList.toggle("no-scroll");
  icon.classList.toggle("menu-icon-close");
  icon.classList.toggle("menu-icon-open");
});
