const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');

const show = () => {
    navLinks.style.display = 'flex';
    navLinks.style.left = '0';
}

const close = () => {
    navLinks.style.left = '-100%';
}

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);