let theme = "white";
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");
const info = document.querySelector(".info");
const navItems = document.querySelectorAll(".nav__item");
const navBurger = document.querySelector(".nav__burger");

function changeTheme() {
  if (theme == "white") {
    nav.classList.remove("nav_dark");
    main.classList.remove("main_dark");
    info.classList.remove("info_dark");
    navItems.forEach((i) => {
      i.classList.remove("nav__item_dark");
    });
    theme = "dark";
  } else {
    nav.classList.add("nav_dark");
    main.classList.add("main_dark");
    info.classList.add("info_dark");
    navItems.forEach((i) => {
      i.classList.add("nav__item_dark");
    });
    theme = "white";
  }
}

const button = document.querySelector(".main__button");

button.addEventListener("click", () => {
  changeTheme();
});

navItems.forEach((navItem) =>
  navItem.addEventListener("click", function () {
    navItems.forEach((i) => {
      i.classList.remove("nav__item_selected");
    });
    navItem.classList.add("nav__item_selected");
  })
);
