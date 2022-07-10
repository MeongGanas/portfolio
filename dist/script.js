// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixnav = header.offsetTop;

  if (window.pageYOffset > fixnav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.getElementById("hamburger");
const navmenu = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});

// toggle
const toggle = document.getElementById("toggle");
const html = document.querySelector("html");
toggle.addEventListener("click", () => {
  toggle.checked ? html.classList.add("dark") : html.classList.remove("dark");
});
