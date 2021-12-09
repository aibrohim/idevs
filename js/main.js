const burger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("header__menu--open");
    burger.classList.toggle("hamburger--open");
  })
  
  menu.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      menu.classList.toggle("header__menu--open");
      burger.classList.toggle("hamburger--open");
    }
  })
}

const serviceItems = document.querySelectorAll(".services__item");
if (serviceItems) {
  const leftCount = serviceItems.length % 3;
  for (let i = 1; i < serviceItems.length; i += 3) {
    serviceItems[i].classList.add("services__item--pull-down");
  }
  if (leftCount) {
    for (let i = 1; i <= leftCount; i++) {
      serviceItems[serviceItems.length - i].classList.add("services__item--pull-down");
    }
  }
}

const header = document.querySelector(".header")
if (header) {
  document.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      if (!header.classList.contains("header--scroll")) {
        header.classList.add("header--scroll")
      }
    } else {
      header.classList.remove("header--scroll")
    }
  })
}

const feedbacks = document.querySelector(".feedbacks__list");

if (feedbacks) {
  tns({
    container: ".feedbacks__list",
    autoplay: true,
    speed: 700,
    // autoWidth: true,
    controls: true,
    controlsContainer: ".feedbacks__controls",
    nav: false,
    autoplay: true,
    autoplayButtonOutput: false,
    autoHeight: false,
  })
}

const screenshots = document.querySelector(".project-info__screenshots");
const screenshotFull = document.querySelector(".screenshot-modal");
const closeScreenshot = document.querySelector(".screenshot-modal__close");

if (screenshots) {
  screenshots.addEventListener("click", (evt) => {
    screenshotFull.classList.add("screenshot-modal--open")
  })

  closeScreenshot.addEventListener("click", () => {
    screenshotFull.classList.remove("screenshot-modal--open")
  })
}

const relBlogs = document.querySelector(".related-blogs__list");

if (relBlogs) {
  tns({
    container: relBlogs,
    speed: 700,
    // autoWidth: true,
    controls: false,
    nav: true,
    navContainer: ".related-blogs__controls",
    autoplay: true,
    autoplayButtonOutput: false
  })
}