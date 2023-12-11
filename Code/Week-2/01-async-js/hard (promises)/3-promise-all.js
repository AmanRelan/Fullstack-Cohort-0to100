/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
*/

function waitOneSecond(seconds) {
    return wait(seconds);
}

function waitTwoSecond(seconds) {
    return wait(seconds);
}

function waitThreeSecond(seconds) {
    return wait(seconds);
}

function calculateTime(a, b, c) {
    const beforeInitializationTime = new Date().getTime();
    Promise.all([waitOneSecond(a), waitTwoSecond(b), waitThreeSecond(c)]).then((values) => {
        console.log(values);
        const afterCompletionOfPromise = new Date().getTime();
        console.log("Total Time Taken:- ", (afterCompletionOfPromise - beforeInitializationTime) / 1000, "seconds");

    });
}
function wait(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(`I am resolved in ${n} seconds!!!`) }, n * 1000)
    });
}

// The total time it took in this case is 3.013s