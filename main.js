let menuBar = document.querySelector("#menu-bar");
let navLinks = document.querySelector(".nav");

menuBar.addEventListener("click", openMenu);

function openMenu() {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    menuBar.style.color = "#ffffff";
  } else {
    menuBar.style.color = "";
  }
}
