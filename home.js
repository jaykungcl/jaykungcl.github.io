const animation = document.querySelector('.switch input');
const glitch = document.querySelector('.glitch')

animation.addEventListener('click', () => {
    glitch.classList.toggle('active');
});