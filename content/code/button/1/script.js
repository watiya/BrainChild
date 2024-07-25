// toggle burger
const burgerMenu = document.querySelector("#burger-menu");
const burger = document.querySelector(".burger");
burger.addEventListener("click", toggleBurger);

function toggleBurger(){
   this.classList.toggle("active");
   burgerMenu.classList.toggle("active");
}
// toggle menu
const toggler = document.querySelector(".toggle");
toggler.addEventListener("click", toggleMenu);

function toggleMenu(){
   this.classList.toggle("active");
}