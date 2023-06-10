import { hamburgerMenu } from "../js/contants/hamburger.js";

hamburgerMenu();

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  // link.addEventListener("scroll", (e) => {
  //   link.setAttribute("aria-current", )
  // });
  link.addEventListener("click", (e) => {
    navLinks.forEach((link) => {
      link.removeAttribute("aria-current");
    });

    link.setAttribute("aria-current", "page");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.setAttribute("aria-current", "page");
    }
  });
});

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     entry.target.classList.toogle("show", entry.isIntersecting);
//   });
//   {
//     treshold: 0.5;
//   }
// });

// navLinks.forEach((link) => {
//   observer.observe(navLinks);
// });
