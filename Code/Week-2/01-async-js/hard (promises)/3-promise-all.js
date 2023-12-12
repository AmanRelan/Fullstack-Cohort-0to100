/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
*/

// function waitOneSecond(seconds) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () { resolve(`I am resolved in ${seconds} seconds!!!`) }, seconds * 1000)
//     });
// }

// function waitTwoSecond(seconds) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () { resolve(`I am resolved in ${seconds} seconds!!!`) }, seconds * 1000)
//     });
// }

// function waitThreeSecond(seconds) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () { resolve(`I am resolved in ${seconds} seconds!!!`) }, seconds * 1000)
//     });
// }

function calculateTime(a, b, c) {
    return new Promise(function (resolve, reject) {
        const beforeInitializationTime = new Date().getTime();
        Promise.all([wait(a), wait(b), wait(c)]).then((values) => {
            const afterCompletionOfPromise = new Date().getTime();
            const difference = afterCompletionOfPromise - beforeInitializationTime;
            resolve(difference);
        });
    });
}
function wait(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(`I am resolved in ${n} seconds!!!`) }, n * 1000)
    });
}

// The total time it took in this case is 3.013s
module.exports = calculateTime;