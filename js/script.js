'use strict'

const buttons = document.querySelectorAll('button'),
      calculator = document.querySelector('.calculator'),
      display = document.querySelector('.calculator__inner_form-display')

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
    })
});

const calculatorCondition = {
    currentNumber: 0,
    previousNumber: null,
    operation: null,
    resetScreen: null
};

calculator.addEventListener('click', (e) => {
    if (e.target.classList.contains('button_1')) {
       calculatorCondition.currentNumber = 1;
       display.innerHTML = calculatorCondition.currentNumber;
    } else if (e.target.classList.contains('button_2')) {
       calculatorCondition.currentNumber = 2;
       display.innerHTML = calculatorCondition.currentNumber;
    } else if (e.target.classList.contains('button_3')) {
       calculatorCondition.currentNumber = 3;
       display.innerHTML = calculatorCondition.currentNumber;
    } else if (e.target.classList.contains('button_4')) {
       calculatorCondition.currentNumber = 4;
       display.innerHTML = calculatorCondition.currentNumber;
    } else if (e.target.classList.contains('button_5')) {
       calculatorCondition.currentNumber = 5;
       display.innerHTML = calculatorCondition.currentNumber;
    } else if (e.target.classList.contains('button_6')) {
       calculatorCondition.currentNumber = 6;
       display.innerHTML = calculatorCondition.currentNumber;
    } else if (e.target.classList.contains('button_7')) {
       calculatorCondition.currentNumber = 7;
       display.innerHTML = calculatorCondition.currentNumber;
    } else if (e.target.classList.contains('button_8')) {
       calculatorCondition.currentNumber = 8;
       display.innerHTML = calculatorCondition.currentNumber;
    } else if (e.target.classList.contains('button_9')) {
       calculatorCondition.currentNumber = 9;
       display.innerHTML = calculatorCondition.currentNumber;
    } 
})  




