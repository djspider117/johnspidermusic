// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Back to Top Button
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    let button = document.getElementById('back-to-top');
    let nav = document.getElementsByTagName('nav')[0];
    let logo = document.getElementById('logo');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.classList.add('show');
        nav.classList.add('nav-bg');
        logo.classList.add('show');
    } else {
        button.classList.remove('show');
        nav.classList.remove('nav-bg');
        logo.classList.remove('show');
    }
};

// Smooth scroll to the top when the button is clicked
document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});