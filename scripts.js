const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    nav.classList.toggle('open');
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinksFade .5s ease forwards ${index / 7 + .3}s`;
        }
    });
});
