document.querySelector('#copyright-year').innerHTML = new Date().getFullYear()

const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar__mobile__toggle');
const heroImage = document.querySelector('.hero__img');
const backToTopBtn = document.querySelector('.back-to-top');

const shrinkNavbar = () => navbar.classList.add('navbar--scrolled');
const showBackToTop = () => backToTopBtn.classList.add('back-to-top--show');

const expandNavbar = () => navbar.classList.remove('navbar--scrolled');
const hideBackToTop = () => backToTopBtn.classList.remove('back-to-top--show');

const toggleMobileNavbar = () => navbar.classList.toggle('navbar--toggled');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100){
        shrinkNavbar()
        showBackToTop()
    }else{
        expandNavbar()
        hideBackToTop()
    }
    heroImage.style.bottom = `${window.pageYOffset * -0.5}px`
})

navbarToggler.addEventListener('click', toggleMobileNavbar);
backToTopBtn.addEventListener('click', () => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
}));