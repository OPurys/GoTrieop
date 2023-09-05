"use strict"

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    speed: 700, 
    effect: 'coverflow',
    spaceBetween: 10,
   
    keyboard: {
        enabled: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    navigation: {
        prevEl: '.btn--slider',
    },
});

