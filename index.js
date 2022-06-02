// Variables

const navMenu = document.querySelector('.hamburger-menu');
const heading = document.querySelector('h1');
const header = document.querySelector('header');
const testimonials = document.getElementById('testimonials');
const cta = document.querySelector('a.cta');

// Hamburger Menu

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
    cta.classList.toggle('cta-open');
});

// Nav Menu Position on Scroll

observer = new IntersectionObserver((entry, observer) => {
    const menuBars = document.querySelectorAll('.menu-bar');

    navMenu.classList.toggle('move');
    menuBars.forEach(bar => {
        bar.classList.toggle('magenta-bars');
    });
}, {threshold: 0.6});

observer.observe(header);

testimonialsObserver = new IntersectionObserver((entry, observer) => {
    const menuBars = document.querySelectorAll('.menu-bar');

    navMenu.classList.toggle('move');
    menuBars.forEach(bar => {
        bar.classList.toggle('magenta-bars');
    });
}, {threshold: 0});

testimonialsObserver.observe(testimonials);