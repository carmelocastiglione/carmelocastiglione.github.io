const button = document.getElementById("hamburger-menu");
const nav = document.getElementById("navigation-menu");
const logo = document.getElementById("logo");
const header = document.getElementById("header");

button.addEventListener("click", () => {
  nav.classList.toggle("show");
  logo.classList.toggle("hide");
  header.classList.toggle("hide");
});
