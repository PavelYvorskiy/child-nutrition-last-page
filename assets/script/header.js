const btnActiveNavMenu = document.querySelector(".navbar-navigation__btn");
const navbarMob = document.querySelector(".navbar-mob");
btnActiveNavMenu.addEventListener("click", () => {
  btnActiveNavMenu.classList.toggle("active");
  navbarMob.classList.toggle("active");
});