'use strict'

const buttons = document.querySelectorAll('button'),
      calculator = document.querySelector('.calculator');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
    })
});




