/*
Question 1- function that finds the sum of two numbers 

Question 2- Display the above result in a pretty format

Question 3- Takes the sum and prints it in passive tense
*/

//Question 1
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2));
// Question 2
function displayResultInPrettyFormat(data) {
    return `The sum of the numbers we are adding is:- ${data}`
}
console.log(displayResultInPrettyFormat(sum(2, 3)));

//Question3 
function displayResultInPassiveTense(data) {
    return `Sum's Result is:- ${data}`
}
console.log(displayResultInPassiveTense(sum(4, 5)));
