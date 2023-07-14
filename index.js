let theme = "white";
function changeTheme() {
  let theme1 = document.querySelector(".nav");
  let theme2 = document.querySelector(".main");
  let theme3 = document.querySelector(".info");
  if (theme == "white") {
    theme1.classList.remove("nav_dark");
    theme2.classList.remove("main_dark");
    theme3.classList.remove("info_dark");
    theme = "dark";
  } else {
    theme1.classList.add("nav_dark");
    theme2.classList.add("main_dark");
    theme3.classList.add("info_dark");
    theme = "white";
  }
}
// setInterval(function changeTheme() {
//   let theme1 = document.querySelector(".nav");
//   let theme2 = document.querySelector(".main");
//   let theme3 = document.querySelector(".info");
//   if (theme == "white") {
//     theme1.classList.remove("nav_dark");
//     theme2.classList.remove("main_dark");
//     theme3.classList.remove("info_dark");
//     theme = "dark";
//   } else {
//     theme1.classList.add("nav_dark");
//     theme2.classList.add("main_dark");
//     theme3.classList.add("info_dark");
//     theme = "white";
//   }
// }, 1000); - я в теме аллоооооооооо
