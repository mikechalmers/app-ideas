/*jshint esversion: 6 */

let buttons = document.getElementsByClassName("button");
var display = document.querySelector("#display");
var upper = document.querySelector("#upper-display");
var funcDisplay = document.querySelector("#func-display");


[...buttons].forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event.target.id);
    checkIfFunction();

  });
});


function checkIfFunction() {
  var pressed = parseInt(event.target.id, 10);
    if(isNaN(pressed)) {
      checkSymbols();
    } else {
      lessThanTen();
    }
}

function lessThanTen() {
  if (display.value.length >= 10) {
    display.value = "TOO MANY!!";
  }
  else {
    numberDisplay();
  }
}

function numberDisplay() {
  if(display.value === "0") {
    display.value = event.target.id;
  } else {
    display.value = display.value + event.target.id;
  }
}

function checkSymbols() {
  var symbol = event.target.id;

  if(symbol == "C") {
    display.value = 0;
  } else if(symbol == "point") {
    dot();
  } else if(symbol == "CE") {
    display.value = 0;
    upper.value = "";
    funcDisplay.value = "";
  } else if(symbol == "equals") {
    equals();
  } else if(symbol == "percent") {
    percent();
  } else {
    checkFuncDisplay();
  }
}

function mathSymbols() {
  var symbol = event.target.id;
  upper.value = display.value;
  funcDisplay.value = symbol;
  display.value = 0;
}

function dot() {
  if(display.value.includes(".")) {

  } else {
    display.value = display.value + ".";
  }
}

function checkFuncDisplay() {
  if(funcDisplay.value == "") {
    mathSymbols();
  } else {
    equals();
    funcDisplay.value = event.target.id;
    upper.value = display.value;
    display.value = "0";
  }
}

// function equals() {
//   if(funcDisplay.value.includes("times")) {
//     times();
//   } else if(funcDisplay.value.includes("minus")) {
//     minus();
//   } else if(funcDisplay.value.includes("plus")) {
//     plus();
//   } else if(funcDisplay.value.includes("divide")) {
//     divide();
//   }
// }
function equals() {
  if(funcDisplay.value.includes("times")) {
    times();
  } else if(funcDisplay.value.includes("minus")) {
    minus();
  } else if(funcDisplay.value.includes("plus")) {
    plus();
  } else if(funcDisplay.value.includes("divide")) {
    divide();
  }
}

function times() {
  var firstNum = parseFloat(upper.value, 10);
  display.value = firstNum * parseFloat(display.value, 10);
  upper.value = "";
  funcDisplay.value = "";
}
function minus() {
  var firstNum = parseFloat(upper.value, 10);
  display.value = firstNum - parseFloat(display.value, 10);
  upper.value = "";
  funcDisplay.value = "";
}
function plus() {
  var firstNum = parseFloat(upper.value, 10);
  display.value = firstNum + parseFloat(display.value, 10);
  upper.value = "";
  funcDisplay.value = "";
}
function divide() {
  var firstNum = parseFloat(upper.value, 10);
  display.value = firstNum / parseFloat(display.value, 10);
  upper.value = "";
  funcDisplay.value = "";
}
function percent() {
  var firstNum = parseFloat(display.value, 10);
  display.value = firstNum / 100;
}
