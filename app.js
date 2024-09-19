let firstNumber;
let secondNumber;
let operator;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (a, b, oper) => {
  switch (oper) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};
const pageContainer = document.querySelector(".page-container");
const calcContainer = document.querySelector(".calc-container");
const displayContainer = document.querySelector(".display-container");
const keypadContainer = pageContainer.querySelector(".keypad-container");
const displayButton = displayContainer.querySelector(".display-button");

let numDisplayValue = "";
let operDisplayValue = "";

const updateDisplay = () => {
  displayButton.textContent = numDisplayValue;
};

const displayNumbers = () => {
  const buttons = keypadContainer.querySelectorAll(".operand");

  buttons.forEach((butt) => {
    butt.addEventListener("click", (e) => {
      const buttonValue = e.target.value;
      console.log("button value:", buttonValue);
      numDisplayValue += buttonValue;
      console.log("display value:", numDisplayValue);
      firstNumber = numDisplayValue
      updateDisplay();
    });
  });
};

const displayOperator = () => {
  const operators = keypadContainer.querySelectorAll(".operator")
  operators.forEach((oper) => {
    oper.addEventListener("click", (e) => {
      const operatorValue = e.target.value
      console.log(operatorValue)
      operDisplayValue = operatorValue
      console.log("display value:", operDisplayValue);
    })
  })
}





displayNumbers();
displayOperator()
