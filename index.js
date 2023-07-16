let theme_ = "white";
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");
const info = document.querySelector(".info");

function changeTheme(theme) {
  if (theme == "white") {
    nav.classList.remove("nav_dark");
    main.classList.remove("main_dark");
    info.classList.remove("info_dark");
    theme_ = "dark";
  } else {
    nav.classList.add("nav_dark");
    main.classList.add("main_dark");
    info.classList.add("info_dark");
    theme_ = "white";
  }
}

const button = document.querySelector(".main__button");

button.addEventListener("click", () => {
  changeTheme(theme_);
});
// dsmfasdfmads.fmas,d
