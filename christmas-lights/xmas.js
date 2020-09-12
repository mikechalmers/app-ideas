var swtch = document.querySelector(".controls");
var bulbs = document.querySelectorAll(".bulb");

swtch.addEventListener("click", (event) => {
  bulbs.forEach(function(bulb){

    if(bulb.classList.contains("red")) {
      bulb.classList.toggle("red-glow");
    } else {
      bulb.classList.toggle("blue-glow");
    }

  })
})

bulbs.foreach(function(bulb) {
  bulbs.forEach(function(bulb) {
    if(bulbs.classList.contains("flicker"){
      setTimeout(function(){
        myFunction(myVariable);
      }, 1000);
    })
  }
})
