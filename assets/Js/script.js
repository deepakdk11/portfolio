const ul = document.querySelector("ul");
const navBar = document.querySelector(".navbar");
const copy = document.querySelector(".copyright");

const year = new Date().getFullYear();
copy.innerHTML = `Copyright © ${year}`

navBar.addEventListener("click", () => {
    ul.classList.toggle("showMenu")
})