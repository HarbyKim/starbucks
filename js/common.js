'use strict'

const searchEl = document.querySelector('.search');
const serachInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    serachInputEl.focus();
});

serachInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    serachInputEl.setAttribute('placeholder','통합 검색');
});

serachInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    serachInputEl.setAttribute('placeholder','');
});

new Swiper('.awards .swiper-container', {
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
      prevEl: '.awards .swiper-prev',
      nextEl: '.awards .swiper-next'
  }
});

const thisYear =document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();