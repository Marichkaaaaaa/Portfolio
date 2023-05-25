let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");

function toggle() {
  menu.classList.toggle("active");
  document.body.classList.toggle("lock");
}

const menuLinks = document.querySelectorAll(".mob-menu-link");

menuLinks.forEach((el) => {
  el.addEventListener("click", toggle);
});

menuBtn.addEventListener("click", toggle);