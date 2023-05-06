const burgerButton = document.querySelector(".burger__button")
const burgerMenu = document.querySelector(".burger__menu")

const handleClick = () => {
    if (burgerMenu.classList.contains("hide-popup")) {
        burgerMenu.classList.remove("hide-popup")
    } else {
        burgerMenu.classList.toggle("hide-popup")
    }
}

burgerButton.addEventListener("click", handleClick)