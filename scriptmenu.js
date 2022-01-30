'use strict';

let brandDark = document.querySelector('.brandDark');
let headerBars = document.querySelector('.headerBars');
let menuCross = document.querySelector('.menuCross');

function toggleMenu() {
    brandDark.classList.toggle('hidden');
}

headerBars.addEventListener('click', toggleMenu);
menuCross.addEventListener('click', toggleMenu);
