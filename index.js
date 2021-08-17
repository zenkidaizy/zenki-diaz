const mobileMenu = document.querySelector('.toggle-menu');
const navBar = document.querySelector('nav');

mobileMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
})