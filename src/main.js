import "./style.scss";

const preloader = document.querySelector(".preloader");

window.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {
    preloader.classList.replace("opacity-100", "opacity-0");
  }, 500);
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 2000);
});
