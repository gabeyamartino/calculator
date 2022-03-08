function add(a, b) {
    console.log(a + b);
    return a + b;
};

function subtract(a, b) {
    console.log(a - b);
    return a - b;
};

function multiply(a, b) {
    console.log(a * b);
    return a * b;
};

function divide(a, b) {
    console.log(a / b);
    return a / b;
};

function operate(a, operator, b) {
    if (operator == '+') {
        add(a, b);
    } else if (operator == '-') {
        subtract(a, b);
    } else if (operator == '*') {
        multiply(a, b);
    } else if (operator == '/') {
        divide(a, b);
    }
};

operate(7, '/', 2) 

const numButtons = document.querySelectorAll('button');
const screen = document.getElementById('calculator-screen');
const container = document.querySelector(".container");

console.log(numButtons)
console.log(screen)
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        screen.textContent = 'button.value';
        console.log(button.value)
    });
});