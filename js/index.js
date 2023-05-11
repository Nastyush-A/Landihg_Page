// Burger Menu //

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

// Contact Us //

const buttonContactUs = document.querySelector(".button-red");
const contactUsPopUp = document.querySelector(".contactUs__popup");

function contactUsShowPopUp(evt) {
    evt.preventDefault();
    contactUsPopUp.classList.toggle("contactUs__show__popup")
};

buttonContactUs.addEventListener("click", contactUsShowPopUp)