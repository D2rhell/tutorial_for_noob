let theme_ = "white";
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");
const info = document.querySelector(".info");
const event2 = [...document.querySelectorAll(".nav__item")];
const event3 = document.querySelector(".nav__burger");

function changeTheme(theme) {
  if (theme == "white") {
    nav.classList.remove("nav_dark");
    main.classList.remove("main_dark");
    info.classList.remove("info_dark");
    event2.map((i) => i.classList.remove("nav__item_dark"));
    event3.classList.remove("nav__burgerDark");
    theme_ = "dark";
  } else {
    nav.classList.add("nav_dark");
    main.classList.add("main_dark");
    info.classList.add("info_dark");
    event2.map((i) => i.classList.add("nav__item_dark"));
    event3.classList.add("nav__burgerDark");
    theme_ = "white";
  }
}

const button = document.querySelector(".main__button");

button.addEventListener("click", () => {
  changeTheme(theme_);
});

const event1 = [...document.querySelectorAll(".nav__item")];

event1.map((j) =>
  j.addEventListener("click", function () {
    event1.map((i) => {
      i.classList.remove("nav__item_selected");
    });
    this.classList.add("nav__item_selected");
  })
);
