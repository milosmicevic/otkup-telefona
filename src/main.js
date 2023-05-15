import "./style.scss";

const preloader = document.querySelector(".preloader");
const callLink = document.querySelector(".call-link");

window.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    preloader.classList.replace("opacity-100", "opacity-0");
  }, 500);
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 2000);
});

callLink.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    window.open("tel:+381654449999", "_self");
  }, 300);
});
