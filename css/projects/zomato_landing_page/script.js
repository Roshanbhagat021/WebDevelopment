const responsiveMenu = document.querySelector("#responsive-menu");
const menuIconElement = document.querySelector("#menu-icon");
const closeIconElement = document.querySelector("#close-btn");

menuIconElement.addEventListener("click", () => {
    console.log("hello");
    responsiveMenu.classList.toggle("open"); // Add the "open" class to show the menu
});

closeIconElement.addEventListener("click", () => {
    responsiveMenu.classList.toggle("open"); // Remove the "open" class to hide the menu
});