// A function to calculate a person's BMI. The function prompts the user for
// their metric height and weight.

function bmiCalculator(weight, height) {
    var interpretation = weight/Math.pow(height, 2);
    return interpretation;
}

var weight = prompt("Enter your weight");
var height = prompt("Enter your height");


var interpretation = bmiCalculator(weight, height);

if (interpretation < 18.5) {
    alert("Your BMI is " + interpretation + ", so you are underweight.")
}

if (interpretation >= 18.5 && interpretation < 25) {
    alert("Your BMI is " + bmi + ", so you have normal weight.")
}

if ( interpretation > 25) {
    alert("Your BMI is " + interpretation + ", so you are overweight.")
}
console.log(interpretation)