/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
*/

function waitOneSecond(a) {
    return wait(a);
}

function waitTwoSecond(a) {
    return wait(a);
}

function waitThreeSecond(a) {
    return wait(a);
}

function calculateTime(a, b, c) {
    const beforeInitializationTime = new Date().getTime();

    return new Promise(function (resolve, reject) {
        waitOneSecond(a)
            .then(function (value) {
                return waitTwoSecond(b);
            })
            .then(function (value) {
                return waitThreeSecond(c);
            })
            .then(function (value) {
                const afterCompletionOfPromise = new Date().getTime();
                resolve(afterCompletionOfPromise - beforeInitializationTime);
            })
            .catch(function (error) {
                return error;
            });
    })
}
function wait(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(`I am resolved in ${n} seconds!!!`) }, n * 1000)
    });
}

module.exports = calculateTime;

// The total time it took in this case is 6.1s