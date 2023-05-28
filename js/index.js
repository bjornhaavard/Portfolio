import { hamburgerMenu } from "../js/contants/hamburger.js";

hamburgerMenu();

// function scrollToSection(event) {
//   event.preventDefault();

//   const sectionId = event.target.getAttribute("href");
//   const section = document.querySelector(sectionId);

//   if (section) {
//     section.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//       inline: "nearest",
//       duration: 2000,
//     });
//   }
// }

// const scrollLinks = document.querySelectorAll(".scroll-link");
// scrollLinks.forEach(function (link) {
//   link.addEventListener("click", scrollToSection);
// });

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
  console.log("hi");
});
