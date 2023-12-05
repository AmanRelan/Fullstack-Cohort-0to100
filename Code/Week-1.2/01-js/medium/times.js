/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime() {
    const beforeStarting = new Date().getTime();
    let sum = 0;
    for (let i = 1; i <= 1000000000; i++) {
        sum += i;
    }
    console.log(sum);
    const afterEnding = new Date().getTime();
    const timeDifference = afterEnding - beforeStarting;
    console.log(`Total Time it took to execute this function is :- ${timeDifference} ms`);
}
calculateTime();
// 0 to 100 -> ~4ms
// 0 to 100000 -> ~7ms
// 0 to 1000000000 -> ~956ms