"use strict";

class Calculator {
  result;
  operator = "";
  displayContent = "";
  previousOperand = "";
  currentOperand = "";

  constructor() {
    this.previousOperand = "";
    this.currentOperand = "";
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.displayContent = "";
    this.operator = "";
  }

  appendNumber(number) {
    this.currentOperand += number;
    this.displayContent += number;
    this.updateDisplay();
  }

  updateDisplay() {
    document.querySelector(".display").innerHTML = this.displayContent;
  }

  showResult() {
    document.querySelector(".display").innerHTML = this.result;
  }

  selectOperation(operation) {
    if (this.previousOperand !== "") {
      this.calculate();
    }
    this.operator = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.displayContent += operation;
  }

  calculate() {
    switch (this.operator) {
      case "+":
        this.result =
          (parseFloat(this.previousOperand) * 10 +
            parseFloat(this.currentOperand) * 10) /
          10;
        break;
      case "-":
        this.result =
          (parseFloat(this.previousOperand) * 10 -
            parseFloat(this.currentOperand) * 10) /
          10;
        break;
      case "*":
        this.result =
          parseFloat(this.previousOperand) * parseFloat(this.currentOperand);
        break;
      case "/":
        this.result =
          parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
        break;
      default:
        return;
    }
    this.currentOperand = this.result.toString();
    this.previousOperand = "";
  }
}

(function () {
  let calculator = new Calculator();
  let numberButtons = document.querySelectorAll(".number");
  let operatorButtons = document.querySelectorAll(".operator");

  document.querySelector(".equal-btn").onclick = function () {
    calculator.calculate();
    calculator.showResult();
  };
  document.querySelector(".c-btn").onclick = function () {
    calculator.clear();
    calculator.updateDisplay();
  };

  for (let button of numberButtons) {
    button.onclick = function () {
      calculator.appendNumber(button.innerHTML);
      calculator.updateDisplay();
    };
  }
  
  for (let button of operatorButtons) {
    button.onclick = function () {
      calculator.selectOperation(button.innerHTML);
      calculator.updateDisplay();
    };
  }
})();
