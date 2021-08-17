const mobileMenu = document.querySelector('.toggle-menu');
const navBar = document.querySelector('nav');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    navBar.classList.toggle('active');
})