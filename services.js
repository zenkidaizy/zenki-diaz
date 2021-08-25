// Hamburger Menu

const navBar = document.querySelector('nav');
const navMenu = document.querySelector('.hamburger-menu');

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navBar.classList.toggle('active');
});