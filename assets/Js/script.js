const ul = document.querySelector("ul");
const navBar = document.querySelector(".navbar")

navBar.addEventListener("click", () => {
    ul.classList.toggle("showMenu")
})