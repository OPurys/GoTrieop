// Slider

const slider = document.querySelector('.choice__slider');
const sliderLine = document.querySelector('.choice__sliderline');
const sliderImages = document.querySelectorAll('.choice__photo');

const btnNext = document.querySelector('.btn--slider');


let sliderCount = 0;
let width = 0;


sliderImages.forEach(item => width = item.clientWidth)

btnNext.addEventListener('click', nextSlider);


function thisSlide(index) {
    sliderImages.forEach(item => item.classList.remove('choice__photo--big'))
    sliderImages[index].classList.add('choice__photo--big');
}

function nextSlider() {
    sliderCount++;


    if (sliderCount >= sliderImages.length) {
        sliderCount = 0;
    }

    rollSlider();
    thisSlide(sliderCount);
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * width}px)`;
}

