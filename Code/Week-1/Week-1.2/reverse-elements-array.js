/*
Write a program that reverses all the elements of an array
*/

const numbers = [21, 22, 23, 24, 25, 1000];
let reversedArray = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reversedArray.push(numbers[i]);
}
console.log(reversedArray);

// Using Reverse built-in method
const reversedMethodArray = [...numbers].reverse();
console.log(reversedMethodArray);