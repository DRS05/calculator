let operator = null;
let operandOne = null;
let operandTwo = null;


function add(a, b) {
    return a + b;
}


function substract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function operate(operandOne, operator, operandTwo) {
    switch(operator) {
        case "+":
            return add(operandOne, operandTwo);
        case "-":
            return substract(operandOne, operandTwo);
        case "*":
            return multiply(operandOne, operandTwo);
        case "/":
            return divide(operandOne, operandTwo);
        default:
            return add(operandOne, operandTwo)
    }
}
