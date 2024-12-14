let operator = "";
let operandOne = "0";
let operandTwo = "";


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
            return add(operandOne, operandTwo);
    }
}


function handleOperandInput(number) {
    if (operandOne === "0" && operator === "") {
        operandOne = number;
    } else if (operator === "") {
        operandOne += number;
    } else {
        operandTwo += number;
    }
}


function handleOperatorInput(symbol) {
    if (operator === "" || operandTwo === "") {
        operator = symbol;
    } else {
        calculateInput();
        operandTwo = "";
        operator = symbol;
    }
}


function divisionByZeroError() {
    alert("ERROR: Division by zero is undefined. The calculator has been reset.");

    clearInput();
}


function calculateInput() {
    if (operator === "/" && "0") {
        divisionByZeroError();
    }

    if (!(operator === "" || operandTwo === "")) {
        operandOne = `${operate(Number.parseFloat(operandOne), operator, Number.parseFloat(operandTwo))}`;
        operandTwo = "";
        operator = "";
    }
}


function clearInput() {
    operandOne = "0";
    operandTwo = "";
    operator = "";
}


function dotCount(string) {
    // count the number of occurences of dot in string
    count = string.match(new RegExp(/\./, "g"));

    if (count === null) {
        return 0
    }
    return count.length
}


function decimalInput() {
    if (operator === "" && dotCount(operandOne) === 0) {
        operandOne += ".";
    } else if (operandTwo.length >= 1 && dotCount(operandTwo) === 0) {
        operandTwo += "."
    }
}


function backSpaceInput() {
    if (operandTwo.length >= 1) {
        operandTwo = operandTwo.slice(0, operandTwo.length - 1);
    } else if (operator.length === 1) {
        operator = ""
    } else if (operandOne != "0") {
        operandOne = operandOne.slice(0, operandOne.length - 1);
        if (operandOne.length === 0) {
            operandOne = "0";
        }
    }
}


function isOperator(symbol) {
    const operators = ["+", "-", "*", "/"];
    return operators.includes(symbol);
}


function isNumber(character) {
    return (Number.parseInt(character) >= 0 && Number.parseInt(character) <= 9);
}


const buttonContainer = document.querySelector(".button-container");
const displayParagraph = document.querySelector(".display-paragraph");

buttonContainer.addEventListener("click", event => {
    const buttonClassName = event.target.className;

    switch (buttonClassName) {
        case "operand-button":
            handleOperandInput(event.target.textContent);
            break;
        case "operator-button":
            handleOperatorInput(event.target.textContent);
            break;
        case "calculate-button":
            calculateInput();
            break;
        case "clear-button":
            clearInput();
            break;
        case "decimal-button":
            decimalInput();
            break;
        case "backspace-button":
            backSpaceInput();
            break;
    }

    displayParagraph.textContent = operandOne + " " + operator + " " + operandTwo;
});

document.addEventListener("keydown", event => {
    const keyPressed = event.key;

    if (isNumber(keyPressed)) {
        handleOperandInput(keyPressed);
    } else if (isOperator(keyPressed)) {
        handleOperatorInput(keyPressed);
    } else if (keyPressed === "Enter") {
        calculateInput();
    } else if (keyPressed === "Delete") {
        clearInput();
    } else if (keyPressed === ".") {
        decimalInput();
    } else if (keyPressed === "Backspace") {
        backSpaceInput();
    }

    displayParagraph.textContent = operandOne + " " + operator + " " + operandTwo;
});


