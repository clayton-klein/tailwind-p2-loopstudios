const hamburgerBtn = document.getElementById("menu-btn");
const hamburgerMenu = document.getElementById("hamburgerMenu");

hamburgerBtn.addEventListener("click", hamburgerToggle);

function hamburgerToggle() {
  // change hamburger icon
  hamburgerBtn.classList.toggle("menu-opened");
  // remove/add hidden class
  hamburgerMenu.classList.toggle("hidden");
  // add/remove flex class
  hamburgerMenu.classList.toggle("flex");
}
