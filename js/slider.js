const slider = document.querySelector('.js--choice__slider');
const sliderLine = document.querySelector('.js--choice__sliderline');
const sliderImages = document.querySelectorAll('.js--choice__photo');
const btnNext = document.querySelector('.js--btn--slider');

let sliderCount = 0,
    width = 0;

window.addEventListener('resize', showSlide);

function showSlide() {
    sliderImages.forEach((item) => width = item.clientWidth + 30);

    rollSlide();
}

showSlide();

// let array = [];

// for (let i = 0; i < sliderImages.length; i++) {
//     array[i] = sliderImages[i].src;
//     sliderImages[i].remove();
// }

// let step = 0;

// function draw() {
//     let img = document.createElement('img');
//     img.src = array[step];
//     img.classList.add('choice__photo');
//     sliderLine.append(img);

//     sliderLine.style.transform = `translateX(${-sliderCount * width}px)`;
//     if (step + 1 == array.length) {
//         step = 0;
//     } else {
//         step++;
//     }

// }

// draw(); draw(); draw();

// function left() {
//     let slide= sliderLine.children;


//     for (let i = 0; i < slide.length; i++) {
//         sliderLine.style.transform = `translateX(${-sliderCount * width - width}px)`;
//     }
//     slide[0].remove();
//     draw();
// }

btnNext.onclick = nextSlide;

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

function thisSlide(index) {
    sliderImages.forEach(item => item.classList.remove('choice__photo--big'));
    sliderImages[index].classList.add('choice__photo--big');
}



