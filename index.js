// Variables

const navMenu = document.querySelector('.hamburger-menu');
const heading = document.querySelector('h1');

// Navigation

navMenu.addEventListener('click', () => {
    const navBar = document.querySelector('nav');
    const heroSection = document.querySelector('.hero-section');
    const greenSmudge = document.querySelector('.green-smudge');
    const violetSmudge = document.querySelector('.title-background');

    navMenu.classList.toggle('open');
    navBar.classList.toggle('active');
    heroSection.classList.toggle('shift');
    greenSmudge.classList.toggle('opacity');
    violetSmudge.classList.toggle('disappear');
    heading.classList.toggle('violet');
})

// Hero Section

