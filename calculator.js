/*
  *Code for simple calculator
  *Author Udoekpo Stephen Patrick
  *Ensure that correct operator is used. Solution almost completed
 */



//Declare all button values

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const clear = document.getElementById("clear");
const multiply = document.getElementById("multiply");
const division = document.getElementById("division");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtract");
const decimal = document.getElementById("decimal")
const equals = document.getElementById("equals")
let operator = document.getElementsByClassName("special");
let digit = document.getElementsByClassName("digit");
let inputDisplay = document.getElementById("inputDisplay")
let resultDisplay = document.getElementById("resultDisplay")
let operatorDisplay = document.getElementById("operatorDisplay")


//get value of key pressed
let digitKey = ()=> {
  for (i = 0; i < digit.length; i++) {
    digit[i].addEventListener("click", (event)=> {
      inputDisplay.append(event.target.value)
      console.log(inputDisplay.innerText)
    })
  }
}

let lastOperator = [];
const calculate = ()=> {
  if (resultDisplay.innerText == "") {
    resultDisplay.innerText = inputDisplay.innerText
  } else {
    switch (lastOperator[1]) {
      case "x":
        resultDisplay.innerText = parseInt(resultDisplay.innerText) * parseInt(inputDisplay.innerText)
        break;
      case "÷":
      resultDisplay.innerText = parseInt(resultDisplay.innerText) / parseInt(inputDisplay.innerText)
        break;
      case "+":
      resultDisplay.innerText = parseInt(resultDisplay.innerText) + parseInt(inputDisplay.innerText)
        break;
      case "-":
      resultDisplay.innerText = parseInt(resultDisplay.innerText) - parseInt(inputDisplay.innerText)
        break;
      default:
        break;
    }
  }
}


let operatorKey = ()=> {
  for (i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", (event)=> {
      lastOperator.unshift(event.target.value)
      operatorDisplay.innerText = lastOperator[0] == undefined ? "" : lastOperator[0]
      calculate()
      inputDisplay.innerText = ""
      console.log(lastOperator)
    })
  }
}


//resolve the value of a simple calculation


//delete function
clear.addEventListener("click", ()=> {
  inputDisplay.innerHTML = ""
  resultDisplay.innerHTML = ""
  operatorDisplay.innerHTML = ""
  lastOperator = []
})

//Calculate Values
equals.addEventListener("click", ()=> {
  switch (lastOperator[0]) {
    case "x":
      resultDisplay.innerText = parseInt(resultDisplay.innerText) * parseInt(inputDisplay.innerText)
      break;
    case "÷":
    resultDisplay.innerText = parseInt(resultDisplay.innerText) / parseInt(inputDisplay.innerText)
      break;
    case "+":
    resultDisplay.innerText = parseInt(resultDisplay.innerText) + parseInt(inputDisplay.innerText)
      break;
    case "-":
    resultDisplay.innerText = parseInt(resultDisplay.innerText) - parseInt(inputDisplay.innerText)
      break;
    default:
      break;
  }
  inputDisplay.innerHTML = ""
  operatorDisplay.innerHTML = ""
  lastOperator = []
})
// Main function to call other functions
const main = ()=> {
  digitKey(); 
  operatorKey();
  decimalKey()
}

//Call to main function
main()