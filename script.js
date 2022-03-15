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
        add(Number(a), Number(b));
    } else if (operator == '-') {
        subtract(a, b);
    } else if (operator == '*') {
        multiply(a, b);
    } else if (operator == '/') {
        divide(a, b);
    }
};

operate(7, '/', 2) 

const numButtons = document.querySelectorAll('button.number');
const screen = document.getElementById('calculator-screen');
const operators = document.querySelectorAll('button.operator');
const equalSign = document.querySelectorAll('button.equal-sign');
let  displayValue = [];
const firstOperand = [];
const operatorStorage = [0];
const secondOperand = [];
const equal = [];

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue.push(button.value);
        screen.value = parseInt(displayValue.join(''));
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        operatorStorage[0] = button.value;
        firstOperand.push(parseInt(displayValue.join('')));
        displayValue = [];
        // the code below works, figure out second operand 
    });
});

equalSign.forEach((button) => {
    button.addEventListener ('click', () => {
    secondOperand.push(parseInt(displayValue.join('')));
    displayValue.push(operate(firstOperand, operatorStorage, secondOperand));
    });
});
console.log(firstOperand);
console.log(operatorStorage);
console.log(secondOperand);

//right now, + is just conatenating the strings.