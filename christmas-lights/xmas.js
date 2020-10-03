var bulbs = document.querySelectorAll('.bulb');
// var swtch = document.querySelector('#power');
var radios = document.querySelectorAll('input[name="intensity"]');

var blinkers = document.querySelectorAll('input[name="freq"]');

// swtch.addEventListener('click', (event) => {
//   bulbs.forEach(function(bulb){
//
//     settingFive(bulb);
//
//   })
// })


if(radios) {
  radios.forEach((radio) => {
    radio.addEventListener("change", function(event){
      var item = event.target.value;

      if(item === "1") {
        bulbs.forEach(function(bulb){
          settingOne(bulb);
        })
      } else if (item === "2") {
        bulbs.forEach(function(bulb){
          settingTwo(bulb);
        })
      } else if (item === "3") {
        bulbs.forEach(function(bulb){
          settingThree(bulb);
        })
      } else if (item === "4") {
        bulbs.forEach(function(bulb){
          settingFour(bulb);
        })
      } else if (item === "5") {
        bulbs.forEach(function(bulb){
          settingFive(bulb);
        })
      } else if (item === "off") {
        bulbs.forEach(function(bulb){
          settingOff(bulb);
        })
      }

    })
  });
}

if(blinkers) {
  blinkers.forEach((radio) => {
    radio.addEventListener("change", function(event){
      var item = event.target.value;

      if(item === "1") {
        alert("works");
        bulbs.forEach(function(bulb){
          settingFreqOne(bulb);
        })
      } else if (item === "2") {
        bulbs.forEach(function(bulb){
          settingFreqTwo(bulb);
        })
      } else if (item === "3") {
        bulbs.forEach(function(bulb){
          settingFreqThree(bulb);
        })
      } else if (item === "4") {
        bulbs.forEach(function(bulb){
          settingFreqFour(bulb);
        })
      } else if (item === "5") {
        bulbs.forEach(function(bulb){
          settingFreqFive(bulb);
        })
      } else if (item === "off") {
        bulbs.forEach(function(bulb){
          settingFreqOff(bulb);
        })
      }

    })
  });
}

function settingOne(bulb) {

  if(bulb.classList.contains('red')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, .2), inset 20px 0 20px rgba(255, 0, 0, .2), inset -20px 0 20px rgba(255, 153, 153, .2), inset 20px 0 40px rgba(255, 0, 0, .2), inset -20px 0 40px rgba(255, 153, 153, .2), 0 0 10px rgba(255, 255, 255, .2), -10px 0 30px rgba(255, 0, 0, .2), 0 0 50px 20px rgba(255, 0, 0, .2), 10px 0 30px 10px rgba(255, 153, 153, .2)');
  } else if(bulb.classList.contains('blue')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, .2), inset 20px 0 20px rgba(0, 0, 255, .2), inset -20px 0 20px rgba(153, 153, 255, .2), inset 20px 0 40px rgba(0, 0, 255, .2), inset -20px 0 40px rgba(153, 153, 255, .2), 0 0 10px rgba(255, 255, 255, .2), -10px 0 30px rgba(0, 0, 255, .2), 0 0 50px 20px rgba(0, 0, 255, .2), 10px 0 30px 10px rgba(153, 153, 255, .2)');
  }

}

function settingTwo(bulb) {

  if(bulb.classList.contains('red')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, .4), inset 20px 0 20px rgba(255, 0, 0, .4), inset -20px 0 20px rgba(255, 153, 153, .4), inset 20px 0 40px rgba(255, 0, 0, .4), inset -20px 0 40px rgba(255, 153, 153, .4), 0 0 10px rgba(255, 255, 255, .4), -10px 0 30px rgba(255, 0, 0, .4), 0 0 50px 20px rgba(255, 0, 0, .4), 10px 0 30px 10px rgba(255, 153, 153, .4)');
  } else if(bulb.classList.contains('blue')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, .4), inset 20px 0 20px rgba(0, 0, 255, .4), inset -20px 0 20px rgba(153, 153, 255, .4), inset 20px 0 40px rgba(0, 0, 255, .4), inset -20px 0 40px rgba(153, 153, 255, .4), 0 0 10px rgba(255, 255, 255, .4), -10px 0 30px rgba(0, 0, 255, .4), 0 0 50px 20px rgba(0, 0, 255, .4), 10px 0 30px 10px rgba(153, 153, 255, .4)');
  }

}

function settingThree(bulb) {

  if(bulb.classList.contains('red')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, .6), inset 20px 0 20px rgba(255, 0, 0, .6), inset -20px 0 20px rgba(255, 153, 153, .6), inset 20px 0 40px rgba(255, 0, 0, .6), inset -20px 0 40px rgba(255, 153, 153, .4), 0 0 10px rgba(255, 255, 255, .6), -10px 0 30px rgba(255, 0, 0, .6), 0 0 50px 20px rgba(255, 0, 0, .6), 10px 0 30px 10px rgba(255, 153, 153, .6)');
  } else if(bulb.classList.contains('blue')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, .6), inset 20px 0 20px rgba(0, 0, 255, .6), inset -20px 0 20px rgba(153, 153, 255, .6), inset 20px 0 40px rgba(0, 0, 255, .6), inset -20px 0 40px rgba(153, 153, 255, .6), 0 0 10px rgba(255, 255, 255, .6), -10px 0 30px rgba(0, 0, 255, .6), 0 0 50px 20px rgba(0, 0, 255, .6), 10px 0 30px 10px rgba(153, 153, 255, .6)');
  }

}

function settingFour(bulb) {

  if(bulb.classList.contains('red')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, .8), inset 20px 0 20px rgba(255, 0, 0, .8), inset -20px 0 20px rgba(255, 153, 153, .8), inset 20px 0 40px rgba(255, 0, 0, .8), inset -20px 0 40px rgba(255, 153, 153, .8), 0 0 10px rgba(255, 255, 255, .8), -10px 0 30px rgba(255, 0, 0, .8), 0 0 50px 20px rgba(255, 0, 0, .8), 10px 0 30px 10px rgba(255, 153, 153, .8)');
  } else if(bulb.classList.contains('blue')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, .8), inset 20px 0 20px rgba(0, 0, 255, .8), inset -20px 0 20px rgba(153, 153, 255, .8), inset 20px 0 40px rgba(0, 0, 255, .8), inset -20px 0 40px rgba(153, 153, 255, .8), 0 0 10px rgba(255, 255, 255, .8), -10px 0 30px rgba(0, 0, 255, .8), 0 0 50px 20px rgba(0, 0, 255, .8), 10px 0 30px 10px rgba(153, 153, 255, .8)');
  }

}

function settingFive(bulb) {

  if(bulb.classList.contains('red')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, 1), inset 20px 0 20px rgba(255, 0, 0, 1), inset -20px 0 20px rgba(255, 153, 153, 1), inset 20px 0 40px rgba(255, 0, 0, 1), inset -20px 0 40px rgba(255, 153, 153, 1), 0 0 10px rgba(255, 255, 255, 1), -10px 0 30px rgba(255, 0, 0, 1), 0 0 50px 20px rgba(255, 0, 0, 1), 10px 0 30px 10px rgba(255, 153, 153, 1)');
  } else if(bulb.classList.contains('blue')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, 1), inset 20px 0 20px rgba(0, 0, 255, 1), inset -20px 0 20px rgba(153, 153, 255, 1), inset 20px 0 40px rgba(0, 0, 255, 1), inset -20px 0 40px rgba(153, 153, 255, 1), 0 0 10px rgba(255, 255, 255, 1), -10px 0 30px rgba(0, 0, 255, 1), 0 0 50px 20px rgba(0, 0, 255, 1), 10px 0 30px 10px rgba(153, 153, 255, 1)');
  }

}

function settingOff(bulb) {

  if(bulb.classList.contains('red')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, 0), inset 20px 0 20px rgba(255, 0, 0, 0), inset -20px 0 20px rgba(255, 153, 153, 0), inset 20px 0 40px rgba(255, 0, 0, 0), inset -20px 0 40px rgba(255, 153, 153, 0), 0 0 10px rgba(255, 255, 255, 0), -10px 0 30px rgba(255, 0, 0, 0), 0 0 50px 20px rgba(255, 0, 0, 0), 10px 0 30px 10px rgba(255, 153, 153, 0)');
  } else if(bulb.classList.contains('blue')) {
    bulb.setAttribute('style', 'box-shadow: inset 0 0 15px rgba(255, 255, 255, 0), inset 20px 0 20px rgba(0, 0, 255, 0), inset -20px 0 20px rgba(153, 153, 255, 0), inset 20px 0 40px rgba(0, 0, 255, 0), inset -20px 0 40px rgba(153, 153, 255, 0), 0 0 10px rgba(255, 255, 255, 0), -10px 0 30px rgba(0, 0, 255, 0), 0 0 50px 20px rgba(0, 0, 255, 0), 10px 0 30px 10px rgba(153, 153, 255, 0)');
  }

}

// FREQUENCY

function settingFreqOne(bulb) {



}

function settingFreqTwo(bulb) {



}

function settingFreqThree(bulb) {



}

function settingFreqFour(bulb) {



}

function settingFreqFive(bulb) {

  if(bulb.classList.contains('red')) {
    bulb.classList.add('blinkRed');
  } else if(bulb.classList.contains('blue')) {
    bulb.classList.add('blinkBlue');
  }

}

function settingFreqOff(bulb) {

  if(bulb.classList.contains('red')) {
    if(bulb.classList.contains('blinkRed')) {
      bulb.classList.remove('blinkRed');
    }
  } else if(bulb.classList.contains('blue')) {
    if(bulb.classList.contains('blinkBlue')) {
      bulb.classList.remove('blinkBlue');
    }
  }

}
