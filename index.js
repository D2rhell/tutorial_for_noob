const button = document.querySelector(".main_button");

button.addEventListener("click", () => {
  changeTheme();
});

let theme = "white";
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");
const info = document.querySelector(".info");

function changeTheme() {
  if (theme == "white") {
    nav.classList.remove("nav_dark");
    main.classList.remove("main_dark");
    info.classList.remove("info_dark");
    theme = "dark";
  } else {
    nav.classList.add("nav_dark");
    main.classList.add("main_dark");
    info.classList.add("info_dark");
    theme = "white";
  }
}
