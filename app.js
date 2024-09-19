let firstNumber = "";
let secondNumber = "";
let operator = "";
let isOperatorClicked = false; 

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const pageContainer = document.querySelector(".page-container");
const calcContainer = document.querySelector(".calc-container");
const displayContainer = document.querySelector(".display-container");
const keypadContainer = pageContainer.querySelector(".keypad-container");
const displayButton = displayContainer.querySelector(".display-button");
const equal = keypadContainer.querySelector(".equal")

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
 }

 equal.addEventListener("click", () => {
  const a = parseInt(firstNumber)
  const b = parseInt(secondNumber)
  const result = operate(a, b, operator)
  displayButton.textContent = result;
  console.log(result)
 })




const displayNumbers = () => {
  const buttons = keypadContainer.querySelectorAll(".operand");

  buttons.forEach((butt) => {
    butt.addEventListener("click", (e) => {
      const buttonValue = e.target.value;
      console.log("button value:", buttonValue);

      if (!isOperatorClicked) {
         firstNumber += buttonValue;
      displayButton.textContent = firstNumber;
      console.log("display (first #)", firstNumber);
      } else {
        displayButton.textContent = "";

        secondNumber += buttonValue;
        displayButton.textContent = secondNumber;
        console.log("display (second #)", secondNumber);
      }
     
    });
  });
};

const displayOperator = () => {
  const operators = keypadContainer.querySelectorAll(".operator");
  operators.forEach((oper) => {
    oper.addEventListener("click", (e) => {

      const operatorValue = e.target.value;
      console.log("operator value:", operatorValue);
      operator = operatorValue;
      isOperatorClicked = true;

      displayButton.textContent = operator;
      console.log("display value:", operator);

    });
  });
};

displayNumbers();
displayOperator();
