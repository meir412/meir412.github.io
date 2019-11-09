

var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

var hoverChangeFunction = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/images/girl_run_symbol.png') {
      myImage.setAttribute ('src','/images/run_symbol_small_warped.png');
    } else {
      myImage.setAttribute ('src','/images/girl_run_symbol.png');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  if (!myName || myName === null){
          setUserName();
  }
  else {
          localStorage.setItem('name', myName);
          myHeading.textContent = 'Start running, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Start running, ' + storedName;
}

myButton.onclick = setUserName;
myImage.onmouseover = hoverChangeFunction;
