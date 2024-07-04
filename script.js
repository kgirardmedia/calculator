display = document.getElementById('display');
const buttons = document.querySelectorAll("button");

let num1 = 0;
let num2 = 0;
let operator = ''

buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
        button.style.filter = "brightness(125%)";
    });
    button.addEventListener("mouseup", () => {
        button.style.filter = "brightness(100%)";
    });

    button.addEventListener("click", () => {
        updateDisplay(button);
        if (button.className == "symbol") {
            num1 = display.textContent;
            operator = button.id;
            console.log(num1, operator)
        }
    })
});

function operate (operator, num1, num2) {

}

function updateDisplay(button) {
    if (button.className == "number" && display.textContent.length < 9) {
        display.textContent += button.textContent;
    }    
}