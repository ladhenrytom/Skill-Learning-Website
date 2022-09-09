"use strict";

// selecting elements
const menuBtn = document.querySelector(".menu-button");
const menuBtnClose = document.querySelectorAll(".menu-button_bar");
const mobileNav = document.querySelector(".mobile-nav-links");
const allSections = document.querySelectorAll(".section");

//event listeners
menuBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
  closeMenu();
});
allSections.forEach((el) => {
  el.addEventListener("click", () => {
    collapseNav();
    menuBtnClose.forEach((el) => {
      el.classList.remove("menu-button_close");
    });
    menuBtnClose.forEach((el) => {
      el.classList.remove("menu-button_close");
    });
  });
});
window.addEventListener("resize", function () {
  collapseNav();
  menuBtnClose.forEach((el) => {
    el.classList.remove("menu-button_close");
  });
});

// functions
// 1. collapse nav on clicking anywhere on page
const collapseNav = function () {
  mobileNav.classList.remove("open");
};
// 2. close button function
const closeMenu = function () {
  menuBtnClose.forEach((el) => {
    el.classList.toggle("menu-button_close");
  });
};

//slider/////////
//////
//////////////////
const sliders = function () {
  const slides = document.querySelectorAll(".jumbotron--slide");
  const btnLeft = document.querySelector(".prev");
  const btnRight = document.querySelector(".next");
  let curSlide = 0;
  const maxSlide = slides.length;
  const dotContainer = document.querySelector(".dots");

  //functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<span class="dot" data-slide="${i}"></span>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(curSlide);
  };
  init();
  //event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      // const slide = e.target.dataset.slide; //data-slide
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
sliders();
// setTimeout(goToSlide(slides), 2000);
