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


const thisYear =document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();