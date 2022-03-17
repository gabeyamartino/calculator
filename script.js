const numButtons = document.querySelectorAll('button.number');
const screen = document.getElementById('calculator-screen');
const operators = document.querySelectorAll('button.operator');
const equalSign = document.querySelectorAll('button.equal-sign');
let displayValue = [];
const firstOperand = [];
const operatorStorage = [0];
const secondOperand = [];


function add(a, b) {
    screen.value = (a + b);
    return a + b;
};

function subtract(a, b) {
    screen.value = (a - b);
    return a - b;
};

function multiply(a, b) {
    screen.value = (a * b);
    return a * b;
};

function divide(a, b) {
    screen.value = (a / b);
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

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayValue.push(button.value);
        screen.value = parseInt(displayValue.join(''));
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        operatorStorage[0] = button.value;
        firstOperand[0] = screen.value;
        displayValue = [];
    });
});

equalSign.forEach((button) => {
    button.addEventListener ('click', () => {
    secondOperand[0] = screen.value;
    firstOperand[0] = (operate(firstOperand, operatorStorage, secondOperand));
    });
});

// now, figure out how to perform multiple operations without pressing =
// each time an operator is clicked, the result should display, and become the
// firstOperand




console.log(firstOperand)
console.log(operatorStorage)
console.log(secondOperand)
