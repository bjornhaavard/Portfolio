import { hamburgerMenu } from "./constants/hamburger.js";

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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    console.log(entries);
  });
  {
    treshold: 1;
  }
});

// const section = document.querySelectorAll("section");

navLinks.forEach((link) => {
  observer.observe(link);
  console.log(link);
});
