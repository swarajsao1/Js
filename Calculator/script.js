const a = 10;
const b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log((6 + 2) / 2 ** 2);

function add (a,b) {
  return a+b;
}

console.log(add(2,3));

let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

const operatorButtons = document.querySelectorAll(".operators button[data-operators]");
const display = document.getElementById("disp"); 
const numberButtons = document.querySelectorAll(".nums button");

numberButtons.forEach( function (button) {
    button.addEventListener("click", function() {
        const number = button.textContent;

        if (number === "+/-") {
            if (display.textContent !== "0") {
                display.textContent = String(-Number(display.textContent));
            }
            return;
        }

        if (number === ".") {
            if (waitingForSecondNumber) {
                display.textContent = "0.";
                waitingForSecondNumber = false;
            } else if (!display.textContent.includes(".")) {
                display.textContent += ".";
            }
            return;
        }

        if (waitingForSecondNumber) {
            display.textContent = number;
            waitingForSecondNumber = false;
        } else if (display.textContent === "0") {
            display.textContent = number;
        }  else  {
            display.textContent += number;
        }
    });
});

operatorButtons.forEach( function (button) {
  button.addEventListener("click", function () {
    firstNumber = Number(display.textContent);
    operator = button.dataset.operators;
    waitingForSecondNumber = true;
  });
});

const equalButton = document.getElementById("equalButton");

equalButton.addEventListener("click", function () {
    
    if (operator === null || waitingForSecondNumber) {
        return;
    }

    const secondNumber = Number(display.textContent);

    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "%") {
        result = firstNumber % secondNumber;
    } else if (operator === "/") {
      if (secondNumber === 0) {
        display.textContent = "cannot divide by zero";
        return;
      }
      result = firstNumber / secondNumber;
    } else {
        return;
    }

    display.textContent = String(result);
    firstNumber = result;
    operator = null;
    waitingForSecondNumber = false;
});

const clearButton = document.getElementById("clearButton");
const deleteButton = document.getElementById("deleteButton");

clearButton.addEventListener("click", function () {
    display.textContent = "0"
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = false;
});

deleteButton.addEventListener("click", function () {
    if (waitingForSecondNumber) {
        return;
    } else if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0,-1);
    } else {
        display.textContent = "0"; 
    }
});