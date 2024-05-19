const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}


menuButton.addEventListener("click", toggleMenu);


document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 600) {
        document.querySelector(".menu").classList.add("hide");
    }
});


window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        document.querySelector(".menu").classList.remove("hide");
    } else {
        document.querySelector(".menu").classList.add("hide");
    }
});
