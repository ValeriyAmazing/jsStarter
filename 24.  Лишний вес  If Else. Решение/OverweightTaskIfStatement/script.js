const weight = prompt('Enter your weight in kilograms');
const height = prompt('Enter your height in meters');

const bodyMassIndex = weight /
   Math.pow(height, 2);
const areYouOverweight = bodyMassIndex >= 25;

if (areYouOverweight) {
   console.log(`Yes, your BMI is more than normal by ${bodyMassIndex - 25}`);
   alert(`Yes, your BMI is more than normal by ${bodyMassIndex - 25}`);
} else {
   console.log(`No, your weight is normal`);
   alert(`No, your weight is normal`);
}



// console.log(bodyMassIndex);
// console.log(areYouOverweight);

// alert('Are you overweight? ' + areYouOverweight);