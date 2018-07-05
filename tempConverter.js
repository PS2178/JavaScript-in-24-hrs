var cTemp = 100; // temperature in Celsius
// being generous with parenthesis
var hTemp = ((cTemp * 9) / 5) + 32; // way easier to read, but it also would have worked fine without

document.write("Temperature in Celsius: " + cTemp + " degrees.</br>");
document.write("Temperature in Fahrenheit: " + hTemp + " degrees.");

const tempConversion = (degrees) => ((degrees * 9) / 5) + 32; // arrow function to do work on any value

// grab user defined temperature
const userTemp = prompt('Enter in degrees fahrenheit to convert to celsius:');
console.log(tempConversion(userTemp));

// print results to the DOM
document.write(`<br/><br/>Temperature in Fahrenheit: ${userTemp}</br>Temperature in Celsius: ${tempConversion(userTemp)}`);

console.log(test);
