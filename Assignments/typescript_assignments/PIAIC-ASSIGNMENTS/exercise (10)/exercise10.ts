//Task No:10 Adding Comments: Choose two of the programs you’ve written,
// and add at least one comment to each. If you don’t have
//anything specific to write because your programs are too
// simple at this point, just add your name and the current
// date at the top of each program file. Then write one
// sentence describing what the program does.
// This program calculates the area of a circle using the given radius.
const radius:number = 5; 
const area:number = Math.PI * radius * radius;
console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}.`);
// This program converts a temperature in Celsius to Fahrenheit.
const celsiusTemperature:number = 25;  
const fahrenheitTemperature:number = (celsiusTemperature * 9/5) + 32;
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature.toFixed(2)}°F.`);
