'use strict'

const numberButtons = document.querySelectorAll('.number_button'),
      calculator = document.querySelector('.calculator'),
      buttons = document.querySelectorAll('button'),
      display = document.querySelector('.calculator__inner_form-display'),
      removeButton = document.querySelector('.remove_button');
      
// РЕАЛИЗАЦИЯ ВЫВОДА НА ДИСПЛЕЙ

let currentNumber = [],
    target;

buttons.forEach(btn => {
   btn.addEventListener('click', (e) => {
      e.preventDefault();
   })
})

function addCurrentNumber() {
   numberButtons.forEach(button => {
      button.addEventListener('click', (e) => {
         target = e.target.textContent;
         currentNumber.push(target);
         if (currentNumber[0] === '0') {
            currentNumber.pop();
         } else {
            display.innerHTML = currentNumber.join('');
         }
         if (currentNumber.length > 20) {
            currentNumber.pop();
            display.innerHTML = currentNumber.join('');
         }
      })
   })
}

addCurrentNumber();

// РЕАЛИЗАЦИЯ КНОПКИ СТЕРЕТЬ

function removeCurrentNumber() {
   removeButton.addEventListener('click', (e) => {
      currentNumber.length = 0;
      display.innerHTML = currentNumber.join('');
   })
}

removeCurrentNumber();

// РЕАЛИЗАЦИЯ ФУНКЦИОНАЛЬНЫХ КНОПОК














