const menu = document.querySelector(".ham-menu");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
    body.classList.toggle("active");
})