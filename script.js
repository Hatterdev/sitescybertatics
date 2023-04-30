'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
  DePayWidgets.Payment({
    integration: 'ebe6bcd7-1d6c-4f35-87cc-e837b87a1b20',
    accept: [
      {
        blockchain: 'ethereum',
        amount: 6,
        token: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        receiver: '0x0d97A55933837094104dde50d3620739fc5a4FAB'
      }, {
        blockchain: 'bsc',
        amount: 6,
        token: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        receiver: '0x0d97A55933837094104dde50d3620739fc5a4FAB'
      }
    ]
});


