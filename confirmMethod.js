// onload, grab user input... okay or cancel returns boolean
var answer = confirm('What up my bro, are you happy to continue?');
console.log(answer);
if (!answer){
  document.writeln('You chose incorrectly my friend');
}else {
  document.writeln('You chose correctly');
}

// if cancel is selected the returned value is null
var promptResult = prompt('Input some data', 'place text here');
console.log(promptResult);
// document.write(promptResult);