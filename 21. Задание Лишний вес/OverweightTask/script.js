const weight = prompt('Enter your weight in kilograms');
const height = prompt('Enter your height in meters');

const bodyMassIndex = weight /
Math.pow(height, 2);
const areYouOverweight = bodyMassIndex >= 25;

console.log(bodyMassIndex);
console.log(areYouOverweight);

alert('Are you overweight? ' + areYouOverweight);