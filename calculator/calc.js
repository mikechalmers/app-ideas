let buttons = document.getElementsByClassName("button");
var display = document.querySelector("#display");

var c = document.querySelector("#C");
var ce = document.querySelector("#CE");

var percent = document.querySelector("#percent");
var divide = document.querySelector("#divide");
var times = document.querySelector("#times");
var minus = document.querySelector("#minus");
var plus = document.querySelector("#plus");
var equals = document.querySelector("#equals");

var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var zero = document.querySelector("#zero");

[...buttons].forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.id);
  });
});




// if button is pressed
// take its value
// do something with it
