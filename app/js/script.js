document.addEventListener("DOMContentLoaded", (event) => {
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.querySelector("body");

  const btnHam = document.querySelector(".header__btn--ham");
  const btnClose = document.querySelector(".header__btn--close");

  const navList = document.querySelector(".header__nav-list");

  btnHam.addEventListener("click", (event) => {
    body.classList.toggle("no-scroll");
    btnHam.classList.toggle("none");

    btnClose.classList.toggle("none");
    mobileNav.classList.toggle("has-fade");
    navList.classList.toggle("has-fade");
  });

  btnClose.addEventListener("click", () => {
    body.classList.toggle("no-scroll");
    btnHam.classList.toggle("none");

    btnClose.classList.toggle("none");
    mobileNav.classList.toggle("has-fade");
    navList.classList.toggle("has-fade");
  });
});
