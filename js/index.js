import { hamburgerMenu } from "../js/contants/hamburger.js";

hamburgerMenu();

// document.querySelectorAll(".nav-links").forEach((link) => {
//   if (link.href === window.location.href) {
//     link.setAttribute("aria-current", "location");
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.setAttribute("aria-current", "page");
    }
  });
});
