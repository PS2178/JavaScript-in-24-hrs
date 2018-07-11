// onload, grab user input... okay or cancel returns boolean
var answer = confirm('What up my bro, are you happy to continue?');
console.log(answer);
if (!answer){
  document.writeln('You chose incorrectly my friend');
}else {
  document.writeln('You chose correctly');
}