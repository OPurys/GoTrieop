const slider = document.querySelector('.js--choice__slider');
const sliderLine = document.querySelector('.js--choice__sliderline');
const sliderImages = document.querySelectorAll('.js--choice__photo');

const btnNext = document.querySelector('.js--btn--slider');


let sliderCount = 0;
let width = 0;


sliderImages.forEach(item => width = item.clientWidth + 30);

btnNext.onclick = (nextSlide);

function thisSlide(index) {
    sliderImages.forEach(item => item.classList.remove('choice__photo--big'));
    sliderImages[index].classList.add('choice__photo--big');
}

function nextSlide() {
    sliderCount++;

    if (sliderCount >= sliderImages.length) {
        sliderCount = 0;
    }

    rollSlide();
    thisSlide(sliderCount);
}

function rollSlide() {
    sliderLine.style.transform = `translateX(${-sliderCount * width}px)`;
}

