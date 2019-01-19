// Hamburger menu
const nav = document.querySelector('.nav__list');
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerLabel = document.querySelector('.hamburger-label');

hamburger.addEventListener('click', (event) => {
    event ? event : event = window.event;
    event.preventDefault();
    hamburgerMenu.classList.toggle('animate');
    nav.classList.toggle('nav__list--block');

    if (hamburgerLabel.textContent === "Otwórz menu") {
        hamburgerLabel.textContent = "Zamknij menu";
    } else {
        hamburgerLabel.textContent = "Otwórz menu";
    }

})

if (window.innerWidth <= 500) {

    const hide = () => {
        nav.classList.remove('nav__list--block');
        hamburger.classList.remove('anmate');
    };

    const links = [ ...document.querySelectorAll('.clicked') ];
    links.forEach((link) => link.addEventListener('click', hide));
}
