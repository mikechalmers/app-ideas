var preview = document.getElementById("preview");
var code = document.getElementById("code");

preview.addEventListener("click", function(){
  var topLeft = document.getElementById("top-left").value;
  var topRight = document.getElementById("top-right").value;
  var bottomLeft = document.getElementById("bottom-left").value;
  var bottomRight = document.getElementById("bottom-right").value;
  var bordered = document.getElementById("bordered").style;

  if(topLeft < 0 || topRight < 0 || bottomLeft < 0 || bottomRight < 0) {
    alert("Enter only positive numbers");
  } else {
    bordered.borderTopLeftRadius = topLeft + "%";
    bordered.borderTopRightRadius = topRight + "%";
    bordered.borderBottomLeftRadius = bottomLeft + "%";
    bordered.borderBottomRightRadius = bottomRight + "%";
  }

  // alert(topLeft + " " + topRight + " " + bottomLeft + " " + bottomRight);
});

code.addEventListener("click", function(){



});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = code;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  var topLeft = document.getElementById("top-left").value;
  var topRight = document.getElementById("top-right").value;
  var bottomLeft = document.getElementById("bottom-left").value;
  var bottomRight = document.getElementById("bottom-right").value;

  document.getElementById("topl").innerText = topLeft;
  document.getElementById("topr").innerText = topRight;
  document.getElementById("botl").innerText = bottomLeft;
  document.getElementById("botr").innerText = bottomRight;

  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
