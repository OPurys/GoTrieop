const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const headerInner = document.querySelector('.header__inner');

burger.onclick = function () {
    nav.classList.toggle('show');
}

window.onscroll = function () {
    if (window.scrollY > headerInner.clientHeight) {
        headerInner.classList.add('fixed');
    } else { headerInner.classList.remove('fixed'); }
}





