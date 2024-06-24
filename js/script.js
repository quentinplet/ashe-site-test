const menuHamburger = document.querySelectorAll(".menu-icon");
const navLinks = document.querySelector(".hmenu");
const body = document.querySelector("body");
const openMenuIcon = document.querySelector(".menu-icon");
const closeMenuIcon = document.querySelector(".close-menu-icon");

console.log(menuHamburger);

menuHamburger.forEach((menu) => {
  menu.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
    body.classList.toggle("no-scroll");
    openMenuIcon.classList.toggle("hidden");
    closeMenuIcon.classList.toggle("hidden");
  });
});
