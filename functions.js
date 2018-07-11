function cube (x) {
  return x * x * x;
}

function times (a, b){
  return a * b;
}

function buttonReport (buttonId, buttonName, buttonValue) {
// information about the id of the button
var userMessag1 = "Button id: " + buttonId + "\n";
// then about the button name
var userMessage2 = "Button name: " + buttonName + "\n";
// and the button value
var userMessage3 = "button value: " + buttonValue;
// alert the user
alert(userMessag1 + userMessage2 + userMessage3);
}


// console.log(cube(3));
// console.log(times(9, 65));