document.querySelector('#copyright-year').innerHTML = new Date().getFullYear()

const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar__mobile__toggle');
const heroImage = document.querySelector('.hero__img');

const shrinkNavbar = () => {
    navbar.classList.add('navbar--scrolled');
}

const expandNavbar = () => {
    navbar.classList.remove('navbar--scrolled');
}

const toggleMobileNavbar = () => {
    navbar.classList.toggle('navbar--toggled');
}

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100){
        shrinkNavbar()
    }else{
        expandNavbar()
    }
    heroImage.style.bottom = `${window.pageYOffset * -0.5}px`
})

navbarToggler.addEventListener('click', toggleMobileNavbar);