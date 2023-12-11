/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
*/

function waitOneSecond() {
    return wait(1);
}

function waitTwoSecond() {
    return wait(2);
}

function waitThreeSecond() {
    return wait(3);
}

function calculateTime() {
    const beforeInitializationTime = new Date().getTime();

    waitOneSecond()
        .then(function (value) {
            console.log(value);
            return waitTwoSecond();
        })
        .then(function (value) {
            console.log(value);
            return waitThreeSecond();
        })
        .then(function (value) {
            console.log(value);
            const afterCompletionOfPromise = new Date().getTime();
            console.log("Total time for promise chaining:- ", (afterCompletionOfPromise - beforeInitializationTime) / 1000, "seconds");
        })
        .catch(function (error) {
            console.log(error);
        });
}
function wait(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(`I am resolved in ${n} seconds!!!`) }, n * 1000)
    });
}
calculateTime();

// The total time it took in this case is 6.1s