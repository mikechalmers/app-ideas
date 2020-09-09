/*jshint esversion: 6 */

let buttons = document.getElementsByClassName("button");
var display = document.querySelector("#display");
var upper = document.querySelector("#upper-display");


[...buttons].forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event.target.id);
    checkIfFunction();

  });
});


function numberDisplay() {
  if(display.value == 0) {
    display.value = event.target.id;
  } else {
    display.value = display.value + event.target.id;
  }
}

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

function checkSymbols() {
  var symbol = event.target.id;

  if(symbol == "C") {
    display.value = 0;
  } else if(symbol == "CE") {
    display.value = 0;
    upper.value = "";
  } else if(symbol == "equals") {
    equals();
  } else {
    mathSymbols();
  }
}

function mathSymbols() {
  var symbol = event.target.id;
  upper.value = display.value + " " + symbol;
  display.value = 0;
}

function equals() {

  if(upper.value.includes(" times")) {
    times();
  } else if(upper.value.includes(" minus")) {
    minus();
  } else if(upper.value.includes(" plus")) {
    plus();
  } else if(upper.value.includes(" divide")) {
    divide();
  }

}

function times() {
  var firstVal = upper.value.replace(' times','');
  var firstNum = parseInt(firstVal, 10);
  display.value = firstNum * parseInt(display.value, 10);
  upper.value = "";
}
function minus() {
  var firstVal = upper.value.replace(' minus','');
  var firstNum = parseInt(firstVal, 10);
  display.value = firstNum - parseInt(display.value, 10);
  upper.value = "";
}
function plus() {
  var firstVal = upper.value.replace(' plus','');
  var firstNum = parseInt(firstVal, 10);
  display.value = firstNum + parseInt(display.value, 10);
  upper.value = "";
}
function divide() {
  var firstVal = upper.value.replace(' divide','');
  var firstNum = parseInt(firstVal, 10);
  display.value = firstNum / parseInt(display.value, 10);
  upper.value = "";
}

// if button is pressed
// take its value
// do something with it