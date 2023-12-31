function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let val1 = "";
let operator = "";
let val2 = "";

const ops = ["+", "-", "*", "/"]

function operate(num1, operator, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        default:
            return 0;
    }
}

let calc = document.querySelector('.row');
let display = document.querySelector('.display');

calc.addEventListener('click', (event) => {
    let target = event.target;
    
    //If an Operator is clicked
    if (/\+|\*|\/|\-/.test(target.textContent)) {
        operator = target.textContent;
        //If both a first and second operand have been given
        if (val2 != "") {
            let res = operate(Number(val1), operator, Number(val2));
            val1 = res;
            display.textContent = res;
            val2 = "";
        } else {
            val1 = display.textContent;
            operator = target.textContent;
        }
    } else if (target.textContent == "C") {
        val1 = "";
        operator = "";
        val2 = "";
        display.textContent = "";
    } else if (target.textContent == "=") {
        if (val1 != "" && operator != "" && display.textContent != "") {
            val2 = display.textContent;
            let res = operate(Number(val1), operator, Number(val2));
            display.textContent = res;
            val1 = "";
            operator = "";
            val2 = "";
        }
    } else {
        // If an Operator has not been set, edit val1. Otherwise, edit val2.
        if (operator == "") {
            val1 += target.textContent; //Text Concatenation
            display.textContent = val1;
        }
        else {
            val2 += target.textContent;
            display.textContent = val2;
        }
    }

});