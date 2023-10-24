function funcaoTradicionalSemParametros() {
    console.log('Esta é uma função tradicional sem parâmetros.');
}

// Função tradicional com parâmetros e retorno de valor
function funcaoTradicionalComParametrosEValor(param1, param2) {
    return param1 + param2;
}

const arrowFunctionComParametrosEValor = (param1, param2) => param1 * param2;

const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  addDigit(digit) {
    this.currentOperation += digit;
    this.updateScreen();
  }

  processOperation(operation) {
    if (operation === "=") {
      let result = eval(this.currentOperation);
      this.updateScreen(result);
    } else if (operation === "C") {
      this.currentOperation = "";
      this.previousOperationText.innerText = "";
      this.updateScreen();
    } else if (operation === "CE") {
      this.currentOperation = "";
      this.updateScreen();
    } else if (operation === "DEL") {
      this.currentOperation = this.currentOperation.slice(0, -1);
      this.updateScreen();
    } else {
      this.currentOperation += " " + operation + " ";
      this.updateScreen();
    }
  }

  updateScreen() {
    this.currentOperationText.innerText = this.currentOperation;
  }

  funcaoTradicionalSemParametros() {
    console.log('Esta é uma função tradicional sem parâmetros.');
  }

  funcaoTradicionalComParametrosEValor(param1, param2) {
    return param1 + param2;
  }

  arrowFunctionComParametrosEValor = (param1, param2) => param1 * param2;
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});

calc.funcaoTradicionalSemParametros();
var resultadoFuncaoTradicional = calc.funcaoTradicionalComParametrosEValor(2, 3);
console.log('Resultado da função tradicional com parâmetros e valor: ', resultadoFuncaoTradicional);
var resultadoArrowFunction = calc.arrowFunctionComParametrosEValor(4, 5);
console.log('Resultado da arrow function com parâmetros e valor: ', resultadoArrowFunction);
