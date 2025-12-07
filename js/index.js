const button = document.querySelector(".category-btn");
const category = document.querySelectorAll(".nav-selector li");

const navBar = document.querySelector(".nav-bar");
const subMenuBar = navBar.querySelector("ul");

const navCarousel = document.querySelector(".nav-carousel");
const subMenuCarousel = navCarousel.querySelector("ul");

const navDropdown = document.querySelector(".nav-dropdown");
const subMenuDropdown = navDropdown.querySelector("ul");

const navMenu = document.querySelector(".nav-menu");
const subMenuMenu = navMenu.querySelector("ul");

const navNavigation = document.querySelector(".nav-navigation");
const subMenuNavigation = navNavigation.querySelector("ul");

button.addEventListener("click", () => {
  category.forEach((li) => {
    li.classList.toggle("active");
  });
});

navBar.addEventListener("click", () => {
  subMenuBar.classList.toggle("active");
});

navCarousel.addEventListener("click", () => {
  subMenuCarousel.classList.toggle("active");
});

navDropdown.addEventListener("click", () => {
  subMenuDropdown.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
  subMenuMenu.classList.toggle("active");
});

navNavigation.addEventListener("click", () => {
  subMenuNavigation.classList.toggle("active");
});
