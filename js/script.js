'use strict'

const numberButtons = document.querySelectorAll('.number_button'),
      calculator = document.querySelector('.calculator'),
      buttons = document.querySelectorAll('button'),
      display = document.querySelector('.calculator__inner_form-display');
      
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
      })
   })
}

addCurrentNumber();

// buttons.forEach(btn => {
//    btn.addEventListener('click', (e) => {
//       e.preventDefault();
//       target = e.target.innerHTML;
//       currentNumber += target;
//       display.innerHTML = currentNumber;
//    })
// })







      // const calculatorCondition = {
//     currentNumber: 0,
//     previousNumber: null,
//     operation: null,
//     resetScreen: null
// };

// buttons.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
//         const target = e.target.innerHTML;
//         for (let i = 0; i<=9; i++) {
//          calculatorCondition.currentNumber = `${target}`;
//         }
//     })
// });








