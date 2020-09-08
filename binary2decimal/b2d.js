// parseInt(input, 2);

var btn = document.querySelector("button");

btn.addEventListener("click", function(e){

  e.preventDefault();
  var binaryInput = document.getElementById("binary").value;
  var decimalInput = document.getElementById("decimal").value;
  var message = document.getElementById("message");
  var nonum = document.getElementById("nonum");
  var wrongnum = document.getElementById("wrongnum");

  if(binaryInput.length > 0 && decimalInput.length > 0) {
    message.classList.remove("hidden");
  } else if(binaryInput) {
      message.classList.add("hidden");
      if(isNaN(binaryInput)) {
        nonum.classList.remove("hidden");
      } else {
        parsed = parseInt(binaryInput, 2);
        if (isNaN(parsed)) {
          wrongnum.classList.remove("hidden");
        } else {
          wrongnum.classList.add("hidden");
          nonum.classList.add("hidden");
          document.getElementById("decimal").value = parsed;
        }
      }
  } else if(decimalInput) {
      message.classList.add("hidden");
      parsed = parseInt(decimalInput, 10).toString(2);
      document.getElementById("binary").value = parsed;
  } else {

  }


  // if binary input
  // convert to decimal
  // output data in decimal box
  // else if decimal input
  // convert to binary
  // output data into binary box
  // else message saying fill one - and only one - box, numnucks.
});
