const numButtons = document.querySelectorAll('button.number');
const screen = document.getElementById('calculator-screen');
const operators = document.querySelectorAll('button.operator');
const equalSign = document.querySelectorAll('button.equal-sign');
const clear = document.querySelectorAll('button.all-clear');
const decimal = document.querySelectorAll('button.decimal');
const firstOperand = [];
const secondOperand = [];
const operationResult = [];
let operatorStorage = [];
let displayValue = [];


function add(a, b) {
    screen.value = parseFloat((a + b).toFixed(4));
    return a + b;
};

function subtract(a, b) {
    screen.value = parseFloat((a - b).toFixed(4));
    return a - b;
};

function multiply(a, b) {
    screen.value = parseFloat((a * b).toFixed(4));
    return a * b;
};

function divide(a, b) {
    screen.value = parseFloat((a / b).toFixed(4));
    return a / b;
};

function operate(a, operator, b) {
    if (operator == '+') {
        return add(Number(a), Number(b));
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    }
};

function enableButton() {
    decimal.forEach((button) =>{
      button.disabled = false;
    });
};

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue.push(button.value);
        screen.value = displayValue.join('');
    });
});

// Upon clicking the operator button the first time, it stores 
// the first operand, and the chosen operator.
// Clicking an operator the second time then stores the second operand,
// runs operate() on first, operator, and second, and assigns that result
// to first. It stores the chosen operator, and allows for another second.

operators.forEach((button) => {
    button.addEventListener('click', () => {
      if (operatorStorage.length === 0) {
        operatorStorage[0] = button.value;
        firstOperand[0] = screen.value;
        button.disabled = true;
      } else {
        secondOperand[0] = screen.value;
        firstOperand[0] = operate(firstOperand, operatorStorage, secondOperand);
        operatorStorage[0] = button.value;
        button.disabled = true;
    }
        displayValue = [];
        enableButton();
    });
});

equalSign.forEach((button) => {
    button.addEventListener ('click', () => {
    secondOperand[0] = screen.value;
    firstOperand[0] = (operate(firstOperand, operatorStorage, secondOperand));
    operatorStorage = [];
    enableButton();
    });
});

clear.forEach((button) => {
    button.addEventListener ('click', () => {
        firstOperand[0] = '';
        operatorStorage = [];
        secondOperand[0] = '';
        displayValue = [];
        screen.value = 0;
    });
});


decimal.forEach((button) => {
    button.addEventListener ('click', () => {
        displayValue.push(button.value);
        screen.value = displayValue.join('');
        button.disabled = true; 
    });
});