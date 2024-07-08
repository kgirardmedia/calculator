display = document.getElementById('display');
const buttons = document.querySelectorAll("button");

let num1 = 0;
let num2 = 0;
let numString = ''
let operator = ''

buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
        button.style.filter = "brightness(125%)";
    });
    button.addEventListener("mouseup", () => {
        button.style.filter = "brightness(100%)";
    });

    button.addEventListener("click", () => {
        if (button.className == "symbol") {
            if (!num1) {
                operator = button.id;
                num1 = parseFloat(numString);
                numString = ''
                console.log(num1, operator)
            } else {
                num2 = parseFloat(numString);
                numString = ''
                if (button.id == 'equals') {
                    console.log(num1, num2, operator)
                    operate(operator, num1, num2);
                    num1 = NaN;
                    num2 = NaN;
                } else {
                    num1 = operate(operator, num1, num2);
                    operator = button.id;
                }
            }
        }
        if (button.className == "number") {
            updateNumString(button)
        }
        if (button.id == 'AC') {
            num1 = NaN;
            num2 = NaN;
            numString = '';
            display.textContent = '0';
        }
    })
});

function operate (operator, num1, num2) {
    let answer = 0.0;
    let roundedAnswer = 0;
    if (operator == 'add') {
        answer = num1 + num2;
        roundedAnswer = Math.round(answer*10000000)/10000000
    }
    if (operator == 'subtract') {
        answer = num1 - num2;
        roundedAnswer = Math.round(answer*10000000)/10000000
    }
    if (operator == 'multiply') {
        answer = num1 * num2;
        roundedAnswer = Math.round(answer*10000000)/10000000
    }
    if (operator == 'divide') {
        answer = num1 / num2;
        roundedAnswer = Math.round(answer*10000000)/10000000
    }

    display.textContent = roundedAnswer;
    return roundedAnswer;
}


function updateNumString(button) {
    if (!displayLimitReached()) {
        if (button.id == 'decimal' && isFloat()) {
        } else {
            numString += button.textContent;
            display.textContent = numString;  
        }
    }
    
}

function displayLimitReached() {
    if (display.textContent.length < 9) {
        return false;
    } else {
        return true;
    }
}

function isFloat() {
    if (numString.includes('.')) {
        return true
    } else {
        return false;
    }
}